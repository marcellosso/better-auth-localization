import type { StripeErrorCodesType } from "../../../types";

export const RU_RU = {
	UNAUTHORIZED: "Неавторизованный доступ",
	INVALID_REQUEST_BODY: "Недействительное тело запроса",
	SUBSCRIPTION_NOT_FOUND: "Подписка не найдена",
	SUBSCRIPTION_PLAN_NOT_FOUND: "План подписки не найден",
	ALREADY_SUBSCRIBED_PLAN: "Вы уже подписаны на этот план",
	REFERENCE_ID_NOT_ALLOWED: "Идентификатор ссылки не разрешен",
	CUSTOMER_NOT_FOUND: "Клиент Stripe для этого пользователя не найден",
	UNABLE_TO_CREATE_CUSTOMER: "Не удалось создать клиента",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Не удалось создать сессию платежного портала",
	STRIPE_SIGNATURE_NOT_FOUND: "Подпись Stripe не найдена",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Секрет вебхука Stripe не найден",
	STRIPE_WEBHOOK_ERROR: "Ошибка вебхука Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Не удалось сформировать событие Stripe",
	FAILED_TO_FETCH_PLANS: "Не удалось получить планы",
	EMAIL_VERIFICATION_REQUIRED:
		"Чтобы оформить подписку на план, необходимо подтвердить email",
	SUBSCRIPTION_NOT_ACTIVE: "Подписка не активна",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Отмена подписки не запланирована",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"У подписки нет ожидающей отмены или запланированной смены плана",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED: "Подписка для организаций не включена",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Для подписок организаций необходимо настроить callback authorizeReference",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Невозможно удалить организацию с активной подпиской",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Требуется идентификатор ссылки. Укажите referenceId или задайте activeOrganizationId в сессии",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
