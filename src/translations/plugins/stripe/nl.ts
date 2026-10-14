import type { StripeErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	UNAUTHORIZED: "Ongeautoriseerde toegang",
	INVALID_REQUEST_BODY: "Ongeldige request body",
	SUBSCRIPTION_NOT_FOUND: "Abonnement niet gevonden",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Abonnementsplan niet gevonden",
	ALREADY_SUBSCRIBED_PLAN: "Je bent al geabonneerd op dit plan",
	REFERENCE_ID_NOT_ALLOWED: "Referentie-ID is niet toegestaan",
	CUSTOMER_NOT_FOUND: "Stripe-klant voor deze gebruiker niet gevonden",
	UNABLE_TO_CREATE_CUSTOMER: "Klant kon niet worden aangemaakt",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Sessie voor factureringsportaal kon niet worden aangemaakt",
	STRIPE_SIGNATURE_NOT_FOUND: "Stripe-handtekening niet gevonden",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Stripe-webhook-secret niet gevonden",
	STRIPE_WEBHOOK_ERROR: "Stripe-webhookfout",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT:
		"Stripe-gebeurtenis kon niet worden opgebouwd",
	FAILED_TO_FETCH_PLANS: "Plannen konden niet worden opgehaald",
	EMAIL_VERIFICATION_REQUIRED:
		"Je e-mailadres moet worden geverifieerd voordat je je op een plan kunt abonneren",
	SUBSCRIPTION_NOT_ACTIVE: "Abonnement is niet actief",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Het abonnement is niet gepland om te worden opgezegd",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Het abonnement heeft geen openstaande opzegging of geplande planwijziging",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"Organisatieabonnementen zijn niet ingeschakeld",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Organisatieabonnementen vereisen dat de authorizeReference-callback is geconfigureerd",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Een organisatie met een actief abonnement kan niet worden verwijderd",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Referentie-ID is vereist. Geef referenceId op of stel activeOrganizationId in de sessie in",
} satisfies StripeErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
