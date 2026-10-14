#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const prompts = require("prompts");

const projectRoot = path.resolve(__dirname, "..");
const translationsDir = path.join(projectRoot, "src", "translations");
const pluginsDir = path.join(translationsDir, "plugins");

function getPluginDirectories() {
	const dirs = fs
		.readdirSync(pluginsDir, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name)
		.sort((a, b) => a.localeCompare(b));

	return dirs;
}

function localeToConstantName(locale) {
	return locale.replace(/-/g, "_").toUpperCase();
}

function localeToHyphenated(locale) {
	return locale.replace(/_/g, "-");
}

function getParentLocale(locale) {
	return locale.split("_")[0];
}

async function addLocaleToParentFile(newLocale) {
	const parentLocale = getParentLocale(newLocale);
	const parentFile = path.join(translationsDir, `${parentLocale}.ts`);

	if (!fs.existsSync(parentFile)) {
		const constants = [
			'import { createTranslationObject } from "../utils/create-translation-object";',
			"",
			"export const LOCALES = {",
			"} as const;",
		].join("\n");

		fs.writeFileSync(parentFile, constants, "utf8");
		console.log(`🆕 Created new parent locale file: ${parentFile}`);
	}

	const content = fs.readFileSync(parentFile, "utf8");
	const newConstant = localeToConstantName(newLocale);
	const newHyphenated = localeToHyphenated(newLocale);

	if (content.includes(`export const ${newConstant}`)) {
		console.log(
			`⚠ Constant ${newConstant} already exists in ${parentLocale}.ts`,
		);
		return;
	}

	const constantLine = `\nexport const ${newConstant} = createTranslationObject("${newHyphenated}", {});`;

	const lines = content.split("\n");
	let insertIndex = -1;

	if (insertIndex === -1) {
		for (let i = 0; i < lines.length; i++) {
			if (lines[i].startsWith("export const LOCALES")) {
				insertIndex = i - 1;
				break;
			}
		}
	}

	lines.splice(insertIndex, 0, constantLine);

	const updatedContent = lines.join("\n");
	const newContent = updatedContent.replace(
		/export const LOCALES = \{([^}]*)\} as const;/,
		(_, content) => {
			const newLocaleEntry = `\t"${newHyphenated}": ${newConstant},`;
			return `export const LOCALES = {${content}${newLocaleEntry}\n} as const;`;
		},
	);

	fs.writeFileSync(parentFile, newContent, "utf8");
	console.log(
		`✓ Added ${newConstant} to: ${path.relative(projectRoot, parentFile)}`,
	);
}

// Helper function to get the correct error code type for each plugin
function getPluginErrorCodeType(pluginName) {
	const pluginTypeMap = {
		admin: "AdminErrorCodesType",
		anonymous: "AnonymousErrorCodesType",
		"api-key": "ApiKeyErrorCodesType",
		captcha: "CaptchaErrorCodesType",
		"device-authorization": "DeviceAuthorizationErrorCodesType",
		electron: "ElectronErrorCodesType",
		"email-otp": "EmailOTPErrorCodesType",
		"generic-oauth": "GenericOAuthErrorCodesType",
		"have-i-been-pwned": "HaveIBeenPwnedErrorCodesType",
		"multi-session": "MultiSessionErrorCodesType",
		organization: "OrganizationErrorCodesType",
		passkey: "PasskeyErrorCodesType",
		"phone-number": "PhoneNumberErrorCodesType",
		sso: "SSOErrorCodesType",
		stripe: "StripeErrorCodesType",
		"two-factor": "TwoFactorErrorCodesType",
		username: "UsernameErrorCodesType",
	};

	return pluginTypeMap[pluginName] || "ErrorCodesType";
}

async function addLocaleToPluginFiles(newLocale) {
	const pluginDirs = getPluginDirectories();
	const parentLocale = getParentLocale(newLocale);
	const updatedFiles = [];

	for (const pluginDir of pluginDirs) {
		const pluginPath = path.join(pluginsDir, pluginDir);
		const pluginFile = path.join(pluginPath, `${parentLocale}.ts`);
		const errorCodeType = getPluginErrorCodeType(pluginDir);

		if (!fs.existsSync(pluginFile)) {
			const constants = [
				`import type { ${errorCodeType} } from "../../../types";`,
				"",
				`export const ${localeToConstantName(parentLocale)} = {} satisfies ${errorCodeType};`,
				"",
				"export const LOCALES = {",
				`\t"${localeToHyphenated(parentLocale)}": ${localeToConstantName(parentLocale)},`,
				"} as const;",
			].join("\n");

			fs.writeFileSync(pluginFile, constants, "utf8");
			console.log(
				`✓ Created parent file: ${path.relative(projectRoot, pluginFile)}`,
			);
		}

		const content = fs.readFileSync(pluginFile, "utf8");
		const newConstant = localeToConstantName(newLocale);
		const newHyphenated = localeToHyphenated(newLocale);

		if (content.includes(`export const ${newConstant}`)) {
			console.log(
				`⚠ Constant ${newConstant} already exists in ${pluginDir}/${parentLocale}.ts`,
			);
			continue;
		}

		const newConstantLine = `export const ${newConstant} = {} satisfies ${errorCodeType};`;

		const lines = content.split("\n");
		let insertIndex = -1;

		for (let i = lines.length - 1; i >= 0; i--) {
			if (
				lines[i].startsWith("export const ") &&
				lines[i].includes(`satisfies ${errorCodeType}`)
			) {
				insertIndex = i + 1;
				break;
			}
		}

		if (insertIndex === -1) {
			for (let i = 0; i < lines.length; i++) {
				if (lines[i].includes("export const LOCALES")) {
					insertIndex = i;
					break;
				}
			}
		}

		lines.splice(insertIndex, 0, newConstantLine);

		const updatedContent = lines.join("\n");
		const newContent = updatedContent.replace(
			/export const LOCALES = \{([^}]*)\} as const;/,
			(_, content) => {
				const newLocaleEntry = `\t"${newHyphenated}": ${newConstant},`;
				return `export const LOCALES = {${content}${newLocaleEntry}\n} as const;`;
			},
		);

		fs.writeFileSync(pluginFile, newContent, "utf8");
		updatedFiles.push(path.relative(projectRoot, pluginFile));
		console.log(
			`✓ Added ${newConstant} to: ${path.relative(projectRoot, pluginFile)}`,
		);
	}

	return updatedFiles;
}

async function main() {
	try {
		const { newLocale } = await prompts({
			type: "text",
			name: "newLocale",
			message: "Enter the new locale to create (e.g., nl_NL, fr_CA, es_MX):",
		});

		const trimmedLocale = newLocale.trim();

		console.log(`\n📝 Creating locale '${trimmedLocale}'...`);

		await addLocaleToParentFile(trimmedLocale);

		const pluginFiles = await addLocaleToPluginFiles(trimmedLocale);

		console.log("\n🎉 Successfully created locale!");
		const parentLocale = getParentLocale(trimmedLocale);
		console.log(`📁 Added to parent file: src/translations/${parentLocale}.ts`);
		if (pluginFiles.length > 0) {
			console.log(
				`📁 Updated plugin files: ${pluginFiles.length} files updated`,
			);
		}
		console.log(
			"\n✨ Don't forget to translate the content to match your locale!",
		);
	} catch (error) {
		console.error("\n❌ Error:", error.message);
		process.exit(1);
	}
}

// Run the script
main();
