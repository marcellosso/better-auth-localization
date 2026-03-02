import type { PasskeyErrorCodesType } from "../../../types";

export const SK_SK_INFORMAL = {
  CHALLENGE_NOT_FOUND: "Výzva nenájdená",
  YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
    "Nemáš oprávnenie registrovať tento Passkey",
  FAILED_TO_VERIFY_REGISTRATION: "Overenie registrácie zlyhalo",
  PASSKEY_NOT_FOUND: "Passkey nenájdený",
  AUTHENTICATION_FAILED: "Prihlásenie zlyhalo",
  UNABLE_TO_CREATE_SESSION: "Nepodarilo sa vytvoriť používateľskú reláciu",
  FAILED_TO_UPDATE_PASSKEY: "Aktualizácia Passkey zlyhala",
} satisfies PasskeyErrorCodesType;
export const SK_SK_FORMAL = {
  ...SK_SK_INFORMAL,
  YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
    "Nemáte oprávnenie registrovat tento Passkey",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
  "sk": SK_SK_INFORMAL,
  "sk-SK-informal": SK_SK_INFORMAL,
  "sk-SK-formal": SK_SK_FORMAL,
} as const;
