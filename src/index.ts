import type { BetterAuthPlugin } from "better-auth";
import { APIError, createAuthMiddleware, isAPIError } from "better-auth/api";
import { defaultTranslations } from "./translations";
import type {
	AvailableLocales,
	ErrorCodesType,
	LocalizationOptions,
	PartialErrorCodesType,
} from "./types";
import { deepMergeTranslations, isErrorBody } from "./utils/helpers";
import { getTranslation } from "./utils/translations";

const PLUGIN_ID = "better-auth-localization";

/**
 * Better Auth localization plugin
 *
 * @param options - The options for the plugin
 * @param options.defaultLocale - Default locale to use.
 * @param options.fallbackLocale - Fallback locale to use when the locale is not found in the translations. Default: "default"
 * @param options.translations - Add custom locales or override the current translations
 * @param options.getLocale - Function to get the locale from a request
 *
 * @example
 * ```typescript
 * localization({
 *   defaultLocale: "pt-BR",
 *   fallbackLocale: "default"
 * })
 * ```
 *
 * @example
 * ```typescript
 * localization({
 *   defaultLocale: "es-ES",
 *   fallbackLocale: "default",
 *   translations: {
 *     "es-ES": {
 *       USER_NOT_FOUND: "Usuario no encontrado",
 *     },
 *     "pt-BR": {
 *       USER_NOT_FOUND: "Overwrite the available pt-BR translation",
 *     }
 *   }
 * })
 * ```
 *
 * @example Dynamic locale detection
 * ```typescript
 * localization({
 *   defaultLocale: "pt-BR",
 *   fallbackLocale: "default",
 *   getLocale: async (request) => {
 *     // Get from cookie, header, or database
 *     return request.headers.get('x-locale') || 'pt-BR';
 *   }
 * })
 * ```
 */
export function localization<
	TCustomTranslations extends Record<string, PartialErrorCodesType> = {},
>(
	options: LocalizationOptions<TCustomTranslations>,
): {
	id: string;
	init: NonNullable<BetterAuthPlugin["init"]>;
	hooks: {
		after: Array<{
			matcher: (ctx: any) => boolean;
			handler: ReturnType<typeof createAuthMiddleware>;
		}>;
	};
} {
	const {
		defaultLocale = "default",
		fallbackLocale = "default",
		translations,
		getLocale,
	} = options;

	const currLocale = defaultLocale as AvailableLocales<TCustomTranslations>;
	const currFallbackLocale =
		fallbackLocale as AvailableLocales<TCustomTranslations>;

	const mergedTranslations = deepMergeTranslations(
		defaultTranslations,
		translations,
	);

	const resolveLocale = getLocale
		? async (request: Request | undefined) => {
				try {
					const locale = (await getLocale(
						request,
					)) as AvailableLocales<TCustomTranslations>;
					if (locale in mergedTranslations || locale === "default") {
						return locale;
					}

					console.warn(
						`[better-auth-localization] Locale "${String(locale)}" not found in translations. ` +
							`Available locales: ${Object.keys(mergedTranslations).join(
								", ",
							)}. ` +
							`Falling back to "${String(defaultLocale)}"`,
					);
					return currLocale;
				} catch (error) {
					console.error(
						`[better-auth-localization] Error resolving locale: ${error}`,
					);
					return currLocale;
				}
			}
		: () => currLocale;

	const translateMessage = async (
		body: { code: keyof ErrorCodesType; message: string },
		request: Request | undefined,
	) => {
		const locale = await resolveLocale(request);

		if (locale === "default") return;

		const translatedMessage = getTranslation(
			body.code,
			locale,
			currFallbackLocale,
			mergedTranslations,
			body.message,
		);

		if (translatedMessage && translatedMessage !== body.message) {
			return translatedMessage;
		}
	};

	const translateResponse = async (response: Response, request: Request) => {
		if (
			response.ok ||
			!response.headers.get("content-type")?.includes("application/json")
		) {
			return response;
		}

		const body: unknown = await response
			.clone()
			.json()
			.catch(() => undefined);
		if (!isErrorBody(body)) return response;

		const translatedMessage = await translateMessage(body, request);
		if (!translatedMessage) return response;

		return new Response(
			JSON.stringify({ ...body, message: translatedMessage }),
			{
				status: response.status,
				statusText: response.statusText,
				headers: response.headers,
			},
		);
	};

	return {
		id: PLUGIN_ID,
		init(ctx) {
			// Plugins such as captcha reject requests from `onRequest` with their own
			// Response. better-auth returns it directly, skipping endpoint hooks and
			// `onResponse`, so translate those responses by wrapping `onRequest`.
			for (const plugin of ctx.options.plugins ?? []) {
				const { onRequest } = plugin;
				if (!onRequest || plugin.id === PLUGIN_ID) continue;

				plugin.onRequest = async (request, context) => {
					const result = await onRequest(request, context);
					if (!result || !("response" in result)) return result;

					return {
						response: await translateResponse(result.response, request),
					};
				};
			}
		},
		hooks: {
			after: [
				{
					matcher: () => true,
					handler: createAuthMiddleware(async (ctx) => {
						const { request } = ctx;

						const { returned } = ctx.context;

						if (!isAPIError(returned) || !isErrorBody(returned.body)) return;

						const { body } = returned;

						const translatedMessage = await translateMessage(body, request);

						if (translatedMessage) {
							// Rebuild the error with better-auth's APIError (not ctx.error, which
							// creates a plain better-call error) so `instanceof APIError` checks keep
							// working, and keep the original status, extra body fields and headers.
							throw new APIError(
								returned.status,
								{ ...body, message: translatedMessage },
								returned.headers,
							);
						}
					}),
				},
			],
		},
	} satisfies BetterAuthPlugin;
}

export { betterAuthLocalizationClientPlugin } from "./client";
export type {
	AvailableLocales,
	BuiltInLocales,
	ErrorCodesType,
	ExtractCustomLocales,
	LocalizationOptions,
	PartialErrorCodesType,
} from "./types";
