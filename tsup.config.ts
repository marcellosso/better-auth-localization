import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts", "src/translate.ts"],
	outDir: "dist",
	format: ["cjs", "esm"],
	dts: true,
	splitting: true,
	sourcemap: true,
	clean: true,
	minify: true,
	target: "esnext",
	external: ["better-auth"],
});
