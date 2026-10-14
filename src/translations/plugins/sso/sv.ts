import type { SSOErrorCodesType } from "../../../types";

export const SV_SE = {
	SINGLE_LOGOUT_NOT_ENABLED: "Single Logout är inte aktiverat",
	INVALID_LOGOUT_RESPONSE: "Ogiltig LogoutResponse",
	INVALID_LOGOUT_REQUEST: "Ogiltig LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "Utloggning hos IdP misslyckades",
	IDP_SLO_NOT_SUPPORTED: "IdP stöder inte Single Logout Service",
	SAML_PROVIDER_NOT_FOUND: "SAML-leverantören hittades inte",
	SAML_INVALID_XML: "Det gick inte att tolka SAML-svarets XML",
	SAML_INVALID_ENCODING: "Ogiltigt base64-kodat SAML-svar",
	SAML_NO_ASSERTION: "SAML-svaret innehåller inga assertions",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "Signatur för SAML-assertion krävs",
	SAML_RESPONSE_INVALID_XML: "SAML-svarets XML kunde inte tolkas",
	SAML_ASSERTION_MISSING: "SAML-svaret saknar en assertion",
	SAML_AUDIENCE_MISSING: "SAML-assertionen saknar en AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"SAML-assertionens målgrupp matchar inte denna Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML-assertionen saknar bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING:
		"SAML bearer SubjectConfirmationData saknar en Recipient",
	SAML_RECIPIENT_MISMATCH:
		"Recipient i SAML bearer SubjectConfirmationData matchar inte denna Service Provider",
	SAML_DESTINATION_MISMATCH:
		"Destination i SAML-svaret matchar inte denna Service Provider",
	SSO_USER_RESOLUTION_FAILED: "Det gick inte att fastställa SSO-användaren",
	SSO_PROVIDER_MUTATION_REJECTED:
		"Ändring av SSO-leverantören är inte tillåten",
	SSO_PROVIDER_CHANGED:
		"SSO-leverantören ändrades medan åtgärden pågick. Ladda om leverantören och försök igen",
	DOMAIN_VERIFIED: "Domänen har redan verifierats",
	NO_PENDING_VERIFICATION: "Det finns ingen väntande domänverifiering",
	INVALID_DOMAIN: "Ogiltig domän",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
