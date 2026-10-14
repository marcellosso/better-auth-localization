import type { SSOErrorCodesType } from "../../../types";

export const ES_ES = {
	SINGLE_LOGOUT_NOT_ENABLED: "El cierre de sesión único no está habilitado",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse no válido",
	INVALID_LOGOUT_REQUEST: "LogoutRequest no válido",
	LOGOUT_FAILED_AT_IDP: "Error al cerrar sesión en el IdP",
	IDP_SLO_NOT_SUPPORTED:
		"El IdP no admite el servicio de cierre de sesión único",
	SAML_PROVIDER_NOT_FOUND: "Proveedor SAML no encontrado",
	SAML_INVALID_XML: "Error al analizar el XML de la respuesta SAML",
	SAML_INVALID_ENCODING: "Respuesta SAML codificada en base64 no válida",
	SAML_NO_ASSERTION: "La respuesta SAML no contiene aserciones",
	SAML_ASSERTION_SIGNATURE_REQUIRED:
		"La firma de la aserción SAML es obligatoria",
	SAML_RESPONSE_INVALID_XML: "No se pudo analizar el XML de la respuesta SAML",
	SAML_ASSERTION_MISSING: "Falta una aserción en la respuesta SAML",
	SAML_AUDIENCE_MISSING: "Falta un AudienceRestriction en la aserción SAML",
	SAML_AUDIENCE_MISMATCH:
		"La audiencia de la aserción SAML no coincide con este Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"Falta el SubjectConfirmationData de tipo bearer en la aserción SAML",
	SAML_RECIPIENT_MISSING:
		"Falta un Recipient en el SubjectConfirmationData bearer de SAML",
	SAML_RECIPIENT_MISMATCH:
		"El Recipient del SubjectConfirmationData bearer de SAML no coincide con este Service Provider",
	SAML_DESTINATION_MISMATCH:
		"El Destination de la respuesta SAML no coincide con este Service Provider",
	SSO_USER_RESOLUTION_FAILED: "No se pudo identificar al usuario de SSO",
	SSO_PROVIDER_MUTATION_REJECTED: "No se permite modificar el proveedor de SSO",
	SSO_PROVIDER_CHANGED:
		"El proveedor de SSO cambió mientras la operación estaba en curso. Recarga el proveedor e inténtalo de nuevo",
	DOMAIN_VERIFIED: "El dominio ya ha sido verificado",
	NO_PENDING_VERIFICATION: "No hay ninguna verificación de dominio pendiente",
	INVALID_DOMAIN: "Dominio no válido",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
