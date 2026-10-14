import type { StripeErrorCodesType } from "../../../types";

export const RO_RO = {
	UNAUTHORIZED: "Acces neautorizat",
	INVALID_REQUEST_BODY: "Corp de cerere invalid",
	SUBSCRIPTION_NOT_FOUND: "Abonamentul nu a fost găsit",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Planul de abonament nu a fost găsit",
	ALREADY_SUBSCRIBED_PLAN: "Sunteți deja abonat la acest plan",
	REFERENCE_ID_NOT_ALLOWED: "ID-ul de referință nu este permis",
	CUSTOMER_NOT_FOUND: "Clientul Stripe nu a fost găsit pentru acest utilizator",
	UNABLE_TO_CREATE_CUSTOMER: "Nu s-a putut crea clientul",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Nu s-a putut crea sesiunea portalului de facturare",
	STRIPE_SIGNATURE_NOT_FOUND: "Semnătura Stripe nu a fost găsită",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Secretul webhook Stripe nu a fost găsit",
	STRIPE_WEBHOOK_ERROR: "Eroare webhook Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Nu s-a putut construi evenimentul Stripe",
	FAILED_TO_FETCH_PLANS: "Nu s-au putut obține planurile",
	EMAIL_VERIFICATION_REQUIRED:
		"Este necesară verificarea adresei de email înainte de a vă abona la un plan",
	SUBSCRIPTION_NOT_ACTIVE: "Abonamentul nu este activ",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Abonamentul nu este programat pentru anulare",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Abonamentul nu are nicio anulare în așteptare sau schimbare de plan programată",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"Abonamentul pentru organizații nu este activat",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Abonamentele pentru organizații necesită configurarea callback-ului authorizeReference",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Nu se poate șterge o organizație cu abonament activ",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"ID-ul de referință este necesar. Furnizați referenceId sau setați activeOrganizationId în sesiune",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
