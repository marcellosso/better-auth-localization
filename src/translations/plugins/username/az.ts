import type { UsernameErrorCodesType } from '../../../types';

export const AZ = {
  // Username related errors
  INVALID_USERNAME_OR_PASSWORD: 'Yanlış istifadəçi adı və ya şifrə',
  USERNAME_IS_ALREADY_TAKEN: 'İstifadəçi adı artıq mövcuddur. Başqa birini yoxlayın.',
  USERNAME_TOO_SHORT: 'İstifadəçi adı çox qısadır',
  USERNAME_TOO_LONG: 'İstifadəçi adı çox uzundur',
  INVALID_USERNAME: 'Yanlış istifadəçi adı',
  INVALID_DISPLAY_USERNAME: 'Yanlış göstərilən istifadəçi adı',
} satisfies UsernameErrorCodesType;

export const AZ_AZ = {
  // Username related errors
  INVALID_USERNAME_OR_PASSWORD: 'Yanlış istifadəçi adı və ya şifrə',
  USERNAME_IS_ALREADY_TAKEN: 'İstifadəçi adı artıq mövcuddur. Başqa birini yoxlayın.',
  USERNAME_TOO_SHORT: 'İstifadəçi adı çox qısadır',
  USERNAME_TOO_LONG: 'İstifadəçi adı çox uzundur',
  INVALID_USERNAME: 'Yanlış istifadəçi adı',
  INVALID_DISPLAY_USERNAME: 'Yanlış göstərilən istifadəçi adı',
} satisfies UsernameErrorCodesType;

export const LOCALES = {
  az: AZ,
  'az-AZ': AZ_AZ,
} as const;
