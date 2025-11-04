import type { PasskeyErrorCodesType } from '../../../types';

export const AZ = {
  CHALLENGE_NOT_FOUND: 'Yoxlama çağırışı tapılmadı',
  YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY: 'Bu giriş açarını qeydiyyatdan keçirməyə icazəniz yoxdur',
  FAILED_TO_VERIFY_REGISTRATION: 'Qeydiyyatın yoxlanılması alınmadı',
  PASSKEY_NOT_FOUND: 'Giriş açarı tapılmadı',
  AUTHENTICATION_FAILED: 'Doğrulama uğursuz oldu',
  UNABLE_TO_CREATE_SESSION: 'Sessiyanı yaratmaq alınmadı',
  FAILED_TO_UPDATE_PASSKEY: 'Giriş açarını yeniləmək alınmadı',
} satisfies PasskeyErrorCodesType;
export const AZ_AZ = {
  CHALLENGE_NOT_FOUND: 'Yoxlama çağırışı tapılmadı',
  YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY: 'Bu giriş açarını qeydiyyatdan keçirməyə icazəniz yoxdur',
  FAILED_TO_VERIFY_REGISTRATION: 'Qeydiyyatın yoxlanılması alınmadı',
  PASSKEY_NOT_FOUND: 'Giriş açarı tapılmadı',
  AUTHENTICATION_FAILED: 'Doğrulama uğursuz oldu',
  UNABLE_TO_CREATE_SESSION: 'Sessiyanı yaratmaq alınmadı',
  FAILED_TO_UPDATE_PASSKEY: 'Giriş açarını yeniləmək alınmadı',
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
  az: AZ,
  'az-AZ': AZ_AZ,
} as const;
