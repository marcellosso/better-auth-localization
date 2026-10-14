import type { StripeErrorCodesType } from "../../../types";

export const CKB_IQ = {
	UNAUTHORIZED: "دەستگەیشتنی ڕێگەپێنەدراو",
	INVALID_REQUEST_BODY: "لەشی داواکاری نادروستە",
	SUBSCRIPTION_NOT_FOUND: "بەشداربوون نەدۆزرایەوە",
	SUBSCRIPTION_PLAN_NOT_FOUND: "پلانی بەشداربوون نەدۆزرایەوە",
	ALREADY_SUBSCRIBED_PLAN: "تۆ پێشتر بەشداری ئەم پلانەیت",
	REFERENCE_ID_NOT_ALLOWED: "ناسنامەی ڕیفرێنس ڕێگەپێدراو نییە",
	CUSTOMER_NOT_FOUND: "کڕیاری Stripe بۆ ئەم بەکارهێنەرە نەدۆزرایەوە",
	UNABLE_TO_CREATE_CUSTOMER: "نەتوانرا کڕیار دروست بکرێت",
	UNABLE_TO_CREATE_BILLING_PORTAL: "نەتوانرا سێشنی دەروازەی پسوولە دروست بکرێت",
	STRIPE_SIGNATURE_NOT_FOUND: "ئیمزای Stripe نەدۆزرایەوە",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "نهێنی webhook ی Stripe نەدۆزرایەوە",
	STRIPE_WEBHOOK_ERROR: "هەڵەی webhook ی Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "نەتوانرا ڕووداوی Stripe دروست بکرێت",
	FAILED_TO_FETCH_PLANS: "نەتوانرا پلانەکان بهێنرێن",
	EMAIL_VERIFICATION_REQUIRED:
		"پێش بەشداربوون لە پلانێک، پشتڕاستکردنەوەی ئیمەیڵ پێویستە",
	SUBSCRIPTION_NOT_ACTIVE: "بەشداربوون چالاک نییە",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"بەشداربوون بۆ هەڵوەشاندنەوە کات بۆ دانەنراوە",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"بەشداربوونەکە هیچ هەڵوەشاندنەوەیەکی چاوەڕێکراو یان گۆڕینی پلانی خشتەکراوی نییە",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED: "بەشداربوونی ڕێکخراو چالاک نەکراوە",
	AUTHORIZE_REFERENCE_REQUIRED:
		"بەشداربوونی ڕێکخراوەکان پێویستیان بە ڕێکخستنی callbackـی authorizeReference هەیە",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"ناتوانرێت ڕێکخراوێک بسڕدرێتەوە کە بەشداربوونی چالاکی هەیە",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"ناسنامەی ڕیفرێنس پێویستە. referenceId دابین بکە یان activeOrganizationId لە سێشندا دابنێ",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
