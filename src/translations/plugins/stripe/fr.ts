import type { StripeErrorCodesType } from "../../../types";

export const FR_FR = {
	UNAUTHORIZED: "Accès non autorisé",
	INVALID_REQUEST_BODY: "Corps de la requête invalide",
	SUBSCRIPTION_NOT_FOUND: "Abonnement introuvable",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Offre d'abonnement introuvable",
	ALREADY_SUBSCRIBED_PLAN: "Vous êtes déjà abonné à cette offre",
	REFERENCE_ID_NOT_ALLOWED: "L'ID de référence n'est pas autorisé",
	CUSTOMER_NOT_FOUND: "Client Stripe introuvable pour cet utilisateur",
	UNABLE_TO_CREATE_CUSTOMER: "Impossible de créer le client",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Impossible de créer la session du portail de facturation",
	STRIPE_SIGNATURE_NOT_FOUND: "Signature Stripe introuvable",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Secret du webhook Stripe introuvable",
	STRIPE_WEBHOOK_ERROR: "Erreur du webhook Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT:
		"Échec de la construction de l'événement Stripe",
	FAILED_TO_FETCH_PLANS: "Échec de la récupération des offres",
	EMAIL_VERIFICATION_REQUIRED:
		"La vérification de l'e-mail est requise avant de pouvoir souscrire à une offre",
	SUBSCRIPTION_NOT_ACTIVE: "L'abonnement n'est pas actif",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"L'abonnement n'est pas programmé pour être annulé",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"L'abonnement n'a aucune annulation en attente ni changement d'offre programmé",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"L'abonnement d'organisation n'est pas activé",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Les abonnements d'organisation nécessitent la configuration du callback authorizeReference",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Impossible de supprimer une organisation ayant un abonnement actif",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"L'ID de référence est requis. Fournissez referenceId ou définissez activeOrganizationId dans la session",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
