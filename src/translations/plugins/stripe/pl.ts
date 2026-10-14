import type { StripeErrorCodesType } from "../../../types";

export const PL_PL = {
	UNAUTHORIZED: "Brak autoryzacji",
	INVALID_REQUEST_BODY: "Nieprawidłowa treść żądania",
	SUBSCRIPTION_NOT_FOUND: "Nie znaleziono subskrypcji",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Nie znaleziono planu subskrypcji",
	ALREADY_SUBSCRIBED_PLAN: "Masz już subskrypcję tego planu",
	REFERENCE_ID_NOT_ALLOWED: "Identyfikator referencyjny jest niedozwolony",
	CUSTOMER_NOT_FOUND: "Nie znaleziono klienta Stripe dla tego użytkownika",
	UNABLE_TO_CREATE_CUSTOMER: "Nie udało się utworzyć klienta",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Nie udało się utworzyć sesji portalu rozliczeniowego",
	STRIPE_SIGNATURE_NOT_FOUND: "Nie znaleziono podpisu Stripe",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Nie znaleziono sekretu webhooka Stripe",
	STRIPE_WEBHOOK_ERROR: "Błąd webhooka Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT:
		"Nie udało się skonstruować zdarzenia Stripe",
	FAILED_TO_FETCH_PLANS: "Nie udało się pobrać planów",
	EMAIL_VERIFICATION_REQUIRED:
		"Aby wykupić subskrypcję planu, musisz zweryfikować adres email",
	SUBSCRIPTION_NOT_ACTIVE: "Subskrypcja nie jest aktywna",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Subskrypcja nie jest zaplanowana do anulowania",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Subskrypcja nie ma oczekującego anulowania ani zaplanowanej zmiany planu",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"Subskrypcje organizacji nie są włączone",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Subskrypcje organizacji wymagają skonfigurowania wywołania zwrotnego authorizeReference",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Nie można usunąć organizacji z aktywną subskrypcją",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Identyfikator referencyjny jest wymagany. Podaj referenceId lub ustaw activeOrganizationId w sesji",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
