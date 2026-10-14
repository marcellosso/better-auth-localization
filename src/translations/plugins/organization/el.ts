import type { OrganizationErrorCodesType } from "../../../types";

export const EL_GR = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Δεν έχετε άδεια να δημιουργήσετε μια νέα οργάνωση",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Έχετε φτάσει στον μέγιστο αριθμό οργανώσεων",
	ORGANIZATION_ALREADY_EXISTS: "Η οργάνωση υπάρχει ήδη",
	ORGANIZATION_NOT_FOUND: "Η οργάνωση δεν βρέθηκε",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"Ο χρήστης δεν είναι μέλος της οργάνωσης",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Δεν έχετε άδεια να ενημερώσετε αυτή την οργάνωση",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Δεν έχετε άδεια να διαγράψετε αυτή την οργάνωση",
	NO_ACTIVE_ORGANIZATION: "Καμία ενεργή οργάνωση",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"Ο χρήστης είναι ήδη μέλος αυτής της οργάνωσης",
	MEMBER_NOT_FOUND: "Το μέλος δεν βρέθηκε",
	ROLE_NOT_FOUND: "Ο ρόλος δεν βρέθηκε",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Δεν έχετε άδεια να δημιουργήσετε μια νέα ομάδα",
	TEAM_ALREADY_EXISTS: "Η ομάδα υπάρχει ήδη",
	TEAM_NOT_FOUND: "Η ομάδα δεν βρέθηκε",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Δεν μπορείτε να εγκαταλείψετε την οργάνωση ως ο μοναδικός ιδιοκτήτης",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Δεν μπορείτε να εγκαταλείψετε την οργάνωση χωρίς ιδιοκτήτη",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Δεν έχετε άδεια να διαγράψετε αυτό το μέλος",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Δεν έχετε άδεια να προσκαλέσετε χρήστες σε αυτή την οργάνωση",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"Ο χρήστης έχει ήδη προσκληθεί σε αυτή την οργάνωση",
	INVITATION_NOT_FOUND: "Η πρόσκληση δεν βρέθηκε",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"Δεν είστε ο παραλήπτης της πρόσκλησης",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"Απαιτείται επαλήθευση email πριν από την αποδοχή ή απόρριψη της πρόσκλησης",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Δεν έχετε άδεια να ακυρώσετε αυτή την πρόσκληση",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Ο προσκαλών δεν είναι πλέον μέλος της οργάνωσης",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Δεν έχετε άδεια να προσκαλέσετε χρήστη με αυτόν τον ρόλο",
	FAILED_TO_RETRIEVE_INVITATION: "Αποτυχία ανάκτησης της πρόσκλησης",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Έχετε φτάσει στον μέγιστο αριθμό ομάδων",
	UNABLE_TO_REMOVE_LAST_TEAM:
		"Δεν είναι δυνατή η αφαίρεση της τελευταίας ομάδας",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Δεν έχετε άδεια να ενημερώσετε αυτό το μέλος",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"Έχει φτάσει το όριο μελών της οργάνωσης",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Δεν έχετε άδεια να δημιουργήσετε ομάδες σε αυτή την οργάνωση",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Δεν έχετε άδεια να διαγράψετε ομάδες σε αυτή την οργάνωση",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Δεν έχετε άδεια να ενημερώσετε αυτή την ομάδα",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Δεν έχετε άδεια να διαγράψετε αυτή την ομάδα",
	INVITATION_LIMIT_REACHED: "Έχει φτάσει το όριο προσκλήσεων",
	TEAM_MEMBER_LIMIT_REACHED: "Έχει φτάσει το όριο μελών της ομάδας",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "Ο χρήστης δεν είναι μέλος της ομάδας",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Δεν έχετε άδεια να αποκτήσετε πρόσβαση στα μέλη αυτής της ομάδας",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Δεν έχετε ενεργή ομάδα",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Δεν έχετε άδεια να δημιουργήσετε νέο μέλος ομάδας",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Δεν έχετε άδεια να αφαιρέσετε μέλος ομάδας",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Δεν έχετε άδεια να αποκτήσετε πρόσβαση σε αυτή την οργάνωση ως ιδιοκτήτης",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Δεν είστε μέλος αυτής της οργάνωσης",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "Το slug της οργάνωσης χρησιμοποιείται ήδη",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"Απαιτείται επαλήθευση email για προβολή ή λίστα προσκλήσεων για το email της συνεδρίας",
	MISSING_AC_INSTANCE:
		"Ο Δυναμικός Έλεγχος Πρόσβασης απαιτεί ένα προκαθορισμένο ac instance στο πρόσθετο auth του διακομιστή. Δείτε τα logs του διακομιστή για περισσότερες πληροφορίες",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"Πρέπει να ανήκετε σε οργάνωση για να δημιουργήσετε ρόλο",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE: "Δεν επιτρέπεται να δημιουργήσετε ρόλο",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE: "Δεν επιτρέπεται να ενημερώσετε ρόλο",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE: "Δεν επιτρέπεται να διαγράψετε ρόλο",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "Δεν επιτρέπεται να διαβάσετε ρόλο",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE: "Δεν επιτρέπεται να δείτε τη λίστα ρόλων",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "Δεν επιτρέπεται να ανακτήσετε ρόλο",
	TOO_MANY_ROLES: "Αυτή η οργάνωση έχει πάρα πολλούς ρόλους",
	INVALID_RESOURCE: "Το δικαίωμα που δόθηκε περιλαμβάνει μη έγκυρο resource",
	ROLE_NAME_IS_ALREADY_TAKEN: "Αυτό το όνομα ρόλου χρησιμοποιείται ήδη",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE:
		"Δεν είναι δυνατή η διαγραφή προκαθορισμένου ρόλου",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"Δεν είναι δυνατή η διαγραφή ρόλου που έχει ανατεθεί σε μέλη. Παρακαλώ αναθέστε πρώτα τα μέλη σε άλλο ρόλο",
	INVALID_TEAM_ID: "Το αναγνωριστικό ομάδας περιέχει δεσμευμένο χαρακτήρα",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
