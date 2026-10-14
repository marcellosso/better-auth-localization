import type {
	AvailableLocales,
	ErrorCodesType,
	PartialErrorCodesType,
	Translations,
} from "../types";

/** Translation for `code` in `locale`, then `fallbackLocale`, or `undefined`. */
export const lookupTranslation = <
	TCustomTranslations extends Record<string, PartialErrorCodesType>,
>(
	code: keyof ErrorCodesType,
	locale: AvailableLocales<TCustomTranslations>,
	fallbackLocale: AvailableLocales<TCustomTranslations>,
	mergedTranslations: Translations<TCustomTranslations>,
): string | undefined => {
	if (locale === "default") return;

	const translation = mergedTranslations[locale]?.[code];
	if (translation) return translation;

	if (fallbackLocale !== locale && fallbackLocale !== "default") {
		return mergedTranslations[fallbackLocale]?.[code] || undefined;
	}
};

export const getTranslation = <
	TCustomTranslations extends Record<string, PartialErrorCodesType>,
>(
	code: keyof ErrorCodesType,
	locale: AvailableLocales<TCustomTranslations>,
	fallbackLocale: AvailableLocales<TCustomTranslations>,
	mergedTranslations: Translations<TCustomTranslations>,
	originalMessage?: string,
) =>
	lookupTranslation(code, locale, fallbackLocale, mergedTranslations) ||
	originalMessage ||
	code;
