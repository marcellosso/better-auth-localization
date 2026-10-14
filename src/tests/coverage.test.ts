import { describe, expect, it } from "vitest";
import { defaultTranslations } from "../translations";
import { getUpstreamErrorCodes } from "./utils/upstream-codes";

describe("built-in translations", () => {
	const upstream = getUpstreamErrorCodes();

	it.each(Object.keys(defaultTranslations))(
		"%s translates every better-auth error code",
		(locale) => {
			const translations =
				defaultTranslations[locale as keyof typeof defaultTranslations];

			const missing = Object.entries(upstream).flatMap(([source, codes]) =>
				codes
					.filter((code) => !(code in translations))
					.map((code) => `${source}: ${code}`),
			);

			expect(missing).toEqual([]);
		},
	);
});
