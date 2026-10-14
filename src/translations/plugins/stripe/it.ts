import type { StripeErrorCodesType } from "../../../types";

export const IT_IT = {
	UNAUTHORIZED: "Accesso non autorizzato",
	INVALID_REQUEST_BODY: "Corpo della richiesta non valido",
	SUBSCRIPTION_NOT_FOUND: "Abbonamento non trovato",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Piano di abbonamento non trovato",
	ALREADY_SUBSCRIBED_PLAN: "Sei già abbonato a questo piano",
	REFERENCE_ID_NOT_ALLOWED: "L'ID di riferimento non è consentito",
	CUSTOMER_NOT_FOUND: "Cliente Stripe non trovato per questo utente",
	UNABLE_TO_CREATE_CUSTOMER: "Impossibile creare il cliente",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Impossibile creare la sessione del portale di fatturazione",
	STRIPE_SIGNATURE_NOT_FOUND: "Firma Stripe non trovata",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Segreto del webhook Stripe non trovato",
	STRIPE_WEBHOOK_ERROR: "Errore del webhook Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Impossibile costruire l'evento Stripe",
	FAILED_TO_FETCH_PLANS: "Impossibile recuperare i piani",
	EMAIL_VERIFICATION_REQUIRED:
		"È necessaria la verifica dell'email prima di poter sottoscrivere un piano",
	SUBSCRIPTION_NOT_ACTIVE: "L'abbonamento non è attivo",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"L'abbonamento non è programmato per la cancellazione",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"L'abbonamento non ha cancellazioni in sospeso né modifiche di piano programmate",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"L'abbonamento dell'organizzazione non è abilitato",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Gli abbonamenti delle organizzazioni richiedono la configurazione del callback authorizeReference",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Impossibile eliminare un'organizzazione con un abbonamento attivo",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"L'ID di riferimento è obbligatorio. Fornisci referenceId o imposta activeOrganizationId nella sessione",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
