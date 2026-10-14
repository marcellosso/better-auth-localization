import type { StripeErrorCodesType } from "../../../types";

export const ES_ES = {
	UNAUTHORIZED: "Acceso no autorizado",
	INVALID_REQUEST_BODY: "Cuerpo de la solicitud no válido",
	SUBSCRIPTION_NOT_FOUND: "Suscripción no encontrada",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Plan de suscripción no encontrado",
	ALREADY_SUBSCRIBED_PLAN: "Ya estás suscrito a este plan",
	REFERENCE_ID_NOT_ALLOWED: "No se permite el ID de referencia",
	CUSTOMER_NOT_FOUND: "No se encontró el cliente de Stripe para este usuario",
	UNABLE_TO_CREATE_CUSTOMER: "No se pudo crear el cliente",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"No se pudo crear la sesión del portal de facturación",
	STRIPE_SIGNATURE_NOT_FOUND: "No se encontró la firma de Stripe",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND:
		"No se encontró el secreto del webhook de Stripe",
	STRIPE_WEBHOOK_ERROR: "Error en el webhook de Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Error al construir el evento de Stripe",
	FAILED_TO_FETCH_PLANS: "Error al obtener los planes",
	EMAIL_VERIFICATION_REQUIRED:
		"Se requiere verificar el email antes de suscribirte a un plan",
	SUBSCRIPTION_NOT_ACTIVE: "La suscripción no está activa",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"La suscripción no está programada para cancelarse",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"La suscripción no tiene una cancelación pendiente ni un cambio de plan programado",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"La suscripción de organización no está habilitada",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Las suscripciones de organización requieren que se configure el callback authorizeReference",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"No se puede eliminar una organización con una suscripción activa",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"El ID de referencia es obligatorio. Proporciona referenceId o establece activeOrganizationId en la sesión",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
