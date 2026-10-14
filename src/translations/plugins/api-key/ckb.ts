import type { ApiKeyErrorCodesType } from "../../../types";

export const CKB_IQ = {
	INVALID_METADATA_TYPE: "metadata دەبێت ئۆبجێکت بێت یان undefined",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"کاتێک refillInterval دابین کراوە، refillAmount پێویستە",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"کاتێک refillAmount دابین کراوە، refillInterval پێویستە",
	USER_BANNED: "بەکارهێنەر ڕێگری لێکراوە",
	UNAUTHORIZED_SESSION: "سێشنی ڕێگەپێنەدراو یان نادروست",
	KEY_NOT_FOUND: "کلیلی API نەدۆزرایەوە",
	KEY_DISABLED: "کلیلی API ناچالاک کراوە",
	KEY_EXPIRED: "کلیلی API بەسەرچووە",
	USAGE_EXCEEDED: "کلیلی API گەیشتووەتە سنووری بەکارهێنانی",
	KEY_NOT_RECOVERABLE: "کلیلی API ناتوانرێت بگەڕێنرێتەوە",
	EXPIRES_IN_IS_TOO_SMALL: "expiresIn لە کەمترین بڕی دیاریکراو بچووکترە.",
	EXPIRES_IN_IS_TOO_LARGE: "expiresIn لە زۆرترین بڕی دیاریکراو گەورەترە.",
	INVALID_REMAINING: "ژمارەی ماوە یان زۆر گەورەیە یان زۆر بچووکە.",
	INVALID_PREFIX_LENGTH: "درێژی پێشگر یان زۆر گەورەیە یان زۆر بچووکە.",
	INVALID_NAME_LENGTH: "درێژی ناو یان زۆر گەورەیە یان زۆر بچووکە.",
	METADATA_DISABLED: "Metadata ناچالاک کراوە.",
	RATE_LIMIT_EXCEEDED: "لە سنووری ڕێژەی داواکاری تێپەڕیوە.",
	NO_VALUES_TO_UPDATE: "هیچ بەهایەک نییە بۆ نوێکردنەوە.",
	KEY_DISABLED_EXPIRATION: "بەهای بەسەرچوونی تایبەت بۆ کلیل ناچالاک کراوە.",
	INVALID_API_KEY: "کلیلی API نادروستە.",
	INVALID_USER_ID_FROM_API_KEY: "ناسنامەی بەکارهێنەر لە کلیلی API نادروستە.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"getterـی کلیلی API جۆری کلیلێکی نادروستی گەڕاندەوە. چاوەڕوانی string دەکرا.",
	SERVER_ONLY_PROPERTY:
		"ئەو تایبەتمەندییەی دەتەوێت دایبنێیت تەنها لە نمونەی auth لای سێرڤەرەوە دادەنرێت.",
	FAILED_TO_UPDATE_API_KEY: "نەتوانرا کلیلی API نوێ بکرێتەوە",
	NAME_REQUIRED: "ناوی کلیلی API پێویستە.",
	INVALID_REFERENCE_ID_FROM_API_KEY: "ناسنامەی ڕیفرێنس لە کلیلی API نادروستە.",
	ORGANIZATION_ID_REQUIRED:
		"ناسنامەی ڕێکخراو بۆ کلیلە API ـە هی ڕێکخراوەکان پێویستە.",
	USER_NOT_MEMBER_OF_ORGANIZATION:
		"تۆ ئەندامی ئەو ڕێکخراوە نیت کە خاوەنی ئەم کلیلی API ـەیە.",
	INSUFFICIENT_API_KEY_PERMISSIONS:
		"مۆڵەتت نییە ئەم کردارە لەسەر کلیلە API ـەکانی ڕێکخراو ئەنجام بدەیت.",
	NO_DEFAULT_API_KEY_CONFIGURATION_FOUND:
		"هیچ ڕێکخستنێکی بنەڕەتی بۆ کلیلی API نەدۆزرایەوە.",
	ORGANIZATION_PLUGIN_REQUIRED:
		"پلاگینی ڕێکخراو بۆ کلیلە API ـە هی ڕێکخراوەکان پێویستە. تکایە پلاگینی ڕێکخراو دابمەزرێنە و ڕێکی بخە.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"ckb-IQ": CKB_IQ,
} as const;
