import type { StripeErrorCodesType } from "../../../types";

export const EL_GR = {
	UNAUTHORIZED: "Μη εξουσιοδοτημένη πρόσβαση",
	INVALID_REQUEST_BODY: "Μη έγκυρο σώμα αιτήματος",
	SUBSCRIPTION_NOT_FOUND: "Η συνδρομή δεν βρέθηκε",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Το πλάνο συνδρομής δεν βρέθηκε",
	ALREADY_SUBSCRIBED_PLAN: "Είστε ήδη συνδρομητής σε αυτό το πλάνο",
	REFERENCE_ID_NOT_ALLOWED: "Το αναγνωριστικό αναφοράς δεν επιτρέπεται",
	CUSTOMER_NOT_FOUND: "Δεν βρέθηκε πελάτης Stripe για αυτόν τον χρήστη",
	UNABLE_TO_CREATE_CUSTOMER: "Δεν ήταν δυνατή η δημιουργία πελάτη",
	UNABLE_TO_CREATE_BILLING_PORTAL:
		"Δεν ήταν δυνατή η δημιουργία συνεδρίας πύλης χρέωσης",
	STRIPE_SIGNATURE_NOT_FOUND: "Η υπογραφή Stripe δεν βρέθηκε",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Το webhook secret του Stripe δεν βρέθηκε",
	STRIPE_WEBHOOK_ERROR: "Σφάλμα webhook του Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Αποτυχία δημιουργίας γεγονότος Stripe",
	FAILED_TO_FETCH_PLANS: "Αποτυχία ανάκτησης πλάνων",
	EMAIL_VERIFICATION_REQUIRED:
		"Απαιτείται επαλήθευση email πριν μπορέσετε να εγγραφείτε σε πλάνο",
	SUBSCRIPTION_NOT_ACTIVE: "Η συνδρομή δεν είναι ενεργή",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Η συνδρομή δεν έχει προγραμματιστεί για ακύρωση",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Η συνδρομή δεν έχει εκκρεμή ακύρωση ή προγραμματισμένη αλλαγή πλάνου",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"Η συνδρομή οργάνωσης δεν είναι ενεργοποιημένη",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Οι συνδρομές οργάνωσης απαιτούν τη ρύθμιση του callback authorizeReference",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Δεν είναι δυνατή η διαγραφή οργάνωσης με ενεργή συνδρομή",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Απαιτείται αναγνωριστικό αναφοράς. Δώστε referenceId ή ορίστε activeOrganizationId στη συνεδρία",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
