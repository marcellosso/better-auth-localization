import type { StripeErrorCodesType } from "../../../types";

export const UK_UA = {
	UNAUTHORIZED: "Неавторизований доступ",
	INVALID_REQUEST_BODY: "Недійсне тіло запиту",
	SUBSCRIPTION_NOT_FOUND: "Підписку не знайдено",
	SUBSCRIPTION_PLAN_NOT_FOUND: "План підписки не знайдено",
	ALREADY_SUBSCRIBED_PLAN: "Ви вже підписані на цей план",
	REFERENCE_ID_NOT_ALLOWED: "Ідентифікатор посилання не дозволено",
	CUSTOMER_NOT_FOUND: "Клієнта Stripe для цього користувача не знайдено",
	UNABLE_TO_CREATE_CUSTOMER: "Не вдалося створити клієнта",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Не вдалося створити сесію платіжного порталу",
	STRIPE_SIGNATURE_NOT_FOUND: "Підпис Stripe не знайдено",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Секрет вебхука Stripe не знайдено",
	STRIPE_WEBHOOK_ERROR: "Помилка вебхука Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Не вдалося сформувати подію Stripe",
	FAILED_TO_FETCH_PLANS: "Не вдалося отримати плани",
	EMAIL_VERIFICATION_REQUIRED:
		"Щоб оформити підписку на план, потрібно підтвердити email",
	SUBSCRIPTION_NOT_ACTIVE: "Підписка не активна",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Скасування підписки не заплановано",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"У підписки немає очікуваного скасування або запланованої зміни плану",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"Підписку для організацій не ввімкнено",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Для підписок організацій потрібно налаштувати callback authorizeReference",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Неможливо видалити організацію з активною підпискою",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Потрібен ідентифікатор посилання. Вкажіть referenceId або задайте activeOrganizationId у сесії",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
