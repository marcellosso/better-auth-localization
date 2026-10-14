import type { PasskeyErrorCodesType } from "../../../types";

export const AZ = {
	CHALLENGE_NOT_FOUND: "Yoxlama çağırışı tapılmadı",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Bu giriş açarını qeydiyyatdan keçirməyə icazəniz yoxdur",
	FAILED_TO_VERIFY_REGISTRATION: "Qeydiyyatın yoxlanılması alınmadı",
	PASSKEY_NOT_FOUND: "Giriş açarı tapılmadı",
	AUTHENTICATION_FAILED: "Doğrulama uğursuz oldu",
	UNABLE_TO_CREATE_SESSION: "Sessiyanı yaratmaq alınmadı",
	FAILED_TO_UPDATE_PASSKEY: "Giriş açarını yeniləmək alınmadı",
	PREVIOUSLY_REGISTERED: "Əvvəllər qeydiyyatdan keçib",
	REGISTRATION_CANCELLED: "Qeydiyyat ləğv edildi",
	AUTH_CANCELLED: "Autentifikasiya ləğv edildi",
	SESSION_REQUIRED:
		"Passkey qeydiyyatı autentifikasiya olunmuş sessiya tələb edir",
	RESOLVE_USER_REQUIRED:
		"requireSession false olduqda passkey qeydiyyatı autentifikasiya olunmuş sessiya və ya resolveUser callback-i tələb edir",
	RESOLVED_USER_INVALID: "Müəyyən edilmiş istifadəçi yanlışdır",
} satisfies PasskeyErrorCodesType;
export const AZ_AZ = {
	...AZ,
	CHALLENGE_NOT_FOUND: "Yoxlama çağırışı tapılmadı",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Bu giriş açarını qeydiyyatdan keçirməyə icazəniz yoxdur",
	FAILED_TO_VERIFY_REGISTRATION: "Qeydiyyatın yoxlanılması alınmadı",
	PASSKEY_NOT_FOUND: "Giriş açarı tapılmadı",
	AUTHENTICATION_FAILED: "Doğrulama uğursuz oldu",
	UNABLE_TO_CREATE_SESSION: "Sessiyanı yaratmaq alınmadı",
	FAILED_TO_UPDATE_PASSKEY: "Giriş açarını yeniləmək alınmadı",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	az: AZ,
	"az-AZ": AZ_AZ,
} as const;
