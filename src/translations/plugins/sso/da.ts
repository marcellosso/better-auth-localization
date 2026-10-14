import type { SSOErrorCodesType } from "../../../types";

export const DA_DK = {
	SINGLE_LOGOUT_NOT_ENABLED: "Single Logout er ikke aktiveret",
	INVALID_LOGOUT_RESPONSE: "Ugyldig LogoutResponse",
	INVALID_LOGOUT_REQUEST: "Ugyldig LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "Logout hos IdP mislykkedes",
	IDP_SLO_NOT_SUPPORTED: "IdP understøtter ikke Single Logout Service",
	SAML_PROVIDER_NOT_FOUND: "SAML-udbyder blev ikke fundet",
	SAML_INVALID_XML: "SAML-svarets XML kunne ikke parses",
	SAML_INVALID_ENCODING: "Ugyldigt base64-kodet SAML-svar",
	SAML_NO_ASSERTION: "SAML-svaret indeholder ingen assertions",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "Signatur på SAML-assertion er påkrævet",
	SAML_RESPONSE_INVALID_XML: "SAML-svarets XML kunne ikke parses",
	SAML_ASSERTION_MISSING: "SAML-svaret mangler en assertion",
	SAML_AUDIENCE_MISSING: "SAML-assertionen mangler en AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"SAML-assertionens målgruppe stemmer ikke overens med denne Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML-assertionen mangler bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING:
		"SAML bearer SubjectConfirmationData mangler en Recipient",
	SAML_RECIPIENT_MISMATCH:
		"Recipient i SAML bearer SubjectConfirmationData stemmer ikke overens med denne Service Provider",
	SAML_DESTINATION_MISMATCH:
		"Destination i SAML-svaret stemmer ikke overens med denne Service Provider",
	SSO_USER_RESOLUTION_FAILED: "SSO-brugeren kunne ikke findes",
	SSO_PROVIDER_MUTATION_REJECTED: "Ændring af SSO-udbyderen er ikke tilladt",
	SSO_PROVIDER_CHANGED:
		"SSO-udbyderen blev ændret, mens handlingen stod på. Genindlæs udbyderen, og prøv igen",
	DOMAIN_VERIFIED: "Domænet er allerede verificeret",
	NO_PENDING_VERIFICATION: "Der findes ingen afventende domæneverifikation",
	INVALID_DOMAIN: "Ugyldigt domæne",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
