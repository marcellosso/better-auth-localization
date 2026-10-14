import { type BetterAuthPlugin, betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";
import { APIError } from "better-auth/api";
import { captcha, username } from "better-auth/plugins";
import { describe, expect, it } from "vitest";
import { localization } from "../index";
import { defaultTranslations } from "../translations";
import type { BuiltInLocales, LocalizationOptions } from "../types";

const createAuth = (
	options: LocalizationOptions,
	{ plugins = [] }: { plugins?: BetterAuthPlugin[] } = {},
) =>
	betterAuth({
		baseURL: "http://localhost:3000",
		secret: "better-auth-localization-test-secret-0123456789",
		database: memoryAdapter({
			user: [],
			session: [],
			account: [],
			verification: [],
		}),
		emailAndPassword: { enabled: true },
		emailVerification: { sendVerificationEmail: async () => {} },
		plugins: [username(), ...plugins, localization(options)],
		logger: { disabled: true },
	});

const signInRequest = (headers: Record<string, string> = {}) =>
	new Request("http://localhost:3000/api/auth/sign-in/email", {
		method: "POST",
		headers: {
			"content-type": "application/json",
			origin: "http://localhost:3000",
			...headers,
		},
		body: JSON.stringify({ email: "nobody@example.com", password: "12345678" }),
	});

describe("localization (end to end)", () => {
	it("translates core error messages on HTTP requests", async () => {
		const auth = createAuth({ defaultLocale: "pt-BR" });

		const res = await auth.handler(signInRequest());
		const body = await res.json();

		expect(res.status).toBe(401);
		expect(body).toEqual({
			code: "INVALID_EMAIL_OR_PASSWORD",
			message: "Email ou senha inválidos",
		});
	});

	it("translates errors thrown by server-side api calls", async () => {
		const auth = createAuth({ defaultLocale: "es-ES" });

		const error = await auth.api
			.signInEmail({
				body: { email: "nobody@example.com", password: "12345678" },
			})
			.catch((e) => e);

		expect(error).toBeInstanceOf(APIError);
		expect(error.statusCode).toBe(401);
		expect(error.body).toMatchObject({
			code: "INVALID_EMAIL_OR_PASSWORD",
			message: "Email o contraseña inválidos",
		});
	});

	it("translates plugin error messages", async () => {
		const auth = createAuth({ defaultLocale: "pt-BR" });

		const res = await auth.handler(
			new Request("http://localhost:3000/api/auth/sign-in/username", {
				method: "POST",
				headers: {
					"content-type": "application/json",
					origin: "http://localhost:3000",
				},
				body: JSON.stringify({ username: "nobody", password: "12345678" }),
			}),
		);
		const body = await res.json();

		expect(body.code).toBe("INVALID_USERNAME_OR_PASSWORD");
		expect(body.message).toBe("Nome de usuário ou senha inválidos");
	});

	it("resolves the locale per request with getLocale", async () => {
		const auth = createAuth({
			defaultLocale: "pt-BR",
			getLocale: (request) =>
				(request?.headers.get("x-locale") as "fr-FR" | null) ?? "pt-BR",
		});

		const res = await auth.handler(signInRequest({ "x-locale": "fr-FR" }));
		const body = await res.json();

		expect(body.code).toBe("INVALID_EMAIL_OR_PASSWORD");
		expect(body.message).toBe("E-mail ou mot de passe invalides");
	});

	it("keeps the original message for the default locale", async () => {
		const auth = createAuth({ defaultLocale: "default" });

		const res = await auth.handler(signInRequest());
		const body = await res.json();

		expect(body).toEqual({
			code: "INVALID_EMAIL_OR_PASSWORD",
			message: "Invalid email or password",
		});
	});

	it("uses custom translations over built-in ones", async () => {
		const auth = createAuth({
			defaultLocale: "pt-BR",
			translations: {
				"pt-BR": { INVALID_EMAIL_OR_PASSWORD: "Credenciais incorretas" },
			},
		});

		const res = await auth.handler(signInRequest());
		const body = await res.json();

		expect(body.message).toBe("Credenciais incorretas");
	});

	it("translates EMAIL_ALREADY_VERIFIED", async () => {
		const auth = createAuth({ defaultLocale: "pt-BR" });
		const { headers, response } = await auth.api.signUpEmail({
			body: { email: "verified@example.com", password: "12345678", name: "V" },
			returnHeaders: true,
		});
		const ctx = await auth.$context;
		await ctx.internalAdapter.updateUser(response.user.id, {
			emailVerified: true,
		});

		const res = await auth.api.sendVerificationEmail({
			body: { email: "verified@example.com" },
			headers: new Headers({
				cookie: headers.get("set-cookie")?.split(";")[0] ?? "",
			}),
			asResponse: true,
		});
		const body = await res.json();

		expect(body).toEqual({
			code: "EMAIL_ALREADY_VERIFIED",
			message: "O email já foi verificado",
		});
	});
});

describe("getLocale with the user's session", () => {
	// Mirrors the README example: read a `locale` user field via auth.api.getSession.
	const auth = betterAuth({
		baseURL: "http://localhost:3000",
		secret: "better-auth-localization-test-secret-0123456789",
		database: memoryAdapter({
			user: [],
			session: [],
			account: [],
			verification: [],
		}),
		emailAndPassword: { enabled: true },
		emailVerification: { sendVerificationEmail: async () => {} },
		user: { additionalFields: { locale: { type: "string", required: false } } },
		plugins: [
			localization({
				defaultLocale: "default",
				getLocale: async (request): Promise<BuiltInLocales> => {
					if (!request) return "default";
					const session = await auth.api.getSession({
						headers: request.headers,
					});
					return (session?.user.locale ?? "default") as BuiltInLocales;
				},
			}),
		],
		logger: { disabled: true },
	});

	it("translates into the locale stored on the user", async () => {
		const { headers } = await auth.api.signUpEmail({
			body: {
				email: "session@example.com",
				password: "12345678",
				name: "S",
				locale: "pt-BR",
			},
			returnHeaders: true,
		});

		const res = await auth.handler(
			new Request("http://localhost:3000/api/auth/send-verification-email", {
				method: "POST",
				headers: {
					"content-type": "application/json",
					origin: "http://localhost:3000",
					cookie: headers.get("set-cookie")?.split(";")[0] ?? "",
				},
				body: JSON.stringify({ email: "someone-else@example.com" }),
			}),
		);

		expect(await res.json()).toEqual({
			code: "EMAIL_MISMATCH",
			message: defaultTranslations["pt-BR"].EMAIL_MISMATCH,
		});
	});
});

describe("localization of onRequest errors (captcha)", () => {
	const signUpRequest = (headers: Record<string, string> = {}) =>
		new Request("http://localhost:3000/api/auth/sign-up/email", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				origin: "http://localhost:3000",
				...headers,
			},
			body: JSON.stringify({
				email: "new@example.com",
				password: "12345678",
				name: "New",
			}),
		});

	const captchaPlugin = captcha({
		provider: "cloudflare-turnstile",
		secretKey: "test-secret",
	});

	it("translates errors returned by another plugin's onRequest", async () => {
		const auth = createAuth(
			{ defaultLocale: "pt-BR" },
			{ plugins: [captchaPlugin] },
		);

		const res = await auth.handler(signUpRequest());

		expect(res.status).toBe(400);
		expect(res.headers.get("content-type")).toContain("application/json");
		expect(await res.json()).toEqual({
			code: "MISSING_RESPONSE",
			message: "Resposta faltando do CAPTCHA",
		});
	});

	it("resolves the locale with getLocale", async () => {
		const auth = createAuth(
			{
				defaultLocale: "pt-BR",
				getLocale: (request) =>
					(request?.headers.get("x-locale") as "fr-FR" | null) ?? "pt-BR",
			},
			{ plugins: [captchaPlugin] },
		);

		const res = await auth.handler(signUpRequest({ "x-locale": "fr-FR" }));
		const body = await res.json();

		expect(body).toEqual({
			code: "MISSING_RESPONSE",
			message: defaultTranslations["fr-FR"].MISSING_RESPONSE,
		});
	});

	it("works when localization is registered before captcha", async () => {
		const auth = betterAuth({
			baseURL: "http://localhost:3000",
			secret: "better-auth-localization-test-secret-0123456789",
			database: memoryAdapter({
				user: [],
				session: [],
				account: [],
				verification: [],
			}),
			emailAndPassword: { enabled: true },
			plugins: [
				localization({ defaultLocale: "pt-BR" }),
				captcha({ provider: "cloudflare-turnstile", secretKey: "test-secret" }),
			],
			logger: { disabled: true },
		});

		const body = await (await auth.handler(signUpRequest())).json();

		expect(body.message).toBe("Resposta faltando do CAPTCHA");
	});
});
