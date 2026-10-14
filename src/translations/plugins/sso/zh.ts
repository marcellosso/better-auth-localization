import type { SSOErrorCodesType } from "../../../types";

export const ZH_HANT = {
	SINGLE_LOGOUT_NOT_ENABLED: "未啟用單點登出",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse 無效",
	INVALID_LOGOUT_REQUEST: "LogoutRequest 無效",
	LOGOUT_FAILED_AT_IDP: "IdP 登出失敗",
	IDP_SLO_NOT_SUPPORTED: "IdP 不支援單點登出服務",
	SAML_PROVIDER_NOT_FOUND: "找不到 SAML 提供商",
	SAML_INVALID_XML: "解析 SAML 響應 XML 失敗",
	SAML_INVALID_ENCODING: "base64 編碼的 SAML 響應無效",
	SAML_NO_ASSERTION: "SAML 響應不包含斷言",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "需要 SAML 斷言簽名",
	SAML_RESPONSE_INVALID_XML: "無法解析 SAML 響應 XML",
	SAML_ASSERTION_MISSING: "SAML 響應缺少斷言",
	SAML_AUDIENCE_MISSING: "SAML 斷言缺少 AudienceRestriction",
	SAML_AUDIENCE_MISMATCH: "SAML 斷言的受眾與此服務提供商不匹配",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML 斷言缺少 bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING: "SAML bearer SubjectConfirmationData 缺少 Recipient",
	SAML_RECIPIENT_MISMATCH:
		"SAML bearer SubjectConfirmationData 的 Recipient 與此服務提供商不匹配",
	SAML_DESTINATION_MISMATCH: "SAML 響應的 Destination 與此服務提供商不匹配",
	SSO_USER_RESOLUTION_FAILED: "無法解析 SSO 用戶",
	SSO_PROVIDER_MUTATION_REJECTED: "不允許修改 SSO 提供商",
	SSO_PROVIDER_CHANGED: "操作進行期間 SSO 提供商已變更。請重新載入提供商後再試",
	DOMAIN_VERIFIED: "域名已驗證",
	NO_PENDING_VERIFICATION: "沒有待處理的域名驗證",
	INVALID_DOMAIN: "域名無效",
} satisfies SSOErrorCodesType;

export const ZH_HANS = {
	SINGLE_LOGOUT_NOT_ENABLED: "未启用单点登出",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse 无效",
	INVALID_LOGOUT_REQUEST: "LogoutRequest 无效",
	LOGOUT_FAILED_AT_IDP: "IdP 登出失败",
	IDP_SLO_NOT_SUPPORTED: "IdP 不支持单点登出服务",
	SAML_PROVIDER_NOT_FOUND: "找不到 SAML 提供商",
	SAML_INVALID_XML: "解析 SAML 响应 XML 失败",
	SAML_INVALID_ENCODING: "base64 编码的 SAML 响应无效",
	SAML_NO_ASSERTION: "SAML 响应不包含断言",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "需要 SAML 断言签名",
	SAML_RESPONSE_INVALID_XML: "无法解析 SAML 响应 XML",
	SAML_ASSERTION_MISSING: "SAML 响应缺少断言",
	SAML_AUDIENCE_MISSING: "SAML 断言缺少 AudienceRestriction",
	SAML_AUDIENCE_MISMATCH: "SAML 断言的受众与此服务提供商不匹配",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML 断言缺少 bearer SubjectConfirmationData",
	SAML_RECIPIENT_MISSING: "SAML bearer SubjectConfirmationData 缺少 Recipient",
	SAML_RECIPIENT_MISMATCH:
		"SAML bearer SubjectConfirmationData 的 Recipient 与此服务提供商不匹配",
	SAML_DESTINATION_MISMATCH: "SAML 响应的 Destination 与此服务提供商不匹配",
	SSO_USER_RESOLUTION_FAILED: "无法解析 SSO 用户",
	SSO_PROVIDER_MUTATION_REJECTED: "不允许修改 SSO 提供商",
	SSO_PROVIDER_CHANGED: "操作进行期间 SSO 提供商已变更。请重新加载提供商后再试",
	DOMAIN_VERIFIED: "域名已验证",
	NO_PENDING_VERIFICATION: "没有待处理的域名验证",
	INVALID_DOMAIN: "域名无效",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
