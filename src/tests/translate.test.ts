import { describe, expect, it } from "vitest";
import { translateError } from "../translate";

describe("translateError", () => {
	it("translates a built-in error code", () => {
		expect(translateError("INVALID_EMAIL_OR_PASSWORD", "pt-BR")).toBe(
			"Email ou senha inválidos",
		);
	});

	it("translates plugin error codes", () => {
		expect(translateError("INVALID_USERNAME_OR_PASSWORD", "pt-BR")).toBe(
			"Nome de usuário ou senha inválidos",
		);
	});

	it("returns undefined for the default locale and unknown codes", () => {
		expect(translateError("INVALID_EMAIL_OR_PASSWORD", "default")).toBe(
			undefined,
		);
		expect(translateError("SOME_CUSTOM_CODE", "pt-BR")).toBe(undefined);
	});

	it("uses the fallback locale when the locale has no translation", () => {
		expect(
			translateError("USER_NOT_FOUND", "fr-CA", {
				fallbackLocale: "fr-FR",
				translations: { "fr-CA": { INVALID_EMAIL: "Courriel invalide" } },
			}),
		).toBe(translateError("USER_NOT_FOUND", "fr-FR"));
	});

	it("prefers custom translations over built-in ones", () => {
		expect(
			translateError("INVALID_EMAIL_OR_PASSWORD", "pt-BR", {
				translations: {
					"pt-BR": { INVALID_EMAIL_OR_PASSWORD: "Credenciais incorretas" },
				},
			}),
		).toBe("Credenciais incorretas");
	});
});
