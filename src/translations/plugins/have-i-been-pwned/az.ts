import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const AZ = {
	// Have I Been Pwned ilə bağlı səhvlər
	PASSWORD_COMPROMISED:
		"Daxil etdiyiniz şifrə kompromet olunub. Zəhmət olmasa fərqli bir şifrə seçin.",
} satisfies HaveIBeenPwnedErrorCodesType;
export const AZ_AZ = {
	// Have I Been Pwned ilə bağlı səhvlər
	PASSWORD_COMPROMISED:
		"Daxil etdiyiniz şifrə kompromet olunub. Zəhmət olmasa fərqli bir şifrə seçin.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	az: AZ,
	"az-AZ": AZ_AZ,
} as const;
