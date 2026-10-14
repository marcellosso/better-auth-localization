import { createAuthClient } from "better-auth/client";
import { organizationClient, usernameClient } from "better-auth/client/plugins";
import { describe, expectTypeOf, it } from "vitest";
import { betterAuthLocalizationClientPlugin } from "../client";

describe("betterAuthLocalizationClientPlugin", () => {
	// Type-level check, enforced by `pnpm tsc`.
	it("keeps the inferred types of other client plugins", () => {
		const client = createAuthClient({
			baseURL: "http://localhost:3000",
			plugins: [
				organizationClient(),
				usernameClient(),
				betterAuthLocalizationClientPlugin(),
			],
		});

		expectTypeOf(client.organization.create).toBeFunction();
		expectTypeOf(client.signIn.username).toBeFunction();
	});
});
