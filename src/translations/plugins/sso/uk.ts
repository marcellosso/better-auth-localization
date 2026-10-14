import type { SSOErrorCodesType } from "../../../types";

export const UK_UA = {
	SINGLE_LOGOUT_NOT_ENABLED: "Єдиний вихід (Single Logout) не ввімкнено",
	INVALID_LOGOUT_RESPONSE: "Недійсний LogoutResponse",
	INVALID_LOGOUT_REQUEST: "Недійсний LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "Не вдалося виконати вихід на стороні IdP",
	IDP_SLO_NOT_SUPPORTED: "IdP не підтримує Single Logout Service",
	SAML_PROVIDER_NOT_FOUND: "Провайдера SAML не знайдено",
	SAML_INVALID_XML: "Не вдалося розібрати XML відповіді SAML",
	SAML_INVALID_ENCODING: "Недійсна відповідь SAML у кодуванні base64",
	SAML_NO_ASSERTION: "Відповідь SAML не містить тверджень",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "Потрібен підпис твердження SAML",
	SAML_RESPONSE_INVALID_XML: "Не вдалося розібрати XML відповіді SAML",
	SAML_ASSERTION_MISSING: "У відповіді SAML відсутнє твердження",
	SAML_AUDIENCE_MISSING: "У твердженні SAML відсутній AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"Аудиторія твердження SAML не відповідає цьому Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"У твердженні SAML відсутній bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING:
		"У bearer SubjectConfirmationData SAML відсутній Recipient",
	SAML_RECIPIENT_MISMATCH:
		"Recipient у bearer SubjectConfirmationData SAML не відповідає цьому Service Provider",
	SAML_DESTINATION_MISMATCH:
		"Destination відповіді SAML не відповідає цьому Service Provider",
	SSO_USER_RESOLUTION_FAILED: "Не вдалося визначити користувача SSO",
	SSO_PROVIDER_MUTATION_REJECTED: "Зміну провайдера SSO не дозволено",
	SSO_PROVIDER_CHANGED:
		"Провайдер SSO змінився під час виконання операції. Перезавантажте провайдера та повторіть спробу",
	DOMAIN_VERIFIED: "Домен уже підтверджено",
	NO_PENDING_VERIFICATION: "Немає очікуваного підтвердження домену",
	INVALID_DOMAIN: "Недійсний домен",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
