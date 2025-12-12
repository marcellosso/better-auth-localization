import type { GenericOAuthErrorCodesType } from "../../../types";

export const VI_VN = {
  // Generic OAuth related errors
  INVALID_OAUTH_CONFIGURATION: "Cấu hình OAuth không hợp lệ",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
  "vi-VN": VI_VN,
} as const;
