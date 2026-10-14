import type { OrganizationErrorCodesType } from "../../../types";

export const FR_FR = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Vous n'êtes pas autorisé à créer une nouvelle organisation",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Vous avez atteint le nombre maximum d'organisations",
	ORGANIZATION_ALREADY_EXISTS: "L'organisation existe déjà",
	ORGANIZATION_NOT_FOUND: "Organisation introuvable",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"L'utilisateur n'est pas membre de l'organisation",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Vous n'êtes pas autorisé à mettre à jour cette organisation",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Vous n'êtes pas autorisé à supprimer cette organisation",
	NO_ACTIVE_ORGANIZATION: "Aucune organisation active",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"L'utilisateur est déjà membre de cette organisation",
	MEMBER_NOT_FOUND: "Membre introuvable",
	ROLE_NOT_FOUND: "Rôle introuvable",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Vous n'êtes pas autorisé à créer une nouvelle équipe",
	TEAM_ALREADY_EXISTS: "L'équipe existe déjà",
	TEAM_NOT_FOUND: "Équipe introuvable",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Vous ne pouvez pas quitter l'organisation en tant que seul propriétaire",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Vous ne pouvez pas quitter l'organisation sans propriétaire",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Vous n'êtes pas autorisé à supprimer ce membre",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Vous n'êtes pas autorisé à inviter des utilisateurs à cette organisation",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"L'utilisateur a déjà été invité à cette organisation",
	INVITATION_NOT_FOUND: "Invitation introuvable",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"Vous n'êtes pas le destinataire de l'invitation",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"Vérification de l'e-mail requise avant d'accepter ou de rejeter l'invitation",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Vous n'êtes pas autorisé à annuler cette invitation",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"L'inviteur n'est plus membre de l'organisation",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Vous n'êtes pas autorisé à inviter un utilisateur avec ce rôle",
	FAILED_TO_RETRIEVE_INVITATION: "Échec de la récupération de l'invitation",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Vous avez atteint le nombre maximum d'équipes",
	UNABLE_TO_REMOVE_LAST_TEAM: "Impossible de supprimer la dernière équipe",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Vous n'êtes pas autorisé à mettre à jour ce membre",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"Limite d'adhésion à l'organisation atteinte",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Vous n'êtes pas autorisé à créer des équipes dans cette organisation",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Vous n'êtes pas autorisé à supprimer des équipes dans cette organisation",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Vous n'êtes pas autorisé à mettre à jour cette équipe",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Vous n'êtes pas autorisé à supprimer cette équipe",
	INVITATION_LIMIT_REACHED: "Limite d'invitations atteinte",
	TEAM_MEMBER_LIMIT_REACHED: "Limite de membres d'équipe atteinte",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM:
		"L'utilisateur n'est pas membre de l'équipe",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Vous n'êtes pas autorisé à accéder aux membres de cette équipe",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Vous n'avez pas d'équipe active",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Vous n'êtes pas autorisé à créer un nouveau membre d'équipe",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Vous n'êtes pas autorisé à supprimer un membre d'équipe",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Vous n'êtes pas autorisé à accéder à cette organisation en tant que propriétaire",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Vous n'êtes pas membre de cette organisation",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "Le slug de l'organisation est déjà utilisé",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"La vérification de l'e-mail est requise pour afficher ou lister les invitations de l'e-mail de la session",
	MISSING_AC_INSTANCE:
		"Le contrôle d'accès dynamique nécessite une instance ac prédéfinie dans le plugin d'authentification du serveur. Consultez les journaux du serveur pour plus d'informations",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"Vous devez faire partie d'une organisation pour créer un rôle",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE:
		"Vous n'êtes pas autorisé à créer un rôle",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE:
		"Vous n'êtes pas autorisé à modifier un rôle",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE:
		"Vous n'êtes pas autorisé à supprimer un rôle",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "Vous n'êtes pas autorisé à lire un rôle",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE:
		"Vous n'êtes pas autorisé à lister les rôles",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE:
		"Vous n'êtes pas autorisé à obtenir un rôle",
	TOO_MANY_ROLES: "Cette organisation a trop de rôles",
	INVALID_RESOURCE: "La permission fournie inclut une ressource invalide",
	ROLE_NAME_IS_ALREADY_TAKEN: "Ce nom de rôle est déjà utilisé",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE: "Impossible de supprimer un rôle prédéfini",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"Impossible de supprimer un rôle attribué à des membres. Veuillez d'abord réattribuer les membres à un autre rôle",
	INVALID_TEAM_ID: "L'ID de l'équipe contient un caractère réservé",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
