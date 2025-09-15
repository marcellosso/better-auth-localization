import type { ErrorCodesType } from "../types";

export const PT_BR = {
  // User related errors
  USER_NOT_FOUND: "Usuário não encontrado",
  FAILED_TO_CREATE_USER: "Falha ao criar usuário",
  FAILED_TO_UPDATE_USER: "Falha ao atualizar usuário",
  USER_ALREADY_EXISTS: "Usuário já existe",
  USER_EMAIL_NOT_FOUND: "Email do usuário não encontrado",
  USER_ALREADY_HAS_PASSWORD:
    "Usuário já possui uma senha. Forneça-a para excluir a conta.",

  // Session related errors
  FAILED_TO_CREATE_SESSION: "Falha ao criar sessão",
  FAILED_TO_GET_SESSION: "Falha ao obter sessão",
  SESSION_EXPIRED:
    "Sessão expirada. Autentique-se novamente para realizar esta ação.",

  // Authentication errors
  INVALID_PASSWORD: "Senha inválida",
  INVALID_EMAIL: "Email inválido",
  INVALID_EMAIL_OR_PASSWORD: "Email ou senha inválidos",
  INVALID_TOKEN: "Token inválido",
  EMAIL_NOT_VERIFIED: "Email não verificado",
  CREDENTIAL_ACCOUNT_NOT_FOUND: "Conta de credenciais não encontrada",

  // Password related errors
  PASSWORD_TOO_SHORT: "Senha muito curta",
  PASSWORD_TOO_LONG: "Senha muito longa",

  // Social auth errors
  SOCIAL_ACCOUNT_ALREADY_LINKED: "Conta já vinculada",
  PROVIDER_NOT_FOUND: "Provedor não encontrado",
  ID_TOKEN_NOT_SUPPORTED: "id_token não suportado",
  FAILED_TO_GET_USER_INFO: "Falha ao obter informações do usuário",

  // Account management errors
  EMAIL_CAN_NOT_BE_UPDATED: "Email não pode ser atualizado",
  FAILED_TO_UNLINK_LAST_ACCOUNT: "Você não pode desvincular sua última conta",
  ACCOUNT_NOT_FOUND: "Conta não encontrada",

  // Organization related errors
  YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
    "Você não tem permissão para criar uma nova organização",
  YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
    "Você atingiu o número máximo de organizações",
  ORGANIZATION_ALREADY_EXISTS: "A organização já existe",
  ORGANIZATION_NOT_FOUND: "Organização não encontrada",
  USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
    "O usuário não é membro da organização",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
    "Você não tem permissão para atualizar esta organização",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
    "Você não tem permissão para excluir esta organização",
  NO_ACTIVE_ORGANIZATION: "Nenhuma organização ativa",
  USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
    "O usuário já é membro desta organização",
  MEMBER_NOT_FOUND: "Membro não encontrado",
  ROLE_NOT_FOUND: "Cargo não encontrado",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
    "Você não tem permissão para criar uma nova equipe",
  TEAM_ALREADY_EXISTS: "A equipe já existe",
  TEAM_NOT_FOUND: "Equipe não encontrada",
  YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
    "Você não pode sair da organização sendo o único dono",
  YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
    "Você não pode sair da organização sem um dono",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
    "Você não tem permissão para remover este membro",
  YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
    "Você não tem permissão para convidar usuários para esta organização",
  USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
    "O usuário já foi convidado para esta organização",
  INVITATION_NOT_FOUND: "Convite não encontrado",
  YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
    "Você não é o destinatário do convite",
  EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
    "Verificação de e-mail necessária antes de aceitar ou recusar o convite",
  YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
    "Você não tem permissão para cancelar este convite",
  INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
    "O usuário que convidou não é mais membro da organização",
  YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
    "Você não tem permissão para convidar um usuário para este cargo",
  FAILED_TO_RETRIEVE_INVITATION: "Falha ao recuperar o convite",
  YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
    "Você atingiu o número máximo de equipes",
  UNABLE_TO_REMOVE_LAST_TEAM: "Não é possível remover a última equipe",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
    "Você não tem permissão para atualizar este membro",
  ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
    "Limite de membros da organização atingido",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
    "Você não tem permissão para criar equipes nesta organização",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
    "Você não tem permissão para excluir equipes nesta organização",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
    "Você não tem permissão para atualizar esta equipe",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
    "Você não tem permissão para excluir esta equipe",
  INVITATION_LIMIT_REACHED: "Limite de convites atingido",
  TEAM_MEMBER_LIMIT_REACHED: "Limite de membros da equipe atingido",
  USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "O usuário não é membro da equipe",
  YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
    "Você não tem permissão para listar os membros desta equipe",
  YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Você não possui uma equipe ativa",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
    "Você não tem permissão para criar um novo membro",
  YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
    "Você não tem permissão para remover um membro da equipe",
  YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
    "Você não tem permissão para acessar esta organização como proprietário",
  YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
    "Você não é membro desta organização",

  // Two Factor related errors
  OTP_NOT_ENABLED: "Senha descartável não habilitado",
  OTP_HAS_EXPIRED: "Senha descartável expirou",
  TOTP_NOT_ENABLED: "Senha de Uso Único Temporária não habilitada",
  TWO_FACTOR_NOT_ENABLED: "Autenticação em duas etapas não está habilitada",
  BACKUP_CODES_NOT_ENABLED: "Códigos de backup não estão habilitados",
  INVALID_BACKUP_CODE: "Código de backup inválido",
  INVALID_CODE: "Código inválido",
  TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
    "Muitas tentativas. Por favor, solicite um novo código.",
  INVALID_TWO_FACTOR_COOKIE: "Cookie de autenticação em duas etapas inválido",

  // Username related errors
  INVALID_USERNAME_OR_PASSWORD: "Nome de usuário ou senha inválidos",
  USERNAME_IS_ALREADY_TAKEN:
    "Nome de usuário já está em uso. Por favor, tente outro.",
  USERNAME_TOO_SHORT: "Nome de usuário muito curto",
  USERNAME_TOO_LONG: "Nome de usuário muito longo",
  INVALID_USERNAME: "Nome de usuário inválido",
  INVALID_DISPLAY_USERNAME: "Nome de exibição inválido",

  // Anonymous related errors
  COULD_NOT_CREATE_SESSION: "Não foi possível criar a sessão",
  ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
    "Usuários anônimos não podem entrar novamente como anônimos",

  // Phone number related errors
  INVALID_PHONE_NUMBER: "Número de telefone inválido",
  PHONE_NUMBER_EXIST: "Número de telefone já existe",
  INVALID_PHONE_NUMBER_OR_PASSWORD: "Número de telefone ou senha inválidos",
  UNEXPECTED_ERROR: "Erro inesperado",
  OTP_NOT_FOUND: "Senha descartável não encontrada",
  OTP_EXPIRED: "Senha descartável expirada",
  INVALID_OTP: "Senha descartável inválida",
  PHONE_NUMBER_NOT_VERIFIED: "Número de telefone não verificado",

  // Email OTP related errors
  TOO_MANY_ATTEMPTS: "Muitas tentativas",

  // Generic OAuth related errors
  INVALID_OAUTH_CONFIGURATION: "Configuração OAuth inválida",

  // Admin related errors
  YOU_CANNOT_BAN_YOURSELF: "Você não pode se banir",
  YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
    "Você não tem permissão para alterar o cargo de usuários",
  YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
    "Você não tem permissão para criar usuários",
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
    "Você não tem permissão para listar usuários",
  YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
    "Você não tem permissão para listar sessões de usuários",
  YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
    "Você não tem permissão para banir usuários",
  YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
    "Você não tem permissão para se passar por outros usuários",
  YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
    "Você não tem permissão para revogar sessões de usuários",
  YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
    "Você não tem permissão para excluir usuários",
  YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
    "Você não tem permissão para definir a senha de usuários",
  BANNED_USER: "Você foi banido deste aplicativo",
  YOU_ARE_NOT_ALLOWED_TO_GET_USER: "Você não tem permissão para obter usuário",
  NO_DATA_TO_UPDATE: "Nenhum dado para atualizar",
  YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
    "Você não tem permissão para atualizar usuários",
  YOU_CANNOT_REMOVE_YOURSELF: "Você não pode se remover",

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

  // Device authorization related errors
  INVALID_DEVICE_CODE: "Código de dispositivo inválido",
  EXPIRED_DEVICE_CODE: "Código de dispositivo expirado",
  EXPIRED_USER_CODE: "Código de usuário expirado",
  AUTHORIZATION_PENDING: "Autorização pendente",
  ACCESS_DENIED: "Acesso negado",
  INVALID_USER_CODE: "Código de usuário inválido",
  DEVICE_CODE_ALREADY_PROCESSED: "Código de dispositivo já processado",
  POLLING_TOO_FREQUENTLY: "Consultas muito frequentes",
  INVALID_DEVICE_CODE_STATUS: "Status do código de dispositivo inválido",
  AUTHENTICATION_REQUIRED: "Autenticação obrigatória",

  // Have I Been Pwned related errors
  PASSWORD_COMPROMISED:
    "A senha que você digitou foi comprometida. Por favor, escolha uma senha diferente.",

  // Multi session related errors
  INVALID_SESSION_TOKEN: "Token de sessão inválido",

  // Passkey related errors
  CHALLENGE_NOT_FOUND: "Desafio não encontrado",
  YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
    "Você não tem permissão para registrar esta chave de acesso",
  FAILED_TO_VERIFY_REGISTRATION: "Falha ao verificar o registro",
  PASSKEY_NOT_FOUND: "Chave de acesso não encontrada",
  AUTHENTICATION_FAILED: "Falha na autenticação",
  UNABLE_TO_CREATE_SESSION: "Não foi possível criar a sessão",
  FAILED_TO_UPDATE_PASSKEY: "Falha ao atualizar a chave de acesso",
} satisfies ErrorCodesType;

export const PT_PT = {
  // User related errors
  USER_NOT_FOUND: "Utilizador não encontrado",
  FAILED_TO_CREATE_USER: "Falha ao criar utilizador",
  FAILED_TO_UPDATE_USER: "Falha ao actualizar utilizador",
  USER_ALREADY_EXISTS: "Utilizador já existe",
  USER_EMAIL_NOT_FOUND: "E-mail do utilizador não encontrado",
  USER_ALREADY_HAS_PASSWORD:
    "Utilizador já possui uma palavra-passe. Forneça-a para eliminar a conta.",

  // Session related errors
  FAILED_TO_CREATE_SESSION: "Falha ao criar sessão",
  FAILED_TO_GET_SESSION: "Falha ao obter sessão",
  SESSION_EXPIRED:
    "Sessão expirada. Autentique-se novamente para realizar esta acção.",

  // Authentication errors
  INVALID_PASSWORD: "Palavra-passe inválida",
  INVALID_EMAIL: "E-mail inválido",
  INVALID_EMAIL_OR_PASSWORD: "E-mail ou palavra-passe inválidos",
  INVALID_TOKEN: "Token inválido",
  EMAIL_NOT_VERIFIED: "E-mail não verificado",
  CREDENTIAL_ACCOUNT_NOT_FOUND: "Conta de credenciais não encontrada",

  // Password related errors
  PASSWORD_TOO_SHORT: "Palavra-passe muito curta",
  PASSWORD_TOO_LONG: "Palavra-passe muito longa",

  // Social auth errors
  SOCIAL_ACCOUNT_ALREADY_LINKED: "Conta já associada",
  PROVIDER_NOT_FOUND: "Fornecedor não encontrado",
  ID_TOKEN_NOT_SUPPORTED: "id_token não suportado",
  FAILED_TO_GET_USER_INFO: "Falha ao obter informações do utilizador",

  // Account management errors
  EMAIL_CAN_NOT_BE_UPDATED: "E-mail não pode ser actualizado",
  FAILED_TO_UNLINK_LAST_ACCOUNT: "Não pode desassociar a sua última conta",
  ACCOUNT_NOT_FOUND: "Conta não encontrada",
} satisfies ErrorCodesType;

export const LOCALES = {
  "pt-BR": PT_BR,
  "pt-PT": PT_PT,
} as const;
