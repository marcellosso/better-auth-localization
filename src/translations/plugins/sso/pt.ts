import type { SSOErrorCodesType } from "../../../types";

export const PT_BR = {
	SINGLE_LOGOUT_NOT_ENABLED: "O Logout Único não está ativado",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse inválido",
	INVALID_LOGOUT_REQUEST: "LogoutRequest inválido",
	LOGOUT_FAILED_AT_IDP: "Falha no logout no IdP",
	IDP_SLO_NOT_SUPPORTED: "O IdP não suporta o Serviço de Logout Único",
	SAML_PROVIDER_NOT_FOUND: "Provedor SAML não encontrado",
	SAML_INVALID_XML: "Falha ao analisar o XML da resposta SAML",
	SAML_INVALID_ENCODING: "Resposta SAML codificada em base64 inválida",
	SAML_NO_ASSERTION: "A resposta SAML não contém asserções",
	SAML_ASSERTION_SIGNATURE_REQUIRED:
		"A assinatura da asserção SAML é obrigatória",
	SAML_RESPONSE_INVALID_XML: "Não foi possível analisar o XML da resposta SAML",
	SAML_ASSERTION_MISSING: "A resposta SAML não contém uma asserção",
	SAML_AUDIENCE_MISSING: "A asserção SAML não contém um AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"O público da asserção SAML não corresponde a este Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"A asserção SAML não contém o SubjectConfirmationData do tipo bearer",
	SAML_RECIPIENT_MISSING:
		"O SubjectConfirmationData bearer do SAML não contém um Recipient",
	SAML_RECIPIENT_MISMATCH:
		"O Recipient do SubjectConfirmationData bearer do SAML não corresponde a este Service Provider",
	SAML_DESTINATION_MISMATCH:
		"O Destination da resposta SAML não corresponde a este Service Provider",
	SSO_USER_RESOLUTION_FAILED: "Não foi possível identificar o usuário SSO",
	SSO_PROVIDER_MUTATION_REJECTED: "A alteração do provedor SSO não é permitida",
	SSO_PROVIDER_CHANGED:
		"O provedor SSO foi alterado durante a operação. Recarregue o provedor e tente novamente",
	DOMAIN_VERIFIED: "O domínio já foi verificado",
	NO_PENDING_VERIFICATION: "Não há verificação de domínio pendente",
	INVALID_DOMAIN: "Domínio inválido",
} satisfies SSOErrorCodesType;

export const PT_PT = {
	SINGLE_LOGOUT_NOT_ENABLED: "O Logout Único não está activado",
	INVALID_LOGOUT_RESPONSE: "LogoutResponse inválido",
	INVALID_LOGOUT_REQUEST: "LogoutRequest inválido",
	LOGOUT_FAILED_AT_IDP: "Falha no logout no IdP",
	IDP_SLO_NOT_SUPPORTED: "O IdP não suporta o Serviço de Logout Único",
	SAML_PROVIDER_NOT_FOUND: "Fornecedor SAML não encontrado",
	SAML_INVALID_XML: "Falha ao analisar o XML da resposta SAML",
	SAML_INVALID_ENCODING: "Resposta SAML codificada em base64 inválida",
	SAML_NO_ASSERTION: "A resposta SAML não contém asserções",
	SAML_ASSERTION_SIGNATURE_REQUIRED:
		"A assinatura da asserção SAML é obrigatória",
	SAML_RESPONSE_INVALID_XML: "Não foi possível analisar o XML da resposta SAML",
	SAML_ASSERTION_MISSING: "A resposta SAML não contém uma asserção",
	SAML_AUDIENCE_MISSING: "A asserção SAML não contém um AudienceRestriction",
	SAML_AUDIENCE_MISMATCH:
		"O público da asserção SAML não corresponde a este Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"A asserção SAML não contém o SubjectConfirmationData do tipo bearer",
	SAML_RECIPIENT_MISSING:
		"O SubjectConfirmationData bearer do SAML não contém um Recipient",
	SAML_RECIPIENT_MISMATCH:
		"O Recipient do SubjectConfirmationData bearer do SAML não corresponde a este Service Provider",
	SAML_DESTINATION_MISMATCH:
		"O Destination da resposta SAML não corresponde a este Service Provider",
	SSO_USER_RESOLUTION_FAILED: "Não foi possível identificar o utilizador SSO",
	SSO_PROVIDER_MUTATION_REJECTED:
		"A alteração do fornecedor SSO não é permitida",
	SSO_PROVIDER_CHANGED:
		"O fornecedor SSO foi alterado durante a operação. Recarregue o fornecedor e tente novamente",
	DOMAIN_VERIFIED: "O domínio já foi verificado",
	NO_PENDING_VERIFICATION: "Não existe verificação de domínio pendente",
	INVALID_DOMAIN: "Domínio inválido",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"pt-BR": PT_BR,
	"pt-PT": PT_PT,
} as const;
