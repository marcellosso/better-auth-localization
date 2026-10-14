import type { PhoneNumberErrorCodesType } from "../../../types";

export const JA_JP = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "無効な電話番号",
	PHONE_NUMBER_EXIST: "電話番号は既に存在します",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "無効な電話番号またはパスワード",
	UNEXPECTED_ERROR: "予期しないエラー",
	OTP_NOT_FOUND: "認証コードが見つかりません",
	OTP_EXPIRED: "認証コードの有効期限が切れています",
	INVALID_OTP: "無効な認証コード",
	PHONE_NUMBER_NOT_VERIFIED: "電話番号が認証されていません",
	PHONE_NUMBER_NOT_EXIST: "電話番号が登録されていません",
	PHONE_NUMBER_CANNOT_BE_UPDATED: "電話番号は更新できません",
	SEND_OTP_NOT_IMPLEMENTED: "sendOTP が実装されていません",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
