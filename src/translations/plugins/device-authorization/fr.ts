import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const FR_FR = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Code d'appareil invalide",
	EXPIRED_DEVICE_CODE: "Code d'appareil expiré",
	EXPIRED_USER_CODE: "Code utilisateur expiré",
	AUTHORIZATION_PENDING: "Autorisation en attente",
	ACCESS_DENIED: "Accès refusé",
	INVALID_USER_CODE: "Code utilisateur invalide",
	DEVICE_CODE_ALREADY_PROCESSED: "Code d'appareil déjà traité",
	POLLING_TOO_FREQUENTLY: "Requêtes trop fréquentes",
	INVALID_DEVICE_CODE_STATUS: "Statut du code d'appareil invalide",
	AUTHENTICATION_REQUIRED: "Authentification requise",
	DEVICE_CODE_NOT_CLAIMED:
		"Le code de l'appareil n'a pas été réclamé par une session de vérification ; appelez `GET /device` avec le `user_code` en étant connecté avant d'approuver ou de refuser",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
