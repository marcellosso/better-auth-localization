import { defaultTranslations } from "./translations";
import type {
	AvailableLocales,
	ErrorCodesType,
	PartialErrorCodesType,
	Translations,
} from "./types";
import { deepMergeTranslations } from "./utils/helpers";
import { lookupTranslation } from "./utils/translations";

export type TranslateErrorOptions<
	// biome-ignore lint/complexity/noBannedTypes: matches LocalizationOptions
	TCustomTranslations extends Record<string, PartialErrorCodesType> = {},
> = {
	/** Locale to try when `locale` has no translation for the code. */
	fallbackLocale?: AvailableLocales<TCustomTranslations>;
	/** Custom locales or overrides, merged over the built-in translations. */
	translations?: Translations<TCustomTranslations>;
};

/**
 * Translate a better-auth error code outside of a request, e.g. in UI code
 * where the locale comes from the URL. Doesn't import better-auth at runtime,
 * so it is safe to use in client bundles via `better-auth-localization/translate`.
 *
 * @returns The translated message, or `undefined` when there is no translation
 * (or `locale` is `"default"`), so you can fall back to the original message.
 *
 * @example
 * ```ts
 * const { error } = await authClient.signIn.email({ email, password });
 * if (error?.code) {
 *   toast(translateError(error.code, "pt-BR") ?? error.message);
 * }
 * ```
 */
export function translateError<
	// biome-ignore lint/complexity/noBannedTypes: matches LocalizationOptions
	TCustomTranslations extends Record<string, PartialErrorCodesType> = {},
>(
	code: keyof ErrorCodesType | (string & {}),
	locale: AvailableLocales<TCustomTranslations>,
	options: TranslateErrorOptions<TCustomTranslations> = {},
): string | undefined {
	const translations = deepMergeTranslations(
		defaultTranslations,
		options.translations,
	);

	return lookupTranslation(
		code as keyof ErrorCodesType,
		locale,
		options.fallbackLocale ?? "default",
		translations,
	);
}

export { defaultTranslations };
