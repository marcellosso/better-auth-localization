import type { Auth } from "better-auth";
import type {
	AdminOptions,
	admin,
	anonymous,
	deviceAuthorization,
	emailOTP,
	genericOAuth,
	haveIBeenPwned,
	multiSession,
	phoneNumber,
	TWO_FACTOR_ERROR_CODES,
	USERNAME_ERROR_CODES,
	captcha,
} from "better-auth/plugins";
import type { ORGANIZATION_ERROR_CODES } from "better-auth/client/plugins";
import type { apiKey } from "@better-auth/api-key";
import type { passkey } from "@better-auth/passkey";
import type { defaultTranslations } from "../translations";

type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

type RemoveReadonly<T> = {
	-readonly [K in keyof T]?: string;
};

// biome-ignore lint/suspicious/noExplicitAny: biome is dumb
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I,
) => void
	? I
	: never;

export type AuthErrorCodesType = RemoveReadonly<Auth["$ERROR_CODES"]>;

export type OrganizationErrorCodesType = RemoveReadonly<
	typeof ORGANIZATION_ERROR_CODES
>;

export type TwoFactorErrorCodesType = RemoveReadonly<
	typeof TWO_FACTOR_ERROR_CODES
>;

export type UsernameErrorCodesType = RemoveReadonly<
	typeof USERNAME_ERROR_CODES
>;

export type AnonymousErrorCodesType = RemoveReadonly<
	ReturnType<typeof anonymous>["$ERROR_CODES"]
>;

export type PhoneNumberErrorCodesType = RemoveReadonly<
	ReturnType<typeof phoneNumber>["$ERROR_CODES"]
>;

export type EmailOTPErrorCodesType = RemoveReadonly<
	ReturnType<typeof emailOTP>["$ERROR_CODES"]
>;

export type GenericOAuthErrorCodesType = RemoveReadonly<
	ReturnType<typeof genericOAuth>["$ERROR_CODES"]
>;

export type AdminErrorCodesType = RemoveReadonly<
	ReturnType<typeof admin<AdminOptions>>["$ERROR_CODES"]
>;

export type CaptchaErrorCodesType = {
	VERIFICATION_FAILED?: string | undefined;
	MISSING_RESPONSE?: string | undefined;
	UNKNOWN_ERROR?: string | undefined;
}

export type ApiKeyErrorCodesType = RemoveReadonly<
	ReturnType<typeof apiKey>["$ERROR_CODES"]
>;

export type DeviceAuthorizationErrorCodesType = RemoveReadonly<
	ReturnType<typeof deviceAuthorization>["$ERROR_CODES"]
>;

export type HaveIBeenPwnedErrorCodesType = RemoveReadonly<
	ReturnType<typeof haveIBeenPwned>["$ERROR_CODES"]
>;

export type MultiSessionErrorCodesType = RemoveReadonly<
	ReturnType<typeof multiSession>["$ERROR_CODES"]
>;

export type PasskeyErrorCodesType = RemoveReadonly<
	ReturnType<typeof passkey>["$ERROR_CODES"]
>;

export type ErrorCodesType = Partial<
	UnionToIntersection<
		| AuthErrorCodesType
		| OrganizationErrorCodesType
		| TwoFactorErrorCodesType
		| UsernameErrorCodesType
		| AnonymousErrorCodesType
		| PhoneNumberErrorCodesType
		| EmailOTPErrorCodesType
		| GenericOAuthErrorCodesType
		| AdminErrorCodesType
		| ApiKeyErrorCodesType
		| DeviceAuthorizationErrorCodesType
		| HaveIBeenPwnedErrorCodesType
		| MultiSessionErrorCodesType
		| PasskeyErrorCodesType
		| CaptchaErrorCodesType
	>
>;
/**
 * Partial better-auth error codes type for translations
 */
export type PartialErrorCodesType = Partial<ErrorCodesType>;

/**
 * Built-in locales supported by the plugin.
 */
export type BuiltInLocales = keyof typeof defaultTranslations | "default";

/**
 * Extract custom locales from a translations object
 */

// biome-ignore lint/suspicious/noExplicitAny: biome is dumb
export type ExtractCustomLocales<T> = T extends Record<infer K, any>
	? Exclude<K, BuiltInLocales>
	: never;

export type AvailableLocales<TCustomTranslations> =
	| BuiltInLocales
	| ExtractCustomLocales<TCustomTranslations>;
export type PrettifiedAvailableLocales<TCustomTranslations> = Prettify<
	BuiltInLocales | ExtractCustomLocales<TCustomTranslations>
>;

export type Translations<
	// biome-ignore lint/complexity/noBannedTypes: biome is dumb
	TCustomTranslations extends Record<string, PartialErrorCodesType> = {},
> = {
	[K in BuiltInLocales | keyof TCustomTranslations]?: PartialErrorCodesType;
} & TCustomTranslations;
/**
 * Options for the localization plugin
 */
export type LocalizationOptions<
	// biome-ignore lint/complexity/noBannedTypes: biome is dumb
	TCustomTranslations extends Record<string, PartialErrorCodesType> = {},
> = {
	/**
	 * Optional translation mappings
	 * Can override built-in translations or add custom locales
	 *
	 * @example Override built-in translations
	 * ```typescript
	 * translations: {
	 *   "pt-BR": { USER_NOT_FOUND: "Mensagem customizada" }
	 * }
	 * ```
	 */
	translations?: Translations<TCustomTranslations>;
	/**
	 * The default locale to use for translations
	 * When using a built-in locale, translations are optional since defaults exist
	 */
	defaultLocale: Prettify<PrettifiedAvailableLocales<TCustomTranslations>>;
	/**
	 * Fallback locale when translation is not found
	 * @default "default"
	 */
	fallbackLocale?: Prettify<PrettifiedAvailableLocales<TCustomTranslations>>;
	/**
	 * Function to determine locale from request
	 * Can be async and should return a valid locale string
	 * For server side calls, request is undefined
	 *
	 * @param request - The incoming request object
	 * @returns Locale string or Promise resolving to locale string
	 *
	 * @example
	 * ```typescript
	 * getLocale: (request) => request.headers.get('accept-language')?.split(',')[0] || 'en'
	 * ```
	 */
	getLocale?: (
		request: Request | undefined,
	) =>
		| Prettify<PrettifiedAvailableLocales<TCustomTranslations>>
		| Promise<Prettify<PrettifiedAvailableLocales<TCustomTranslations>>>;
};
