import type { DeviceAuthorizationErrorCodesType } from '../../../types';

export const AZ = {
  // Cihaz avtorizasiyası ilə bağlı səhvlər
  INVALID_DEVICE_CODE: 'Yanlış cihaz kodu',
  EXPIRED_DEVICE_CODE: 'Cihaz kodunun müddəti bitib',
  EXPIRED_USER_CODE: 'İstifadəçi kodunun müddəti bitib',
  AUTHORIZATION_PENDING: 'Avtorizasiya gözlənilir',
  ACCESS_DENIED: 'Giriş rədd edildi',
  INVALID_USER_CODE: 'Yanlış istifadəçi kodu',
  DEVICE_CODE_ALREADY_PROCESSED: 'Cihaz kodu artıq işlənib',
  POLLING_TOO_FREQUENTLY: 'Sorğular çox tez-tez göndərilir',
  INVALID_DEVICE_CODE_STATUS: 'Yanlış cihaz kodu statusu',
  AUTHENTICATION_REQUIRED: 'Doğrulama tələb olunur',
} satisfies DeviceAuthorizationErrorCodesType;
export const AZ_AZ = {
  // Cihaz avtorizasiyası ilə bağlı səhvlər
  INVALID_DEVICE_CODE: 'Yanlış cihaz kodu',
  EXPIRED_DEVICE_CODE: 'Cihaz kodunun müddəti bitib',
  EXPIRED_USER_CODE: 'İstifadəçi kodunun müddəti bitib',
  AUTHORIZATION_PENDING: 'Avtorizasiya gözlənilir',
  ACCESS_DENIED: 'Giriş rədd edildi',
  INVALID_USER_CODE: 'Yanlış istifadəçi kodu',
  DEVICE_CODE_ALREADY_PROCESSED: 'Cihaz kodu artıq işlənib',
  POLLING_TOO_FREQUENTLY: 'Sorğular çox tez-tez göndərilir',
  INVALID_DEVICE_CODE_STATUS: 'Yanlış cihaz kodu statusu',
  AUTHENTICATION_REQUIRED: 'Doğrulama tələb olunur',
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
  az: AZ,
  'az-AZ': AZ_AZ,
} as const;
