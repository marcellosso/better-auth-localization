import { describe, expect, it } from "vitest";
import { defaultTranslations } from "../translations";
import { getUpstreamErrorCodes } from "./utils/upstream-codes";

// Locales that predate the better-auth v1.7 codes and still have untranslated
// entries (those fall back to `fallbackLocale`). Remove a locale once it is complete.
const INCOMPLETE_LOCALES = ["sk-SK", "sk-SK-formal", "sk-SK-informal", "th-TH"];

describe("built-in translations", () => {
	const upstream = getUpstreamErrorCodes();

	const missingCodes = (locale: string) => {
		const translations =
			defaultTranslations[locale as keyof typeof defaultTranslations];

		return Object.entries(upstream).flatMap(([source, codes]) =>
			codes
				.filter((code) => !(code in translations))
				.map((code) => `${source}: ${code}`),
		);
	};

	it.each(
		Object.keys(defaultTranslations).filter(
			(locale) => !INCOMPLETE_LOCALES.includes(locale),
		),
	)("%s translates every better-auth error code", (locale) => {
		expect(missingCodes(locale)).toEqual([]);
	});

	it.each(INCOMPLETE_LOCALES)(
		"%s is a built-in locale that is still incomplete",
		(locale) => {
			expect(defaultTranslations).toHaveProperty([locale]);
			expect(missingCodes(locale)).not.toEqual([]);
		},
	);
});
