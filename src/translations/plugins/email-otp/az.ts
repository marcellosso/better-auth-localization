import type { EmailOTPErrorCodesType } from '../../../types';

export const AZ = {
  // E-poçt OTP ilə bağlı səhvlər
  TOO_MANY_ATTEMPTS: 'Çox cəhd edilib',
} satisfies EmailOTPErrorCodesType;
export const AZ_AZ = {
  // E-poçt OTP ilə bağlı səhvlər
  TOO_MANY_ATTEMPTS: 'Çox cəhd edilib',
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
  az: AZ,
  'az-AZ': AZ_AZ,
} as const;
