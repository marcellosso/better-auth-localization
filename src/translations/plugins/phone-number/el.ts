import type { PhoneNumberErrorCodesType } from "../../../types";

export const EL_GR = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Μη έγκυρος αριθμός τηλεφώνου",
	PHONE_NUMBER_EXIST: "Ο αριθμός τηλεφώνου υπάρχει ήδη",
	INVALID_PHONE_NUMBER_OR_PASSWORD:
		"Μη έγκυρος αριθμός τηλεφώνου ή κωδικός πρόσβασης",
	UNEXPECTED_ERROR: "Απροσδόκητο σφάλμα",
	OTP_NOT_FOUND: "Ο κωδικός επαλήθευσης δεν βρέθηκε",
	OTP_EXPIRED: "Ο κωδικός επαλήθευσης έχει λήξει",
	INVALID_OTP: "Μη έγκυρος κωδικός επαλήθευσης",
	PHONE_NUMBER_NOT_VERIFIED: "Ο αριθμός τηλεφώνου δεν έχει επαληθευτεί",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
