import type { StripeErrorCodesType } from "../../../types";

export const PT_BR = {
	UNAUTHORIZED: "Acesso não autorizado",
	INVALID_REQUEST_BODY: "Corpo da requisição inválido",
	SUBSCRIPTION_NOT_FOUND: "Assinatura não encontrada",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Plano de assinatura não encontrado",
	ALREADY_SUBSCRIBED_PLAN: "Você já está inscrito neste plano",
	REFERENCE_ID_NOT_ALLOWED: "O ID de referência não é permitido",
	CUSTOMER_NOT_FOUND: "Cliente do Stripe não encontrado para este usuário",
	UNABLE_TO_CREATE_CUSTOMER: "Não foi possível criar o cliente",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Não foi possível criar a sessão do portal de cobrança",
	STRIPE_SIGNATURE_NOT_FOUND: "Assinatura do webhook do Stripe não encontrada",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND:
		"Segredo do webhook do Stripe não encontrado",
	STRIPE_WEBHOOK_ERROR: "Erro no webhook do Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Falha ao construir o evento do Stripe",
	FAILED_TO_FETCH_PLANS: "Falha ao buscar os planos",
	EMAIL_VERIFICATION_REQUIRED:
		"É necessário verificar o email antes de assinar um plano",
	SUBSCRIPTION_NOT_ACTIVE: "A assinatura não está ativa",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"A assinatura não está programada para cancelamento",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"A assinatura não tem cancelamento pendente nem mudança de plano agendada",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"A assinatura de organização não está ativada",
	AUTHORIZE_REFERENCE_REQUIRED:
		"As assinaturas de organização exigem que o callback authorizeReference esteja configurado",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Não é possível excluir uma organização com assinatura ativa",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"O ID de referência é obrigatório. Informe referenceId ou defina activeOrganizationId na sessão",
} satisfies StripeErrorCodesType;

export const PT_PT = {
	UNAUTHORIZED: "Acesso não autorizado",
	INVALID_REQUEST_BODY: "Corpo do pedido inválido",
	SUBSCRIPTION_NOT_FOUND: "Subscrição não encontrada",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Plano de subscrição não encontrado",
	ALREADY_SUBSCRIBED_PLAN: "Já está subscrito a este plano",
	REFERENCE_ID_NOT_ALLOWED: "O ID de referência não é permitido",
	CUSTOMER_NOT_FOUND: "Cliente do Stripe não encontrado para este utilizador",
	UNABLE_TO_CREATE_CUSTOMER: "Não foi possível criar o cliente",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Não foi possível criar a sessão do portal de facturação",
	STRIPE_SIGNATURE_NOT_FOUND: "Assinatura do Stripe não encontrada",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND:
		"Segredo do webhook do Stripe não encontrado",
	STRIPE_WEBHOOK_ERROR: "Erro no webhook do Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Falha ao construir o evento do Stripe",
	FAILED_TO_FETCH_PLANS: "Falha ao obter os planos",
	EMAIL_VERIFICATION_REQUIRED:
		"É necessário verificar o e-mail antes de subscrever um plano",
	SUBSCRIPTION_NOT_ACTIVE: "A subscrição não está activa",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"A subscrição não está agendada para cancelamento",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"A subscrição não tem cancelamento pendente nem mudança de plano agendada",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"A subscrição de organização não está activada",
	AUTHORIZE_REFERENCE_REQUIRED:
		"As subscrições de organização exigem que o callback authorizeReference esteja configurado",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Não é possível eliminar uma organização com subscrição activa",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"O ID de referência é obrigatório. Indique referenceId ou defina activeOrganizationId na sessão",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"pt-BR": PT_BR,
	"pt-PT": PT_PT,
} as const;
