import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const TR_TR = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Geçersiz cihaz kodu",
	EXPIRED_DEVICE_CODE: "Cihaz kodu süresi doldu",
	EXPIRED_USER_CODE: "Kullanıcı kodu süresi doldu",
	AUTHORIZATION_PENDING: "Yetkilendirme bekliyor",
	ACCESS_DENIED: "Erişim reddedildi",
	INVALID_USER_CODE: "Geçersiz kullanıcı kodu",
	DEVICE_CODE_ALREADY_PROCESSED: "Cihaz kodu zaten işlendi",
	POLLING_TOO_FREQUENTLY: "Çok sık sorgulama",
	INVALID_DEVICE_CODE_STATUS: "Geçersiz cihaz kodu durumu",
	AUTHENTICATION_REQUIRED: "Kimlik doğrulama gerekli",
	DEVICE_CODE_NOT_CLAIMED:
		"Cihaz kodu doğrulayan bir oturum tarafından henüz talep edilmedi; onaylamadan veya reddetmeden önce oturum açıkken `user_code` ile `GET /device` çağrısı yapın",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
