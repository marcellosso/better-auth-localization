import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";
import { APIError } from "better-auth/api";
import { username } from "better-auth/plugins";
import { describe, expect, it } from "vitest";
import { localization } from "../index";
import type { LocalizationOptions } from "../types";

const createAuth = (options: LocalizationOptions) =>
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
		plugins: [username(), localization(options)],
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
});
