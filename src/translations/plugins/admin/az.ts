import type { AdminErrorCodesType } from '../../../types';

export const AZ = {
  // Admin ilə bağlı səhvlər
  YOU_CANNOT_BAN_YOURSELF: 'Özünüzü ban edə bilməzsiniz',
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: 'İstifadəçi rollarını dəyişməyə icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: 'İstifadəçi yaratmağa icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: 'İstifadəçiləri siyahılamağa icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: 'İstifadəçi sessiyalarını siyahılamağa icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: 'İstifadəçiləri ban etməyə icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: 'Başqa istifadəçilər kimi daxil olmağa icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: 'İstifadəçi sessiyalarını ləğv etməyə icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: 'İstifadəçiləri silməyə icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: 'İstifadəçilərin şifrəsini təyin etməyə icazəniz yoxdur',
  BANNED_USER: 'Bu tətbiqdən ban edilmisiniz',
  YOU_ARE_NOT_ALLOWED_TO_GET_USER: 'İstifadəçi məlumatlarını əldə etməyə icazəniz yoxdur',
  NO_DATA_TO_UPDATE: 'Yenilənəcək məlumat yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: 'İstifadəçiləri yeniləməyə icazəniz yoxdur',
  YOU_CANNOT_REMOVE_YOURSELF: 'Özünüzü silə bilməzsiniz',
} satisfies AdminErrorCodesType;
export const AZ_AZ = {
  // Admin ilə bağlı səhvlər
  YOU_CANNOT_BAN_YOURSELF: 'Özünüzü ban edə bilməzsiniz',
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: 'İstifadəçi rollarını dəyişməyə icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: 'İstifadəçi yaratmağa icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: 'İstifadəçiləri siyahılamağa icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: 'İstifadəçi sessiyalarını siyahılamağa icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: 'İstifadəçiləri ban etməyə icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: 'Başqa istifadəçilər kimi daxil olmağa icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: 'İstifadəçi sessiyalarını ləğv etməyə icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: 'İstifadəçiləri silməyə icazəniz yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: 'İstifadəçilərin şifrəsini təyin etməyə icazəniz yoxdur',
  BANNED_USER: 'Bu tətbiqdən ban edilmisiniz',
  YOU_ARE_NOT_ALLOWED_TO_GET_USER: 'İstifadəçi məlumatlarını əldə etməyə icazəniz yoxdur',
  NO_DATA_TO_UPDATE: 'Yenilənəcək məlumat yoxdur',
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: 'İstifadəçiləri yeniləməyə icazəniz yoxdur',
  YOU_CANNOT_REMOVE_YOURSELF: 'Özünüzü silə bilməzsiniz',
} satisfies AdminErrorCodesType;

export const LOCALES = {
  az: AZ,
  'az-AZ': AZ_AZ,
} as const;
