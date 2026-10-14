import type { SSOErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	SINGLE_LOGOUT_NOT_ENABLED: "Jednotné odhlášení (Single Logout) není povoleno",
	INVALID_LOGOUT_RESPONSE: "Neplatný LogoutResponse",
	INVALID_LOGOUT_REQUEST: "Neplatný LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "Odhlášení u IdP se nezdařilo",
	IDP_SLO_NOT_SUPPORTED: "IdP nepodporuje Single Logout Service",
	SAML_PROVIDER_NOT_FOUND: "Poskytovatel SAML nebyl nalezen",
	SAML_INVALID_XML: "Nepodařilo se zpracovat XML odpovědi SAML",
	SAML_INVALID_ENCODING: "Neplatná odpověď SAML kódovaná v base64",
	SAML_NO_ASSERTION: "Odpověď SAML neobsahuje žádné asertace",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "Podpis asertace SAML je vyžadován",
	SAML_RESPONSE_INVALID_XML: "XML odpovědi SAML se nepodařilo zpracovat",
	SAML_ASSERTION_MISSING: "V odpovědi SAML chybí asertace",
	SAML_AUDIENCE_MISSING: "V asertaci SAML chybí AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"Cílová skupina asertace SAML neodpovídá tomuto Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"V asertaci SAML chybí bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING:
		"V bearer SubjectConfirmationData SAML chybí Recipient",
	SAML_RECIPIENT_MISMATCH:
		"Recipient v bearer SubjectConfirmationData SAML neodpovídá tomuto Service Provider",
	SAML_DESTINATION_MISMATCH:
		"Destination odpovědi SAML neodpovídá tomuto Service Provider",
	SSO_USER_RESOLUTION_FAILED: "Nepodařilo se zjistit uživatele SSO",
	SSO_PROVIDER_MUTATION_REJECTED: "Úprava poskytovatele SSO není povolena",
	SSO_PROVIDER_CHANGED:
		"Poskytovatel SSO se během operace změnil. Načti poskytovatele znovu a zkus to znovu",
	DOMAIN_VERIFIED: "Doména již byla ověřena",
	NO_PENDING_VERIFICATION: "Neexistuje žádné čekající ověření domény",
	INVALID_DOMAIN: "Neplatná doména",
} satisfies SSOErrorCodesType;

export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
	SSO_PROVIDER_CHANGED:
		"Poskytovatel SSO se během operace změnil. Načtěte poskytovatele znovu a zkuste to znovu",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"cs-CZ": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
} as const;
