import type { SSOErrorCodesType } from "../../../types";

export const JA_JP = {
	SINGLE_LOGOUT_NOT_ENABLED: "シングルログアウトは有効になっていません",
	INVALID_LOGOUT_RESPONSE: "無効な LogoutResponse です",
	INVALID_LOGOUT_REQUEST: "無効な LogoutRequest です",
	LOGOUT_FAILED_AT_IDP: "IdP でのログアウトに失敗しました",
	IDP_SLO_NOT_SUPPORTED:
		"IdP はシングルログアウトサービスをサポートしていません",
	SAML_PROVIDER_NOT_FOUND: "SAML プロバイダーが見つかりません",
	SAML_INVALID_XML: "SAML レスポンスの XML を解析できませんでした",
	SAML_INVALID_ENCODING: "base64 エンコードされた SAML レスポンスが無効です",
	SAML_NO_ASSERTION: "SAML レスポンスにアサーションが含まれていません",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "SAML アサーションの署名が必要です",
	SAML_RESPONSE_INVALID_XML: "SAML レスポンスの XML を解析できませんでした",
	SAML_ASSERTION_MISSING: "SAML レスポンスにアサーションがありません",
	SAML_AUDIENCE_MISSING: "SAML アサーションに AudienceRestriction がありません",
	SAML_AUDIENCE_MISMATCH:
		"SAML アサーションのオーディエンスがこのサービスプロバイダーと一致しません",
	SAML_BEARER_CONFIRMATION_MISSING:
		"SAML アサーションに bearer の SubjectConfirmationData がありません",
	SAML_RECIPIENT_MISSING:
		"SAML bearer の SubjectConfirmationData に Recipient がありません",
	SAML_RECIPIENT_MISMATCH:
		"SAML bearer の SubjectConfirmationData の Recipient がこのサービスプロバイダーと一致しません",
	SAML_DESTINATION_MISMATCH:
		"SAML レスポンスの Destination がこのサービスプロバイダーと一致しません",
	SSO_USER_RESOLUTION_FAILED: "SSO ユーザーを解決できませんでした",
	SSO_PROVIDER_MUTATION_REJECTED: "SSO プロバイダーの変更は許可されていません",
	SSO_PROVIDER_CHANGED:
		"操作の実行中に SSO プロバイダーが変更されました。プロバイダーを再読み込みして、もう一度お試しください",
	DOMAIN_VERIFIED: "ドメインはすでに確認済みです",
	NO_PENDING_VERIFICATION: "保留中のドメイン確認はありません",
	INVALID_DOMAIN: "無効なドメインです",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
