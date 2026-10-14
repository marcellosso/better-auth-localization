import type { TwoFactorErrorCodesType } from "../../../types";

export const HI_HI = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "वन-टाइम पासवर्ड सक्षम नहीं है",
	OTP_HAS_EXPIRED: "वन-टाइम पासवर्ड समाप्त हो गया है",
	TOTP_NOT_ENABLED: "समय-आधारित वन-टाइम पासवर्ड सक्षम नहीं है",
	TWO_FACTOR_NOT_ENABLED: "दो-कारक प्रमाणीकरण सक्षम नहीं है",
	BACKUP_CODES_NOT_ENABLED: "बैकअप कोड सक्षम नहीं हैं",
	INVALID_BACKUP_CODE: "अमान्य बैकअप कोड",
	INVALID_CODE: "अमान्य कोड",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "बहुत अधिक प्रयास। कृपया नया कोड अनुरोध करें।",
	INVALID_TWO_FACTOR_COOKIE: "अमान्य दो-कारक प्रमाणीकरण कुकी",
	OTP_NOT_CONFIGURED: "OTP उपलब्ध नहीं है",
	TOTP_ALREADY_ENABLED: "TOTP पहले से सक्षम है",
	TOTP_NOT_CONFIGURED: "TOTP उपलब्ध नहीं है",
	ACCOUNT_TEMPORARILY_LOCKED:
		"बहुत अधिक असफल सत्यापन प्रयास। आपका खाता अस्थायी रूप से लॉक है। कृपया बाद में पुनः प्रयास करें।",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
