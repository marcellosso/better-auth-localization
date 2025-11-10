import type { TwoFactorErrorCodesType } from "../../../types";

export const AZ = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Bir dəfəlik şifrə aktiv deyil",
	OTP_HAS_EXPIRED: "Bir dəfəlik şifrənin müddəti bitib",
	TOTP_NOT_ENABLED: "Vaxta əsaslanan bir dəfəlik şifrə aktiv deyil",
	TWO_FACTOR_NOT_ENABLED: "İki mərhələli təsdiqləmə aktiv deyil",
	BACKUP_CODES_NOT_ENABLED: "Ehtiyat kodları aktiv deyil",
	INVALID_BACKUP_CODE: "Yanlış ehtiyat kodu",
	INVALID_CODE: "Yanlış kod",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Çox cəhd etdiniz. Zəhmət olmasa yeni kod tələb edin.",
	INVALID_TWO_FACTOR_COOKIE: "Yanlış iki mərhələli təsdiqləmə kukisi",
} satisfies TwoFactorErrorCodesType;
export const AZ_AZ = {
	OTP_NOT_ENABLED: "Bir dəfəlik şifrə aktiv deyil",
	OTP_HAS_EXPIRED: "Bir dəfəlik şifrənin müddəti bitib",
	TOTP_NOT_ENABLED: "Vaxta əsaslanan bir dəfəlik şifrə aktiv deyil",
	TWO_FACTOR_NOT_ENABLED: "İki mərhələli təsdiqləmə aktiv deyil",
	BACKUP_CODES_NOT_ENABLED: "Ehtiyat kodları aktiv deyil",
	INVALID_BACKUP_CODE: "Yanlış ehtiyat kodu",
	INVALID_CODE: "Yanlış kod",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Çox cəhd etdiniz. Zəhmət olmasa yeni kod tələb edin.",
	INVALID_TWO_FACTOR_COOKIE: "Yanlış iki mərhələli təsdiqləmə kukisi",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	az: AZ,
	"az-AZ": AZ_AZ,
} as const;
