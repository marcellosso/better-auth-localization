import type { StripeErrorCodesType } from "../../../types";

export const SV_SE = {
	UNAUTHORIZED: "Obehörig åtkomst",
	INVALID_REQUEST_BODY: "Ogiltig begärandekropp",
	SUBSCRIPTION_NOT_FOUND: "Prenumerationen hittades inte",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Prenumerationsplanen hittades inte",
	ALREADY_SUBSCRIBED_PLAN: "Du prenumererar redan på denna plan",
	REFERENCE_ID_NOT_ALLOWED: "Referens-ID är inte tillåtet",
	CUSTOMER_NOT_FOUND: "Stripe-kund hittades inte för denna användare",
	UNABLE_TO_CREATE_CUSTOMER: "Kunde inte skapa kund",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Kunde inte skapa session för faktureringsportalen",
	STRIPE_SIGNATURE_NOT_FOUND: "Stripe-signaturen hittades inte",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Stripe-webhookens hemlighet hittades inte",
	STRIPE_WEBHOOK_ERROR: "Stripe-webhookfel",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Kunde inte skapa Stripe-händelse",
	FAILED_TO_FETCH_PLANS: "Kunde inte hämta planer",
	EMAIL_VERIFICATION_REQUIRED:
		"E-postadressen måste verifieras innan du kan prenumerera på en plan",
	SUBSCRIPTION_NOT_ACTIVE: "Prenumerationen är inte aktiv",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Prenumerationen är inte schemalagd för uppsägning",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Prenumerationen har ingen väntande uppsägning eller schemalagd planändring",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"Organisationsprenumeration är inte aktiverad",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Organisationsprenumerationer kräver att authorizeReference-callback är konfigurerad",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Det går inte att ta bort en organisation med aktiv prenumeration",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Referens-ID krävs. Ange referenceId eller ställ in activeOrganizationId i sessionen",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
