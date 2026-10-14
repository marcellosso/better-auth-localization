import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { apiKey } from "@better-auth/api-key";
import type { electron } from "@better-auth/electron";
import type { passkey } from "@better-auth/passkey";
import type { stripe } from "@better-auth/stripe";
import { describe, expect, it } from "vitest";
import type {
	ApiKeyErrorCode,
	ElectronErrorCode,
	PasskeyErrorCode,
	StripeErrorCode,
} from "../types/external-plugins";
import { SSO_CODES } from "./utils/upstream-codes";

type Equals<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
	? 1
	: 2
	? true
	: false;
const assertType = <_T extends true>() => {};

type UpstreamCode<T extends (...args: never[]) => { $ERROR_CODES: object }> =
	keyof ReturnType<T>["$ERROR_CODES"];

// Compile-time check (pnpm tsc): the hand-written code lists must match the
// installed plugin packages exactly.
assertType<Equals<ApiKeyErrorCode, UpstreamCode<typeof apiKey>>>();
assertType<Equals<PasskeyErrorCode, UpstreamCode<typeof passkey>>>();
assertType<Equals<StripeErrorCode, UpstreamCode<typeof stripe>>>();
assertType<Equals<ElectronErrorCode, UpstreamCode<typeof electron>>>();

describe("external plugin error codes", () => {
	it("only lists codes the SSO plugin still throws", () => {
		// The SSO plugin doesn't expose $ERROR_CODES, so look for each code in its source.
		const source = readFileSync(
			resolve(process.cwd(), "node_modules/@better-auth/sso/dist/index.mjs"),
			"utf8",
		);

		const missing = Object.keys(SSO_CODES).filter(
			(code) =>
				!source.includes(`code: "${code}"`) && !source.includes(`\t${code}: "`),
		);

		expect(missing).toEqual([]);
	});
});
