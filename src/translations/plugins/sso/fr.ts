import type { SSOErrorCodesType } from "../../../types";

export const FR_FR = {
	SINGLE_LOGOUT_NOT_ENABLED: "La déconnexion unique n'est pas activée",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse invalide",
	INVALID_LOGOUT_REQUEST: "LogoutRequest invalide",
	LOGOUT_FAILED_AT_IDP: "Échec de la déconnexion auprès de l'IdP",
	IDP_SLO_NOT_SUPPORTED:
		"L'IdP ne prend pas en charge le service de déconnexion unique",
	SAML_PROVIDER_NOT_FOUND: "Fournisseur SAML introuvable",
	SAML_INVALID_XML: "Échec de l'analyse du XML de la réponse SAML",
	SAML_INVALID_ENCODING: "Réponse SAML encodée en base64 invalide",
	SAML_NO_ASSERTION: "La réponse SAML ne contient aucune assertion",
	SAML_ASSERTION_SIGNATURE_REQUIRED:
		"La signature de l'assertion SAML est requise",
	SAML_RESPONSE_INVALID_XML: "Impossible d'analyser le XML de la réponse SAML",
	SAML_ASSERTION_MISSING: "Il manque une assertion dans la réponse SAML",
	SAML_AUDIENCE_MISSING:
		"Il manque un AudienceRestriction dans l'assertion SAML",
	SAML_AUDIENCE_MISMATCH:
		"L'audience de l'assertion SAML ne correspond pas à ce Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"Il manque le SubjectConfirmationData de type bearer dans l'assertion SAML",
	SAML_RECIPIENT_MISSING:
		"Il manque un Recipient dans le SubjectConfirmationData bearer SAML",
	SAML_RECIPIENT_MISMATCH:
		"Le Recipient du SubjectConfirmationData bearer SAML ne correspond pas à ce Service Provider",
	SAML_DESTINATION_MISMATCH:
		"Le Destination de la réponse SAML ne correspond pas à ce Service Provider",
	SSO_USER_RESOLUTION_FAILED: "Impossible de résoudre l'utilisateur SSO",
	SSO_PROVIDER_MUTATION_REJECTED:
		"La modification du fournisseur SSO n'est pas autorisée",
	SSO_PROVIDER_CHANGED:
		"Le fournisseur SSO a changé pendant l'opération. Rechargez le fournisseur et réessayez",
	DOMAIN_VERIFIED: "Le domaine a déjà été vérifié",
	NO_PENDING_VERIFICATION: "Aucune vérification de domaine en attente",
	INVALID_DOMAIN: "Domaine invalide",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
