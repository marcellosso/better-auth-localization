import type { SSOErrorCodesType } from "../../../types";

export const RO_RO = {
	SINGLE_LOGOUT_NOT_ENABLED: "Single Logout nu este activat",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse invalid",
	INVALID_LOGOUT_REQUEST: "LogoutRequest invalid",
	LOGOUT_FAILED_AT_IDP: "Deconectarea a eșuat la IdP",
	IDP_SLO_NOT_SUPPORTED: "IdP nu acceptă Single Logout Service",
	SAML_PROVIDER_NOT_FOUND: "Furnizorul SAML nu a fost găsit",
	SAML_INVALID_XML: "Nu s-a putut analiza XML-ul răspunsului SAML",
	SAML_INVALID_ENCODING: "Răspuns SAML codificat base64 invalid",
	SAML_NO_ASSERTION: "Răspunsul SAML nu conține nicio aserțiune",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "Semnătura aserțiunii SAML este necesară",
	SAML_RESPONSE_INVALID_XML: "XML-ul răspunsului SAML nu a putut fi analizat",
	SAML_ASSERTION_MISSING: "Răspunsului SAML îi lipsește o aserțiune",
	SAML_AUDIENCE_MISSING: "Aserțiunii SAML îi lipsește AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"Audiența aserțiunii SAML nu corespunde acestui Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"Aserțiunii SAML îi lipsește bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING:
		"bearer SubjectConfirmationData din SAML nu are Recipient",
	SAML_RECIPIENT_MISMATCH:
		"Recipient din bearer SubjectConfirmationData SAML nu corespunde acestui Service Provider",
	SAML_DESTINATION_MISMATCH:
		"Destination din răspunsul SAML nu corespunde acestui Service Provider",
	SSO_USER_RESOLUTION_FAILED: "Nu s-a putut rezolva utilizatorul SSO",
	SSO_PROVIDER_MUTATION_REJECTED:
		"Modificarea furnizorului SSO nu este permisă",
	SSO_PROVIDER_CHANGED:
		"Furnizorul SSO s-a modificat în timpul operațiunii. Reîncărcați furnizorul și încercați din nou",
	DOMAIN_VERIFIED: "Domeniul a fost deja verificat",
	NO_PENDING_VERIFICATION: "Nu există nicio verificare de domeniu în așteptare",
	INVALID_DOMAIN: "Domeniu invalid",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
