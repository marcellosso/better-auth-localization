import { describe, expect, it } from "vitest";
import { deepMergeTranslations, hasBody, isErrorBody } from "../../utils/helpers";

describe("hasBody", () => {
	it("should return true for object with body property", () => {
		const objectWithBody = {
			body: { some: "data" },
		};
		expect(hasBody(objectWithBody)).toBe(true);
	});

	it("should return false for non-object types", () => {
		expect(hasBody("string")).toBe(false);
		expect(hasBody(123)).toBe(false);
		expect(hasBody(true)).toBe(false);
		expect(hasBody([])).toBe(false);
	});

	it("should return false for object without body property", () => {
		const objectWithoutBody = {
			data: "some data",
			status: 200,
		};
		expect(hasBody(objectWithoutBody)).toBe(false);
	});

	it("should return false for empty object", () => {
		expect(hasBody({})).toBe(false);
	});
});

describe("isErrorBody", () => {
	it("should return true for valid error body", () => {
		const validErrorBody = {
			code: "USER_NOT_FOUND",
			message: "User not found",
		};
		expect(isErrorBody(validErrorBody)).toBe(true);
	});

	it("should return false for non-object types", () => {
		expect(isErrorBody("string")).toBe(false);
		expect(isErrorBody(123)).toBe(false);
		expect(isErrorBody(true)).toBe(false);
		expect(isErrorBody([])).toBe(false);
	});

	it("should return false for object missing code property", () => {
		const bodyWithoutCode = {
			message: "Some message",
		};
		expect(isErrorBody(bodyWithoutCode)).toBe(false);
	});

	it("should return false for object missing message property", () => {
		const bodyWithoutMessage = {
			code: "USER_NOT_FOUND",
		};
		expect(isErrorBody(bodyWithoutMessage)).toBe(false);
	});
});

describe("deepMergeTranslations", () => {
	const defaultTranslations = {
		"pt-BR": {
			USER_NOT_FOUND: "Usuário não encontrado",
			INVALID_PASSWORD: "Senha inválida",
			ACCOUNT_NOT_FOUND: "Conta não encontrada",
		},
		"en-US": {
			USER_NOT_FOUND: "User not found",
			INVALID_PASSWORD: "Invalid password",
			ACCOUNT_NOT_FOUND: "Account not found",
		},
	};

	it("should return default translations when no custom translations provided", () => {
		const result = deepMergeTranslations(defaultTranslations);
		expect(result).toEqual(defaultTranslations);
	});

	it("should return default translations when custom translations is undefined", () => {
		const result = deepMergeTranslations(defaultTranslations, undefined);
		expect(result).toEqual(defaultTranslations);
	});

	it("should merge custom translations at individual key level", () => {
		const customTranslations = {
			"pt-BR": {
				ACCOUNT_NOT_FOUND: "Custom account message",
			},
		};

		const result = deepMergeTranslations(defaultTranslations, customTranslations);

		expect(result["pt-BR"]).toEqual({
			USER_NOT_FOUND: "Usuário não encontrado", // preserved from default
			INVALID_PASSWORD: "Senha inválida", // preserved from default
			ACCOUNT_NOT_FOUND: "Custom account message", // overridden by custom
		});

		expect(result["en-US"]).toEqual(defaultTranslations["en-US"]); // unchanged
	});

	it("should add new locale when not present in defaults", () => {
		const customTranslations = {
			"fr-FR": {
				USER_NOT_FOUND: "Utilisateur non trouvé",
				INVALID_PASSWORD: "Mot de passe invalide",
			},
		};

		const result = deepMergeTranslations(defaultTranslations, customTranslations);

		expect(result["fr-FR"]).toEqual({
			USER_NOT_FOUND: "Utilisateur non trouvé",
			INVALID_PASSWORD: "Mot de passe invalide",
		});

		// Original locales should remain unchanged
		expect(result["pt-BR"]).toEqual(defaultTranslations["pt-BR"]);
		expect(result["en-US"]).toEqual(defaultTranslations["en-US"]);
	});

	it("should handle multiple custom translations for different locales", () => {
		const customTranslations = {
			"pt-BR": {
				USER_NOT_FOUND: "Custom user message",
			},
			"en-US": {
				INVALID_PASSWORD: "Custom password message",
			},
		};

		const result = deepMergeTranslations(defaultTranslations, customTranslations);

		expect(result["pt-BR"]).toEqual({
			USER_NOT_FOUND: "Custom user message", // overridden
			INVALID_PASSWORD: "Senha inválida", // preserved
			ACCOUNT_NOT_FOUND: "Conta não encontrada", // preserved
		});

		expect(result["en-US"]).toEqual({
			USER_NOT_FOUND: "User not found", // preserved
			INVALID_PASSWORD: "Custom password message", // overridden
			ACCOUNT_NOT_FOUND: "Account not found", // preserved
		});
	});

	it("should handle empty custom translation objects", () => {
		const customTranslations = {
			"pt-BR": {},
		};

		const result = deepMergeTranslations(defaultTranslations, customTranslations);

		// Should remain unchanged since custom translation is empty
		expect(result["pt-BR"]).toEqual(defaultTranslations["pt-BR"]);
	});

	it("should handle null/undefined values in custom translations", () => {
		const customTranslations = {
			"pt-BR": {
				USER_NOT_FOUND: "Custom message",
			},
			"en-US": undefined, // This should be ignored
		} as any;

		const result = deepMergeTranslations(defaultTranslations, customTranslations);

		expect(result["pt-BR"]).toEqual({
			USER_NOT_FOUND: "Custom message",
			INVALID_PASSWORD: "Senha inválida",
			ACCOUNT_NOT_FOUND: "Conta não encontrada",
		});

		expect(result["en-US"]).toEqual(defaultTranslations["en-US"]); // unchanged
	});
});
