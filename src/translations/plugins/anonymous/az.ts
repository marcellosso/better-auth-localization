import type { AnonymousErrorCodesType } from '../../../types';

export const AZ = {
  // Anonymous related errors
  COULD_NOT_CREATE_SESSION: 'Sessiya yaradıla bilmədi',
  ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: 'Anonim istifadəçilər yenidən anonim olaraq giriş edə bilməzlər',
} satisfies AnonymousErrorCodesType;
export const AZ_AZ = {
  // Anonymous related errors
  COULD_NOT_CREATE_SESSION: 'Sessiya yaradıla bilmədi',
  ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: 'Anonim istifadəçilər yenidən anonim olaraq giriş edə bilməzlər',
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
  az: AZ,
  'az-AZ': AZ_AZ,
} as const;
