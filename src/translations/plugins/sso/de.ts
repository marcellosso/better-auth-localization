import type { SSOErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	SINGLE_LOGOUT_NOT_ENABLED: "Single Logout ist nicht aktiviert",
	INVALID_LOGOUT_RESPONSE: "Ungültige LogoutResponse",
	INVALID_LOGOUT_REQUEST: "Ungültige LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "Abmeldung beim IdP fehlgeschlagen",
	IDP_SLO_NOT_SUPPORTED: "Der IdP unterstützt den Single Logout Service nicht",
	SAML_PROVIDER_NOT_FOUND: "SAML-Anbieter nicht gefunden",
	SAML_INVALID_XML: "SAML-Antwort-XML konnte nicht geparst werden",
	SAML_INVALID_ENCODING: "Ungültige base64-kodierte SAML-Antwort",
	SAML_NO_ASSERTION: "Die SAML-Antwort enthält keine Assertions",
	SAML_ASSERTION_SIGNATURE_REQUIRED:
		"Die Signatur der SAML-Assertion ist erforderlich",
	SAML_RESPONSE_INVALID_XML: "Die SAML-Antwort-XML konnte nicht geparst werden",
	SAML_ASSERTION_MISSING: "In der SAML-Antwort fehlt eine Assertion",
	SAML_AUDIENCE_MISSING: "In der SAML-Assertion fehlt eine AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"Die Zielgruppe der SAML-Assertion stimmt nicht mit diesem Service Provider überein",
	SAML_BEARER_CONFIRMATION_MISSING:
		"In der SAML-Assertion fehlen bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING:
		"In den bearer SubjectConfirmationData der SAML fehlt ein Recipient",
	SAML_RECIPIENT_MISMATCH:
		"Der Recipient der bearer SubjectConfirmationData der SAML stimmt nicht mit diesem Service Provider überein",
	SAML_DESTINATION_MISMATCH:
		"Die Destination der SAML-Antwort stimmt nicht mit diesem Service Provider überein",
	SSO_USER_RESOLUTION_FAILED: "SSO-Benutzer konnte nicht aufgelöst werden",
	SSO_PROVIDER_MUTATION_REJECTED:
		"Änderung des SSO-Anbieters ist nicht erlaubt",
	SSO_PROVIDER_CHANGED:
		"Der SSO-Anbieter wurde während des Vorgangs geändert. Laden Sie den Anbieter neu und versuchen Sie es erneut",
	DOMAIN_VERIFIED: "Die Domain wurde bereits verifiziert",
	NO_PENDING_VERIFICATION: "Es gibt keine ausstehende Domain-Verifizierung",
	INVALID_DOMAIN: "Ungültige Domain",
} satisfies SSOErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
