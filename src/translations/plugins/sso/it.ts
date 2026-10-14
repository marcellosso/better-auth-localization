import type { SSOErrorCodesType } from "../../../types";

export const IT_IT = {
	SINGLE_LOGOUT_NOT_ENABLED: "Il Single Logout non è abilitato",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse non valido",
	INVALID_LOGOUT_REQUEST: "LogoutRequest non valido",
	LOGOUT_FAILED_AT_IDP: "Logout non riuscito presso l'IdP",
	IDP_SLO_NOT_SUPPORTED: "L'IdP non supporta il Single Logout Service",
	SAML_PROVIDER_NOT_FOUND: "Provider SAML non trovato",
	SAML_INVALID_XML: "Impossibile analizzare l'XML della risposta SAML",
	SAML_INVALID_ENCODING: "Risposta SAML codificata in base64 non valida",
	SAML_NO_ASSERTION: "La risposta SAML non contiene asserzioni",
	SAML_ASSERTION_SIGNATURE_REQUIRED:
		"La firma dell'asserzione SAML è obbligatoria",
	SAML_RESPONSE_INVALID_XML: "Impossibile analizzare l'XML della risposta SAML",
	SAML_ASSERTION_MISSING: "Nella risposta SAML manca un'asserzione",
	SAML_AUDIENCE_MISSING: "Nell'asserzione SAML manca un AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"Il destinatario (audience) dell'asserzione SAML non corrisponde a questo Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"Nell'asserzione SAML manca il SubjectConfirmationData di tipo bearer",
	SAML_RECIPIENT_MISSING:
		"Nel SubjectConfirmationData bearer SAML manca un Recipient",
	SAML_RECIPIENT_MISMATCH:
		"Il Recipient del SubjectConfirmationData bearer SAML non corrisponde a questo Service Provider",
	SAML_DESTINATION_MISMATCH:
		"Il Destination della risposta SAML non corrisponde a questo Service Provider",
	SSO_USER_RESOLUTION_FAILED: "Impossibile risolvere l'utente SSO",
	SSO_PROVIDER_MUTATION_REJECTED:
		"La modifica del provider SSO non è consentita",
	SSO_PROVIDER_CHANGED:
		"Il provider SSO è cambiato durante l'operazione. Ricarica il provider e riprova",
	DOMAIN_VERIFIED: "Il dominio è già stato verificato",
	NO_PENDING_VERIFICATION: "Nessuna verifica del dominio in sospeso",
	INVALID_DOMAIN: "Dominio non valido",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
