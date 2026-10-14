import type { AnonymousErrorCodesType } from "../../../types";

export const DA_DK = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Kunne ikke oprette session",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonyme brugere kan ikke logge ind igen anonymt",
	INVALID_EMAIL_FORMAT: "E-mailen blev ikke genereret i et gyldigt format",
	FAILED_TO_DELETE_ANONYMOUS_USER: "Kunne ikke slette anonym bruger",
	FAILED_TO_DELETE_ANONYMOUS_USER_SESSIONS:
		"Kunne ikke slette den anonyme brugers sessioner",
	USER_IS_NOT_ANONYMOUS: "Brugeren er ikke anonym",
	DELETE_ANONYMOUS_USER_DISABLED: "Sletning af anonyme brugere er deaktiveret",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
