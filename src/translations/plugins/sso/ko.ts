import type { SSOErrorCodesType } from "../../../types";

export const KO_KO = {
	SINGLE_LOGOUT_NOT_ENABLED: "싱글 로그아웃이 활성화되어 있지 않습니다",
	INVALID_LOGOUT_RESPONSE: "잘못된 LogoutResponse입니다",
	INVALID_LOGOUT_REQUEST: "잘못된 LogoutRequest입니다",
	LOGOUT_FAILED_AT_IDP: "IdP에서 로그아웃하지 못했습니다",
	IDP_SLO_NOT_SUPPORTED: "IdP가 싱글 로그아웃 서비스를 지원하지 않습니다",
	SAML_PROVIDER_NOT_FOUND: "SAML 공급자를 찾을 수 없습니다",
	SAML_INVALID_XML: "SAML 응답 XML을 구문 분석하지 못했습니다",
	SAML_INVALID_ENCODING: "base64로 인코딩된 SAML 응답이 유효하지 않습니다",
	SAML_NO_ASSERTION: "SAML 응답에 어설션이 없습니다",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "SAML 어설션 서명이 필요합니다",
	SAML_RESPONSE_INVALID_XML: "SAML 응답 XML을 구문 분석할 수 없습니다",
	SAML_ASSERTION_MISSING: "SAML 응답에 어설션이 없습니다",
	SAML_AUDIENCE_MISSING: "SAML 어설션에 AudienceRestriction이 없습니다",
	SAML_AUDIENCE_MISMATCH:
		"SAML 어설션의 대상이 이 서비스 공급자와 일치하지 않습니다",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML 어설션에 bearer SubjectConfirmationData가 없습니다",
	SAML_RECIPIENT_MISSING:
		"SAML bearer SubjectConfirmationData에 Recipient가 없습니다",
	SAML_RECIPIENT_MISMATCH:
		"SAML bearer SubjectConfirmationData의 Recipient가 이 서비스 공급자와 일치하지 않습니다",
	SAML_DESTINATION_MISMATCH:
		"SAML 응답의 Destination이 이 서비스 공급자와 일치하지 않습니다",
	SSO_USER_RESOLUTION_FAILED: "SSO 사용자를 확인할 수 없습니다",
	SSO_PROVIDER_MUTATION_REJECTED: "SSO 공급자 변경은 허용되지 않습니다",
	SSO_PROVIDER_CHANGED:
		"작업이 진행되는 동안 SSO 공급자가 변경되었습니다. 공급자를 다시 불러온 후 다시 시도하세요",
	DOMAIN_VERIFIED: "도메인이 이미 인증되었습니다",
	NO_PENDING_VERIFICATION: "대기 중인 도메인 인증이 없습니다",
	INVALID_DOMAIN: "잘못된 도메인입니다",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KO,
} as const;
