import type { ApiKeyErrorCodesType } from '../../../types';

export const AZ = {
  // API açarı ilə bağlı səhvlər
  INVALID_METADATA_TYPE: 'metadata obyekt və ya undefined olmalıdır',
  REFILL_AMOUNT_AND_INTERVAL_REQUIRED: 'Yenidən doldurma intervalı verildikdə, yenidən doldurma məbləği tələb olunur',
  REFILL_INTERVAL_AND_AMOUNT_REQUIRED: 'Yenidən doldurma məbləği verildikdə, yenidən doldurma intervalı tələb olunur',
  USER_BANNED: 'İstifadəçi qadağan edilib',
  UNAUTHORIZED_SESSION: 'İcazəsiz və ya etibarsız sessiya',
  KEY_NOT_FOUND: 'API açarı tapılmadı',
  KEY_DISABLED: 'API açarı deaktiv edilib',
  KEY_EXPIRED: 'API açarının müddəti bitib',
  USAGE_EXCEEDED: 'API açarının istifadə limiti aşılıb',
  KEY_NOT_RECOVERABLE: 'API açarını bərpa etmək mümkün deyil',
  EXPIRES_IN_IS_TOO_SMALL: 'Müddət əvvəlcədən müəyyən edilmiş minimum dəyərdən kiçikdir.',
  EXPIRES_IN_IS_TOO_LARGE: 'Müddət əvvəlcədən müəyyən edilmiş maksimum dəyərdən böyükdür.',
  INVALID_REMAINING: 'Qalan dəyər çox böyük və ya çox kiçikdir.',
  INVALID_PREFIX_LENGTH: 'Prefiks uzunluğu çox böyük və ya çox kiçikdir.',
  INVALID_NAME_LENGTH: 'Adın uzunluğu çox böyük və ya çox kiçikdir.',
  METADATA_DISABLED: 'metadata deaktiv edilib.',
  RATE_LIMIT_EXCEEDED: 'Sorğu limiti aşılıb.',
  NO_VALUES_TO_UPDATE: 'Yenilənəcək dəyər yoxdur.',
  KEY_DISABLED_EXPIRATION: 'Xüsusi açar üçün bitmə vaxtı dəyərləri deaktiv edilib.',
  INVALID_API_KEY: 'Yanlış API açarı.',
  INVALID_USER_ID_FROM_API_KEY: 'API açarından əldə edilən istifadəçi ID-si yanlışdır.',
  INVALID_API_KEY_GETTER_RETURN_TYPE: 'API açarı getter-i yanlış tip qaytardı. Gözlənilən: string.',
  SERVER_ONLY_PROPERTY:
    'Təyin etməyə çalışdığınız xüsusiyyət yalnız serverdəki autentifikasiya nümunəsindən təyin oluna bilər.',
  FAILED_TO_UPDATE_API_KEY: 'API açarını yeniləmək alınmadı',
  NAME_REQUIRED: 'API açarının adı tələb olunur.',
} satisfies ApiKeyErrorCodesType;
export const AZ_AZ = {
  // API açarı ilə bağlı səhvlər
  INVALID_METADATA_TYPE: 'metadata obyekt və ya undefined olmalıdır',
  REFILL_AMOUNT_AND_INTERVAL_REQUIRED: 'Yenidən doldurma intervalı verildikdə, yenidən doldurma məbləği tələb olunur',
  REFILL_INTERVAL_AND_AMOUNT_REQUIRED: 'Yenidən doldurma məbləği verildikdə, yenidən doldurma intervalı tələb olunur',
  USER_BANNED: 'İstifadəçi qadağan edilib',
  UNAUTHORIZED_SESSION: 'İcazəsiz və ya etibarsız sessiya',
  KEY_NOT_FOUND: 'API açarı tapılmadı',
  KEY_DISABLED: 'API açarı deaktiv edilib',
  KEY_EXPIRED: 'API açarının müddəti bitib',
  USAGE_EXCEEDED: 'API açarının istifadə limiti aşılıb',
  KEY_NOT_RECOVERABLE: 'API açarını bərpa etmək mümkün deyil',
  EXPIRES_IN_IS_TOO_SMALL: 'Müddət əvvəlcədən müəyyən edilmiş minimum dəyərdən kiçikdir.',
  EXPIRES_IN_IS_TOO_LARGE: 'Müddət əvvəlcədən müəyyən edilmiş maksimum dəyərdən böyükdür.',
  INVALID_REMAINING: 'Qalan dəyər çox böyük və ya çox kiçikdir.',
  INVALID_PREFIX_LENGTH: 'Prefiks uzunluğu çox böyük və ya çox kiçikdir.',
  INVALID_NAME_LENGTH: 'Adın uzunluğu çox böyük və ya çox kiçikdir.',
  METADATA_DISABLED: 'metadata deaktiv edilib.',
  RATE_LIMIT_EXCEEDED: 'Sorğu limiti aşılıb.',
  NO_VALUES_TO_UPDATE: 'Yenilənəcək dəyər yoxdur.',
  KEY_DISABLED_EXPIRATION: 'Xüsusi açar üçün bitmə vaxtı dəyərləri deaktiv edilib.',
  INVALID_API_KEY: 'Yanlış API açarı.',
  INVALID_USER_ID_FROM_API_KEY: 'API açarından əldə edilən istifadəçi ID-si yanlışdır.',
  INVALID_API_KEY_GETTER_RETURN_TYPE: 'API açarı getter-i yanlış tip qaytardı. Gözlənilən: string.',
  SERVER_ONLY_PROPERTY:
    'Təyin etməyə çalışdığınız xüsusiyyət yalnız serverdəki autentifikasiya nümunəsindən təyin oluna bilər.',
  FAILED_TO_UPDATE_API_KEY: 'API açarını yeniləmək alınmadı',
  NAME_REQUIRED: 'API açarının adı tələb olunur.',
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
  az: AZ,
  'az-AZ': AZ_AZ,
} as const;
