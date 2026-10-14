import type { StripeErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	UNAUTHORIZED: "Nicht autorisierter Zugriff",
	INVALID_REQUEST_BODY: "Ungültiger Anfragetext",
	SUBSCRIPTION_NOT_FOUND: "Abonnement nicht gefunden",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Abonnementplan nicht gefunden",
	ALREADY_SUBSCRIBED_PLAN: "Sie haben diesen Plan bereits abonniert",
	REFERENCE_ID_NOT_ALLOWED: "Referenz-ID ist nicht erlaubt",
	CUSTOMER_NOT_FOUND: "Stripe-Kunde für diesen Benutzer nicht gefunden",
	UNABLE_TO_CREATE_CUSTOMER: "Kunde konnte nicht erstellt werden",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Abrechnungsportal-Sitzung konnte nicht erstellt werden",
	STRIPE_SIGNATURE_NOT_FOUND: "Stripe-Signatur nicht gefunden",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Stripe-Webhook-Secret nicht gefunden",
	STRIPE_WEBHOOK_ERROR: "Stripe-Webhook-Fehler",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT:
		"Stripe-Ereignis konnte nicht erstellt werden",
	FAILED_TO_FETCH_PLANS: "Pläne konnten nicht abgerufen werden",
	EMAIL_VERIFICATION_REQUIRED:
		"Die E-Mail-Adresse muss verifiziert werden, bevor Sie einen Plan abonnieren können",
	SUBSCRIPTION_NOT_ACTIVE: "Abonnement ist nicht aktiv",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Das Abonnement ist nicht zur Kündigung vorgemerkt",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Das Abonnement hat keine ausstehende Kündigung oder geplante Planänderung",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"Organisationsabonnements sind nicht aktiviert",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Organisationsabonnements erfordern, dass der authorizeReference-Callback konfiguriert ist",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Eine Organisation mit aktivem Abonnement kann nicht gelöscht werden",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Referenz-ID ist erforderlich. Geben Sie referenceId an oder legen Sie activeOrganizationId in der Sitzung fest",
} satisfies StripeErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
