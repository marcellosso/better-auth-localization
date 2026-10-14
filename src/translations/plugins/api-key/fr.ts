import type { ApiKeyErrorCodesType } from "../../../types";

export const FR_FR = {
	// Api key related errors
	INVALID_METADATA_TYPE: "metadata doit être un objet ou undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"la quantité de remplissage est requise lorsque l'intervalle de remplissage est fourni",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"l'intervalle de remplissage est requis lorsque la quantité de remplissage est fournie",
	USER_BANNED: "utilisateur banni",
	UNAUTHORIZED_SESSION: "session non autorisée ou invalide",
	KEY_NOT_FOUND: "clé API introuvable",
	KEY_DISABLED: "clé API désactivée",
	KEY_EXPIRED: "clé API expirée",
	USAGE_EXCEEDED: "clé API a dépassé la limite d'utilisation",
	KEY_NOT_RECOVERABLE: "clé API n'est pas récupérable",
	EXPIRES_IN_IS_TOO_SMALL:
		"le temps d'expiration est inférieur à la valeur minimale prédéfinie.",
	EXPIRES_IN_IS_TOO_LARGE:
		"le temps d'expiration est supérieur à la valeur maximale prédéfinie.",
	INVALID_REMAINING: "la valeur restante est trop grande ou trop petite.",
	INVALID_PREFIX_LENGTH: "la taille du préfixe est trop grande ou trop petite.",
	INVALID_NAME_LENGTH: "la taille du nom est trop grande ou trop petite.",
	METADATA_DISABLED: "les métadonnées sont désactivées.",
	RATE_LIMIT_EXCEEDED: "limite de requêtes dépassée.",
	NO_VALUES_TO_UPDATE: "aucune valeur à mettre à jour.",
	KEY_DISABLED_EXPIRATION:
		"les valeurs d'expiration de clé personnalisées sont désactivées.",
	INVALID_API_KEY: "clé API invalide.",
	INVALID_USER_ID_FROM_API_KEY: "l'ID utilisateur de la clé API est invalide.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"le récupérateur de clé API a retourné un type invalide. Attendu: chaîne.",
	SERVER_ONLY_PROPERTY:
		"la propriété que vous essayez de définir ne peut être définie que depuis l'instance d'authentification du serveur.",
	FAILED_TO_UPDATE_API_KEY: "échec de la mise à jour de la clé API",
	NAME_REQUIRED: "le nom de la clé API est requis.",
	INVALID_REFERENCE_ID_FROM_API_KEY:
		"L'ID de référence de la clé API est invalide.",
	ORGANIZATION_ID_REQUIRED:
		"L'ID de l'organisation est requis pour les clés API appartenant à une organisation.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"Vous n'êtes pas membre de l'organisation propriétaire de cette clé API.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"Vous n'avez pas la permission d'effectuer cette action sur les clés API de l'organisation.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"Aucune configuration de clé API par défaut trouvée.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"Le plugin d'organisation est requis pour les clés API appartenant à une organisation. Veuillez installer et configurer le plugin d'organisation.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
