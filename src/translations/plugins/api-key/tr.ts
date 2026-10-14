import type { ApiKeyErrorCodesType } from "../../../types";

export const TR_TR = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata bir nesne veya undefined olmalıdır",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"yeniden doldurma aralığı sağlandığında yeniden doldurma miktarı gereklidir",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"yeniden doldurma miktarı sağlandığında yeniden doldurma aralığı gereklidir",
	USER_BANNED: "kullanıcı yasaklandı",
	UNAUTHORIZED_SESSION: "yetkisiz veya geçersiz oturum",
	KEY_NOT_FOUND: "API anahtarı bulunamadı",
	KEY_DISABLED: "API anahtarı devre dışı",
	KEY_EXPIRED: "API anahtarı süresi doldu",
	USAGE_EXCEEDED: "API anahtarı kullanım limitini aştı",
	KEY_NOT_RECOVERABLE: "API anahtarı kurtarılamaz",
	EXPIRES_IN_IS_TOO_SMALL:
		"sona erme süresi önceden tanımlanmış minimum değerden küçük.",
	EXPIRES_IN_IS_TOO_LARGE:
		"sona erme süresi önceden tanımlanmış maksimum değerden büyük.",
	INVALID_REMAINING: "kalan değer çok büyük veya çok küçük.",
	INVALID_PREFIX_LENGTH: "önek boyutu çok büyük veya çok küçük.",
	INVALID_NAME_LENGTH: "isim boyutu çok büyük veya çok küçük.",
	METADATA_DISABLED: "metadata devre dışı.",
	RATE_LIMIT_EXCEEDED: "istek limiti aşıldı.",
	NO_VALUES_TO_UPDATE: "güncellenecek değer yok.",
	KEY_DISABLED_EXPIRATION: "özel anahtar sona erme değerleri devre dışı.",
	INVALID_API_KEY: "geçersiz API anahtarı.",
	INVALID_USER_ID_FROM_API_KEY: "API anahtarından kullanıcı ID'si geçersiz.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"API anahtarı getter'ı geçersiz tür döndürdü. Beklenen: string.",
	SERVER_ONLY_PROPERTY:
		"ayarlamaya çalıştığınız özellik yalnızca sunucu kimlik doğrulama örneğinden ayarlanabilir.",
	FAILED_TO_UPDATE_API_KEY: "API anahtarı güncellenemedi",
	NAME_REQUIRED: "API anahtarı adı gereklidir.",
	INVALID_REFERENCE_ID_FROM_API_KEY:
		"API anahtarındaki referans ID'si geçersiz.",
	ORGANIZATION_ID_REQUIRED:
		"Organizasyona ait API anahtarları için organizasyon ID'si gereklidir.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"Bu API anahtarına sahip olan organizasyonun üyesi değilsiniz.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"Organizasyon API anahtarlarında bu işlemi gerçekleştirme izniniz yok.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"Varsayılan API anahtarı yapılandırması bulunamadı.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"Organizasyona ait API anahtarları için organizasyon eklentisi gereklidir. Lütfen organizasyon eklentisini kurun ve yapılandırın.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
