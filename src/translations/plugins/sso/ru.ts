import type { SSOErrorCodesType } from "../../../types";

export const RU_RU = {
	SINGLE_LOGOUT_NOT_ENABLED: "Единый выход (Single Logout) не включен",
	INVALID_LOGOUT_RESPONSE: "Недействительный LogoutResponse",
	INVALID_LOGOUT_REQUEST: "Недействительный LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "Не удалось выполнить выход на стороне IdP",
	IDP_SLO_NOT_SUPPORTED: "IdP не поддерживает Single Logout Service",
	SAML_PROVIDER_NOT_FOUND: "Провайдер SAML не найден",
	SAML_INVALID_XML: "Не удалось разобрать XML ответа SAML",
	SAML_INVALID_ENCODING: "Недействительный ответ SAML в кодировке base64",
	SAML_NO_ASSERTION: "Ответ SAML не содержит утверждений",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "Требуется подпись утверждения SAML",
	SAML_RESPONSE_INVALID_XML: "Не удалось разобрать XML ответа SAML",
	SAML_ASSERTION_MISSING: "В ответе SAML отсутствует утверждение",
	SAML_AUDIENCE_MISSING: "В утверждении SAML отсутствует AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"Аудитория утверждения SAML не соответствует этому Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"В утверждении SAML отсутствует bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING:
		"В bearer SubjectConfirmationData SAML отсутствует Recipient",
	SAML_RECIPIENT_MISMATCH:
		"Recipient в bearer SubjectConfirmationData SAML не соответствует этому Service Provider",
	SAML_DESTINATION_MISMATCH:
		"Destination ответа SAML не соответствует этому Service Provider",
	SSO_USER_RESOLUTION_FAILED: "Не удалось определить пользователя SSO",
	SSO_PROVIDER_MUTATION_REJECTED: "Изменение провайдера SSO не разрешено",
	SSO_PROVIDER_CHANGED:
		"Провайдер SSO изменился во время выполнения операции. Перезагрузите провайдера и повторите попытку",
	DOMAIN_VERIFIED: "Домен уже подтвержден",
	NO_PENDING_VERIFICATION: "Нет ожидающего подтверждения домена",
	INVALID_DOMAIN: "Недействительный домен",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
