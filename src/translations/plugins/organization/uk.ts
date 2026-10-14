import type { OrganizationErrorCodesType } from "../../../types";

export const UK_UA = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Ви не маєте дозволу на створення нової організації",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Ви досягли максимальної кількості організацій",
	ORGANIZATION_ALREADY_EXISTS: "Організація вже існує",
	ORGANIZATION_NOT_FOUND: "Організацію не знайдено",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"Користувач не є членом організації",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Ви не маєте дозволу на оновлення цієї організації",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Ви не маєте дозволу на видалення цієї організації",
	NO_ACTIVE_ORGANIZATION: "Немає активної організації",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"Користувач вже є членом цієї організації",
	MEMBER_NOT_FOUND: "Члена не знайдено",
	ROLE_NOT_FOUND: "Роль не знайдено",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Ви не маєте дозволу на створення нової команди",
	TEAM_ALREADY_EXISTS: "Команда вже існує",
	TEAM_NOT_FOUND: "Команду не знайдено",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Ви не можете залишити організацію як єдиний власник",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Ви не можете залишити організацію без власника",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Ви не маєте дозволу на видалення цього члена",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Ви не маєте дозволу на запрошення користувачів до цієї організації",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"Користувача вже запрошено до цієї організації",
	INVITATION_NOT_FOUND: "Запрошення не знайдено",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "Ви не є отримувачем запрошення",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"Потрібна перевірка електронної пошти перед прийняттям або відхиленням запрошення",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Ви не маєте дозволу на скасування цього запрошення",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Запрошуючий більше не є членом організації",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Ви не маєте дозволу на запрошення користувача з цією роллю",
	FAILED_TO_RETRIEVE_INVITATION: "Не вдалося отримати запрошення",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Ви досягли максимальної кількості команд",
	UNABLE_TO_REMOVE_LAST_TEAM: "Неможливо видалити останню команду",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Ви не маєте дозволу на оновлення цього члена",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"Досягнуто ліміт членства в організації",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Ви не маєте дозволу на створення команд у цій організації",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Ви не маєте дозволу на видалення команд у цій організації",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Ви не маєте дозволу на оновлення цієї команди",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Ви не маєте дозволу на видалення цієї команди",
	INVITATION_LIMIT_REACHED: "Досягнуто ліміт запрошень",
	TEAM_MEMBER_LIMIT_REACHED: "Досягнуто ліміт членів команди",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "Користувач не є членом команди",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Ви не маєте дозволу на доступ до членів цієї команди",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "У вас немає активної команди",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Ви не маєте дозволу на створення нового члена команди",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Ви не маєте дозволу на видалення члена команди",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Ви не маєте дозволу на доступ до цієї організації як власник",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION: "Ви не є членом цієї організації",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "Slug організації вже зайнятий",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"Для перегляду запрошень на email сесії потрібно підтвердити email",
	MISSING_AC_INSTANCE:
		"Динамічне керування доступом потребує наперед визначеного екземпляра ac у серверному плагіні автентифікації. Докладніше дивіться в логах сервера",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"Щоб створити роль, потрібно бути в організації",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE: "Ви не маєте дозволу створювати роль",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE: "Ви не маєте дозволу змінювати роль",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE: "Ви не маєте дозволу видаляти роль",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "Ви не маєте дозволу переглядати роль",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE:
		"Ви не маєте дозволу переглядати список ролей",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "Ви не маєте дозволу отримувати роль",
	TOO_MANY_ROLES: "В цій організації забагато ролей",
	INVALID_RESOURCE: "Наданий дозвіл містить недійсний ресурс",
	ROLE_NAME_IS_ALREADY_TAKEN: "Ця назва ролі вже зайнята",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE:
		"Неможливо видалити попередньо визначену роль",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"Неможливо видалити роль, призначену учасникам. Спочатку призначте учасникам іншу роль",
	INVALID_TEAM_ID: "ID команди містить зарезервований символ",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"uk-UA": UK_UA,
} as const;
