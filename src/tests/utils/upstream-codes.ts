import { apiKey } from "@better-auth/api-key";
import { electron } from "@better-auth/electron";
import { passkey } from "@better-auth/passkey";
import { stripe } from "@better-auth/stripe";
import { BASE_ERROR_CODES } from "better-auth";
import {
	admin,
	anonymous,
	captcha,
	deviceAuthorization,
	emailOTP,
	genericOAuth,
	haveIBeenPwned,
	multiSession,
	organization,
	phoneNumber,
	twoFactor,
	username,
} from "better-auth/plugins";
import type { SSOErrorCode } from "../../types/external-plugins";

export const SSO_CODES: Record<SSOErrorCode, true> = {
	SINGLE_LOGOUT_NOT_ENABLED: true,
	INVALID_LOGOUT_RESPONSE: true,
	INVALID_LOGOUT_REQUEST: true,
	LOGOUT_FAILED_AT_IDP: true,
	IDP_SLO_NOT_SUPPORTED: true,
	SAML_PROVIDER_NOT_FOUND: true,
	SAML_INVALID_XML: true,
	SAML_INVALID_ENCODING: true,
	SAML_NO_ASSERTION: true,
	SAML_ASSERTION_SIGNATURE_REQUIRED: true,
	SAML_RESPONSE_INVALID_XML: true,
	SAML_ASSERTION_MISSING: true,
	SAML_AUDIENCE_MISSING: true,
	SAML_AUDIENCE_MISMATCH: true,
	SAML_BEARER_CONFIRMATION_MISSING: true,
	SAML_RECIPIENT_MISSING: true,
	SAML_RECIPIENT_MISMATCH: true,
	SAML_DESTINATION_MISMATCH: true,
	SSO_USER_RESOLUTION_FAILED: true,
	SSO_PROVIDER_MUTATION_REJECTED: true,
	SSO_PROVIDER_CHANGED: true,
	DOMAIN_VERIFIED: true,
	NO_PENDING_VERIFICATION: true,
	INVALID_DOMAIN: true,
};

/**
 * Every error code the built-in translations are expected to cover, grouped by
 * where it comes from (core library or plugin).
 */
export const getUpstreamErrorCodes = (): Record<string, string[]> => ({
	core: Object.keys(BASE_ERROR_CODES),
	admin: Object.keys(admin().$ERROR_CODES),
	anonymous: Object.keys(anonymous().$ERROR_CODES),
	"api-key": Object.keys(apiKey().$ERROR_CODES),
	captcha: Object.keys(
		captcha({ provider: "cloudflare-turnstile", secretKey: "test" })
			.$ERROR_CODES,
	),
	"device-authorization": Object.keys(deviceAuthorization().$ERROR_CODES),
	electron: Object.keys(electron().$ERROR_CODES),
	"email-otp": Object.keys(
		emailOTP({ sendVerificationOTP: async () => {} }).$ERROR_CODES,
	),
	"generic-oauth": Object.keys(genericOAuth({ config: [] }).$ERROR_CODES),
	"have-i-been-pwned": Object.keys(haveIBeenPwned().$ERROR_CODES),
	"multi-session": Object.keys(multiSession().$ERROR_CODES),
	organization: Object.keys(organization().$ERROR_CODES),
	passkey: Object.keys(passkey().$ERROR_CODES),
	"phone-number": Object.keys(phoneNumber().$ERROR_CODES),
	sso: Object.keys(SSO_CODES),
	stripe: Object.keys(
		stripe({
			// biome-ignore lint/suspicious/noExplicitAny: only $ERROR_CODES is read
			stripeClient: {} as any,
			stripeWebhookSecret: "test",
		}).$ERROR_CODES,
	),
	"two-factor": Object.keys(twoFactor().$ERROR_CODES),
	username: Object.keys(username().$ERROR_CODES),
});
