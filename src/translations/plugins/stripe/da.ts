import type { StripeErrorCodesType } from "../../../types";

export const DA_DK = {
	UNAUTHORIZED: "Uautoriseret adgang",
	INVALID_REQUEST_BODY: "Ugyldig anmodningsindhold",
	SUBSCRIPTION_NOT_FOUND: "Abonnement blev ikke fundet",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Abonnementsplan blev ikke fundet",
	ALREADY_SUBSCRIBED_PLAN: "Du abonnerer allerede på denne plan",
	REFERENCE_ID_NOT_ALLOWED: "Reference-ID er ikke tilladt",
	CUSTOMER_NOT_FOUND: "Stripe-kunde blev ikke fundet for denne bruger",
	UNABLE_TO_CREATE_CUSTOMER: "Kunne ikke oprette kunde",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Kunne ikke oprette session til faktureringsportalen",
	STRIPE_SIGNATURE_NOT_FOUND: "Stripe-signatur blev ikke fundet",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND:
		"Stripe-webhookens hemmelighed blev ikke fundet",
	STRIPE_WEBHOOK_ERROR: "Stripe-webhookfejl",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Kunne ikke oprette Stripe-hændelse",
	FAILED_TO_FETCH_PLANS: "Kunne ikke hente planer",
	EMAIL_VERIFICATION_REQUIRED:
		"E-mailen skal verificeres, før du kan abonnere på en plan",
	SUBSCRIPTION_NOT_ACTIVE: "Abonnementet er ikke aktivt",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Abonnementet er ikke planlagt til opsigelse",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Abonnementet har ingen afventende opsigelse eller planlagt planændring",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"Organisationsabonnement er ikke aktiveret",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Organisationsabonnementer kræver, at authorizeReference-callback er konfigureret",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"En organisation med aktivt abonnement kan ikke slettes",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Reference-ID er påkrævet. Angiv referenceId, eller sæt activeOrganizationId i sessionen",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
