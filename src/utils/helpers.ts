import type { ErrorCodesType, PartialErrorCodesType, Translations } from "../types";

export const isErrorBody = (
	body: unknown,
): body is { code: keyof ErrorCodesType; message: string } => {
	return (
		body !== null &&
		body !== undefined &&
		typeof body === "object" &&
		"code" in body &&
		"message" in body
	);
};

export const hasBody = (returned: unknown): returned is { body: unknown } => {
	return (
		returned !== null &&
		returned !== undefined &&
		typeof returned === "object" &&
		"body" in returned
	);
};

/**
 * Deep merge translations - merges custom translations with default translations
 * at the individual key level, preserving all default translations while allowing
 * custom overrides for specific error codes.
 */
export const deepMergeTranslations = <
	TCustomTranslations extends Record<string, PartialErrorCodesType> = {},
>(
	defaultTranslations: Record<string, PartialErrorCodesType>,
	customTranslations?: Translations<TCustomTranslations>,
): Translations<TCustomTranslations> => {
	if (!customTranslations) {
		return defaultTranslations as Translations<TCustomTranslations>;
	}

	const result: Record<string, PartialErrorCodesType> = {};

	// First, copy all default translations
	for (const [locale, translations] of Object.entries(defaultTranslations)) {
		result[locale] = { ...translations };
	}

	// Then, merge custom translations at the individual key level
	for (const [locale, customTranslation] of Object.entries(customTranslations)) {
		if (customTranslation) {
			if (result[locale]) {
				// Merge with existing locale translations
				result[locale] = {
					...result[locale],
					...customTranslation,
				};
			} else {
				// New locale, just add it
				result[locale] = { ...customTranslation };
			}
		}
	}

	return result as Translations<TCustomTranslations>;
};
