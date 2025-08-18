import type { BetterAuthPlugin } from "better-auth";
import { createAuthMiddleware } from "better-auth/plugins";
import { defaultTranslations } from "./translations";
import type {
	AvailableLocales,
	LocalizationOptions,
	PartialErrorCodesType,
	Translations,
} from "./types";
import { deepMergeTranslations, hasBody, isErrorBody } from "./utils/helpers";
import { getTranslation } from "./utils/translations";

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
 * betterLocalbetterAuthLocalizationization({
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
export const localization = <
	TCustomTranslations extends Record<string, PartialErrorCodesType> = {},
>(
	options: LocalizationOptions<TCustomTranslations>,
) => {
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
		? async (request: Request) => {
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

	return {
		id: "better-auth-localization",
		hooks: {
			after: [
				{
					matcher: () => true,
					handler: createAuthMiddleware(async (ctx) => {
						const { request } = ctx;

						if (!request) return;

						const { returned } = ctx.context;

						if (!hasBody(returned) || !isErrorBody(returned.body)) return;

						const { body } = returned;

						const locale = await resolveLocale(request);

						if (locale === "default") return;

						const translatedMessage = getTranslation(
							body.code,
							locale,
							currFallbackLocale,
							mergedTranslations,
							body.message,
						);

						if (translatedMessage) {
							body.message = translatedMessage;
						}
					}),
				},
			],
		},
	} satisfies BetterAuthPlugin;
};

export type {
	AvailableLocales,
	BuiltInLocales,
	ErrorCodesType,
	ExtractCustomLocales,
	LocalizationOptions,
	PartialErrorCodesType,
} from "./types";
