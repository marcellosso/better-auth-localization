import type { BetterAuthClientPlugin } from "better-auth";
import type { localization } from "./index";

type BetterAuthLocalizationPlugin = typeof localization;

// No return type annotation: widening to `BetterAuthClientPlugin` erases the
// plugin's literal type and breaks the inferred types of the other client plugins.
export const betterAuthLocalizationClientPlugin = () =>
	({
		id: "localization",
		$InferServerPlugin: {} as ReturnType<BetterAuthLocalizationPlugin>,
	}) satisfies BetterAuthClientPlugin;
