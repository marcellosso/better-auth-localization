import type { StripeErrorCodesType } from "../../../types";

export const CS_CZ_INFORMAL = {
	UNAUTHORIZED: "Neautorizovaný přístup",
	INVALID_REQUEST_BODY: "Neplatné tělo požadavku",
	SUBSCRIPTION_NOT_FOUND: "Předplatné nebylo nalezeno",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Plán předplatného nebyl nalezen",
	ALREADY_SUBSCRIBED_PLAN: "Tento plán již máš předplacený",
	REFERENCE_ID_NOT_ALLOWED: "Referenční ID není povoleno",
	CUSTOMER_NOT_FOUND: "Zákazník Stripe pro tohoto uživatele nebyl nalezen",
	UNABLE_TO_CREATE_CUSTOMER: "Nepodařilo se vytvořit zákazníka",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Nepodařilo se vytvořit relaci fakturačního portálu",
	STRIPE_SIGNATURE_NOT_FOUND: "Podpis Stripe nebyl nalezen",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Tajný klíč webhooku Stripe nebyl nalezen",
	STRIPE_WEBHOOK_ERROR: "Chyba webhooku Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Nepodařilo se sestavit událost Stripe",
	FAILED_TO_FETCH_PLANS: "Nepodařilo se načíst plány",
	EMAIL_VERIFICATION_REQUIRED:
		"Před zakoupením předplatného plánu je nutné ověřit email",
	SUBSCRIPTION_NOT_ACTIVE: "Předplatné není aktivní",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Zrušení předplatného není naplánováno",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Předplatné nemá žádné čekající zrušení ani naplánovanou změnu plánu",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED: "Předplatné organizací není povoleno",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Předplatná organizací vyžadují nakonfigurovaný callback authorizeReference",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Organizaci s aktivním předplatným nelze smazat",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Referenční ID je povinné. Zadej referenceId nebo nastav activeOrganizationId v relaci",
} satisfies StripeErrorCodesType;

export const CS_CZ_FORMAL = {
	...CS_CZ_INFORMAL,
	ALREADY_SUBSCRIBED_PLAN: "Tento plán již máte předplacený",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Referenční ID je povinné. Zadejte referenceId nebo nastavte activeOrganizationId v relaci",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"cs-CZ": CS_CZ_INFORMAL,
	"cs-CZ-formal": CS_CZ_FORMAL,
	"cs-CZ-informal": CS_CZ_INFORMAL,
} as const;
