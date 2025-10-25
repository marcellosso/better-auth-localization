import * as plugins from "../translations/plugins";
import type { BuiltInLocales, ErrorCodesType } from "../types";

/**
 * Global utility function to create translation objects by automatically discovering and combining plugin translations
 * @param locale - The locale to extract translations for
 * @returns Combined translation object for the specified locale
 */
export function createTranslationObject(
	locale: BuiltInLocales,
): ErrorCodesType {
	const result: ErrorCodesType = {};

	// Gather all exported plugin translation objects into a list
	const pluginTranslations = Object.values(plugins);
	for (const pluginTranslation of pluginTranslations) {
		// Get the first exported object (should be the translations object)
		const translations = Object.values(pluginTranslation)[0] as Record<
			string,
			Record<string, string>
		>;
		if (translations?.[locale]) {
			for (const [key, value] of Object.entries(translations[locale])) {
				result[key as keyof ErrorCodesType] = value as string;
			}
		}
	}

	return result;
}
