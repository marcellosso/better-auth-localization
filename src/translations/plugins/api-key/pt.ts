import type { ApiKeyErrorCodesType } from "../../../types";

export const PT_BR = {
  // Api key related errors
  INVALID_METADATA_TYPE: "metadata deve ser um objeto ou indefinido",
  REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
    "Quantidade de recarga é obrigatório quando o intervalo de recarga é fornecido",
  REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
    "Intervalo de recarga é obrigatório quando a quantidade de recarga é fornecido",
  USER_BANNED: "Usuário banido",
  UNAUTHORIZED_SESSION: "Sessão não autorizada ou inválida",
  KEY_NOT_FOUND: "Chave de API não encontrada",
  KEY_DISABLED: "Chave de API desativada",
  KEY_EXPIRED: "Chave de API expirada",
  USAGE_EXCEEDED: "Chave de API atingiu o limite de uso",
  KEY_NOT_RECOVERABLE: "Chave de API não é recuperável",
  EXPIRES_IN_IS_TOO_SMALL:
    "O tempo de expiração é menor que o valor mínimo predefinido.",
  EXPIRES_IN_IS_TOO_LARGE:
    "O tempo de expiração é maior que o valor máximo predefinido.",
  INVALID_REMAINING: "O valor restante é muito grande ou muito pequeno.",
  INVALID_PREFIX_LENGTH:
    "O tamanho do prefixo é muito grande ou muito pequeno.",
  INVALID_NAME_LENGTH: "O tamanho do nome é muito grande ou muito pequeno.",
  METADATA_DISABLED: "Metadata está desativado.",
  RATE_LIMIT_EXCEEDED: "Limite de requisições excedido.",
  NO_VALUES_TO_UPDATE: "Nenhum valor para atualizar.",
  KEY_DISABLED_EXPIRATION:
    "Valores personalizados de expiração de chave estão desativados.",
  INVALID_API_KEY: "Chave de API inválida.",
  INVALID_USER_ID_FROM_API_KEY: "O ID do usuário da chave de API é inválido.",
  INVALID_API_KEY_GETTER_RETURN_TYPE:
    "O buscador de chave de API retornou um tipo inválido. Esperado: string.",
  SERVER_ONLY_PROPERTY:
    "A propriedade que você está tentando definir só pode ser definida a partir da instância de autenticação do servidor.",
  FAILED_TO_UPDATE_API_KEY: "Falha ao atualizar a chave de API",
  NAME_REQUIRED: "O nome da chave de API é obrigatório.",
} satisfies ApiKeyErrorCodesType;

export const PT_PT = {
  // Api key related errors
  INVALID_METADATA_TYPE: "metadata deve ser um objeto ou indefinido",
  REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
    "Quantidade de recarga é obrigatório quando o intervalo de recarga é fornecido",
  REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
    "Intervalo de recarga é obrigatório quando a quantidade de recarga é fornecido",
  USER_BANNED: "Utilizador banido",
  UNAUTHORIZED_SESSION: "Sessão não autorizada ou inválida",
  KEY_NOT_FOUND: "Chave de API não encontrada",
  KEY_DISABLED: "Chave de API desactivada",
  KEY_EXPIRED: "Chave de API expirada",
  USAGE_EXCEEDED: "Chave de API atingiu o limite de uso",
  KEY_NOT_RECOVERABLE: "Chave de API não é recuperável",
  EXPIRES_IN_IS_TOO_SMALL:
    "O tempo de expiração é menor que o valor mínimo predefinido.",
  EXPIRES_IN_IS_TOO_LARGE:
    "O tempo de expiração é maior que o valor máximo predefinido.",
  INVALID_REMAINING: "O valor restante é muito grande ou muito pequeno.",
  INVALID_PREFIX_LENGTH:
    "O tamanho do prefixo é muito grande ou muito pequeno.",
  INVALID_NAME_LENGTH: "O tamanho do nome é muito grande ou muito pequeno.",
  METADATA_DISABLED: "Metadata está desactivado.",
  RATE_LIMIT_EXCEEDED: "Limite de requisições excedido.",
  NO_VALUES_TO_UPDATE: "Nenhum valor para actualizar.",
  KEY_DISABLED_EXPIRATION:
    "Valores personalizados de expiração de chave estão desactivados.",
  INVALID_API_KEY: "Chave de API inválida.",
  INVALID_USER_ID_FROM_API_KEY:
    "O ID do utilizador da chave de API é inválido.",
  INVALID_API_KEY_GETTER_RETURN_TYPE:
    "O buscador de chave de API retornou um tipo inválido. Esperado: string.",
  SERVER_ONLY_PROPERTY:
    "A propriedade que está a tentar definir só pode ser definida a partir da instância de autenticação do servidor.",
  FAILED_TO_UPDATE_API_KEY: "Falha ao actualizar a chave de API",
  NAME_REQUIRED: "O nome da chave de API é obrigatório.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
  "pt-BR": PT_BR,
  "pt-PT": PT_PT,
} as const;
