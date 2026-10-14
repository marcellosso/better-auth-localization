import type { SSOErrorCodesType } from "../../../types";

export const EL_GR = {
	SINGLE_LOGOUT_NOT_ENABLED: "Το Single Logout δεν είναι ενεργοποιημένο",
	INVALID_LOGOUT_RESPONSE: "Μη έγκυρο LogoutResponse",
	INVALID_LOGOUT_REQUEST: "Μη έγκυρο LogoutRequest",
	LOGOUT_FAILED_AT_IDP: "Η αποσύνδεση απέτυχε στο IdP",
	IDP_SLO_NOT_SUPPORTED: "Το IdP δεν υποστηρίζει το Single Logout Service",
	SAML_PROVIDER_NOT_FOUND: "Δεν βρέθηκε ο πάροχος SAML",
	SAML_INVALID_XML: "Αποτυχία ανάλυσης του XML της απάντησης SAML",
	SAML_INVALID_ENCODING: "Μη έγκυρη απάντηση SAML με κωδικοποίηση base64",
	SAML_NO_ASSERTION: "Η απάντηση SAML δεν περιέχει assertions",
	SAML_ASSERTION_SIGNATURE_REQUIRED: "Απαιτείται υπογραφή του SAML assertion",
	SAML_RESPONSE_INVALID_XML:
		"Δεν ήταν δυνατή η ανάλυση του XML της απάντησης SAML",
	SAML_ASSERTION_MISSING: "Λείπει το assertion από την απάντηση SAML",
	SAML_AUDIENCE_MISSING: "Λείπει το AudienceRestriction από το SAML assertion",
	SAML_AUDIENCE_MISMATCH:
		"Το audience του SAML assertion δεν ταιριάζει με αυτόν τον Service Provider",
	SAML_BEARER_CONFIRMATION_MISSING:
		"Λείπει το bearer SubjectConfirmationData από το SAML assertion",
	SAML_RECIPIENT_MISSING:
		"Λείπει το Recipient από το bearer SubjectConfirmationData του SAML",
	SAML_RECIPIENT_MISMATCH:
		"Το Recipient του bearer SubjectConfirmationData του SAML δεν ταιριάζει με αυτόν τον Service Provider",
	SAML_DESTINATION_MISMATCH:
		"Το Destination της απάντησης SAML δεν ταιριάζει με αυτόν τον Service Provider",
	SSO_USER_RESOLUTION_FAILED: "Δεν ήταν δυνατός ο προσδιορισμός του χρήστη SSO",
	SSO_PROVIDER_MUTATION_REJECTED:
		"Δεν επιτρέπεται η τροποποίηση του παρόχου SSO",
	SSO_PROVIDER_CHANGED:
		"Ο πάροχος SSO άλλαξε κατά τη διάρκεια της λειτουργίας. Φορτώστε ξανά τον πάροχο και δοκιμάστε πάλι",
	DOMAIN_VERIFIED: "Το domain έχει ήδη επαληθευτεί",
	NO_PENDING_VERIFICATION: "Δεν υπάρχει εκκρεμής επαλήθευση domain",
	INVALID_DOMAIN: "Μη έγκυρο domain",
} satisfies SSOErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
