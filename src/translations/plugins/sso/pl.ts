import type { SSOErrorCodesType } from "../../../types";

export const PL_PL = {
	SINGLE_LOGOUT_NOT_ENABLED:
		"Jednoczesne wylogowanie (Single Logout) nie jest włączone",
	INVALID_LOGOUT_RESPONSE: "Nieprawidłowy LogoutResponse",
	INVALID_LOGOUT_REQUEST: "Nieprawidłowy LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "Wylogowanie nie powiodło się w IdP",
	IDP_SLO_NOT_SUPPORTED: "IdP nie obsługuje usługi Single Logout",
	SAML_PROVIDER_NOT_FOUND: "Nie znaleziono dostawcy SAML",
	SAML_INVALID_XML: "Nie udało się przetworzyć XML odpowiedzi SAML",
	SAML_INVALID_ENCODING: "Nieprawidłowo zakodowana w base64 odpowiedź SAML",
	SAML_NO_ASSERTION: "Odpowiedź SAML nie zawiera żadnych asercji",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "Podpis asercji SAML jest wymagany",
	SAML_RESPONSE_INVALID_XML: "Nie udało się przetworzyć XML odpowiedzi SAML",
	SAML_ASSERTION_MISSING: "W odpowiedzi SAML brakuje asercji",
	SAML_AUDIENCE_MISSING: "W asercji SAML brakuje AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"Odbiorca asercji SAML nie odpowiada temu Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"W asercji SAML brakuje bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING:
		"W bearer SubjectConfirmationData SAML brakuje Recipient",
	SAML_RECIPIENT_MISMATCH:
		"Recipient w bearer SubjectConfirmationData SAML nie odpowiada temu Service Provider",
	SAML_DESTINATION_MISMATCH:
		"Destination odpowiedzi SAML nie odpowiada temu Service Provider",
	SSO_USER_RESOLUTION_FAILED: "Nie udało się rozpoznać użytkownika SSO",
	SSO_PROVIDER_MUTATION_REJECTED: "Modyfikacja dostawcy SSO jest niedozwolona",
	SSO_PROVIDER_CHANGED:
		"Dostawca SSO zmienił się w trakcie operacji. Załaduj dostawcę ponownie i spróbuj jeszcze raz",
	DOMAIN_VERIFIED: "Domena została już zweryfikowana",
	NO_PENDING_VERIFICATION: "Brak oczekującej weryfikacji domeny",
	INVALID_DOMAIN: "Nieprawidłowa domena",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
