import type { SSOErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	SINGLE_LOGOUT_NOT_ENABLED: "Single Logout is niet ingeschakeld",
	INVALID_LOGOUT_RESPONSE: "Ongeldige LogoutResponse",
	INVALID_LOGOUT_REQUEST: "Ongeldige LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "Uitloggen bij de IdP mislukt",
	IDP_SLO_NOT_SUPPORTED: "De IdP ondersteunt de Single Logout Service niet",
	SAML_PROVIDER_NOT_FOUND: "SAML-provider niet gevonden",
	SAML_INVALID_XML: "SAML-respons-XML kon niet worden geparsed",
	SAML_INVALID_ENCODING: "Ongeldige base64-gecodeerde SAML-respons",
	SAML_NO_ASSERTION: "De SAML-respons bevat geen assertions",
	SAML_ASSERTION_SIGNATURE_REQUIRED:
		"De handtekening van de SAML-assertion is vereist",
	SAML_RESPONSE_INVALID_XML: "De SAML-respons-XML kon niet worden geparsed",
	SAML_ASSERTION_MISSING: "In de SAML-respons ontbreekt een assertion",
	SAML_AUDIENCE_MISSING:
		"In de SAML-assertion ontbreekt een AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"De doelgroep van de SAML-assertion komt niet overeen met deze Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"In de SAML-assertion ontbreken bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING:
		"In de bearer SubjectConfirmationData van de SAML ontbreekt een Recipient",
	SAML_RECIPIENT_MISMATCH:
		"De Recipient van de bearer SubjectConfirmationData van de SAML komt niet overeen met deze Service Provider",
	SAML_DESTINATION_MISMATCH:
		"De Destination van de SAML-respons komt niet overeen met deze Service Provider",
	SSO_USER_RESOLUTION_FAILED: "SSO-gebruiker kon niet worden achterhaald",
	SSO_PROVIDER_MUTATION_REJECTED:
		"Wijziging van de SSO-provider is niet toegestaan",
	SSO_PROVIDER_CHANGED:
		"De SSO-provider is tijdens de bewerking gewijzigd. Laad de provider opnieuw en probeer het nog eens",
	DOMAIN_VERIFIED: "Het domein is al geverifieerd",
	NO_PENDING_VERIFICATION: "Er is geen openstaande domeinverificatie",
	INVALID_DOMAIN: "Ongeldig domein",
} satisfies SSOErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
