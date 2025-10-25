#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const prompts = require("prompts");

const projectRoot = path.resolve(__dirname, "..");
const translationsDir = path.join(projectRoot, "src", "translations");
const pluginsDir = path.join(translationsDir, "plugins");

const locales = [
	"pt_BR", "pt_PT", "pt_AO", "pt_MZ", "pt_GW", "pt_CV", "pt_ST", "pt_TL",
	"es_ES", "es_MX", "es_AR", "es_CL", "es_CO", "es_PE", "es_VE", "es_EC", "es_UY", "es_BO",
	"es_DO", "es_PY", "es_CR", "es_PA", "es_GT", "es_SV", "es_NI", "es_HN", "es_PR",
	"fr_FR", "fr_CA", "fr_BE", "fr_CH", "fr_LU", "fr_MC", "fr_SN", "fr_MA", "fr_TN", "fr_DZ",
	"de_DE", "de_AT", "de_CH", "de_LU", "de_BE",
	"it_IT", "it_CH", "it_SM", "it_VA",
	"nl_NL", "nl_BE", "nl_SR", "nl_CW",
	"ru_RU", "ru_UA", "ru_KZ", "ru_BY", "ru_KG",
	"ar_SA", "ar_EG", "ar_AE", "ar_DZ", "ar_MA", "ar_TN", "ar_LB", "ar_SY", "ar_JO", "ar_IQ",
	"ar_KW", "ar_QA", "ar_BH", "ar_OM", "ar_SD", "ar_LY", "ar_YE",
	"zh_CN", "zh_TW", "zh_HK", "zh_SG", "zh_MO",
	"ja_JP",
	"ko_KR",
	"hi_IN",
	"bn_BD", "bn_IN",
	"tr_TR", "tr_CY",
	"fa_IR", "fa_AF",
	"sw_KE", "sw_TZ", "sw_UG",
	"pl_PL", "cs_CZ", "sk_SK", "hu_HU", "fi_FI", "sv_SE", "no_NO", "da_DK", "is_IS",
	"el_GR", "he_IL", "th_TH", "vi_VN", "id_ID", "ms_MY", "ta_IN", "ur_PK"
]

function getPluginDirectories() {
	const dirs = fs
		.readdirSync(pluginsDir, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name)
		.sort((a, b) => a.localeCompare(b));
	
	return dirs;
}

function localeToConstantName(locale) {
	return locale
		.replace(/-/g, "_")
		.toUpperCase();
}

function localeToHyphenated(locale) {
	return locale.replace(/_/g, "-");
}

function getParentLocale(locale) {
	return locale.split('_')[0];
}

async function addLocaleToParentFile(newLocale) {
	const parentLocale = getParentLocale(newLocale);
	const parentFile = path.join(translationsDir, `${parentLocale}.ts`);
	
	if (!fs.existsSync(parentFile)) {
		// Create a new parent file with basic structure
		const constants = [
			'import { createTranslationObject } from "../utils/create-translation-object";',
			'',
			'export const LOCALES = {',
			'} as const;'
		].join('\n');

		fs.writeFileSync(parentFile, constants, "utf8");
		console.log(`🆕 Created new parent locale file: ${parentFile}`);
	}
	
	const content = fs.readFileSync(parentFile, "utf8");
	const newConstant = localeToConstantName(newLocale);
	const newHyphenated = localeToHyphenated(newLocale);
	
	if (content.includes(`export const ${newConstant}`)) {
		console.log(`⚠ Constant ${newConstant} already exists in ${parentLocale}.ts`);
		return;
	}
	
	const constantLine = `export const ${newConstant} = createTranslationObject("${newHyphenated}");`;
	
	const lines = content.split('\n');
	let insertIndex = -1;
	
	for (let i = lines.length - 1; i >= 0; i--) {
		if (lines[i].startsWith('export const ') && lines[i].includes('createTranslationObject')) {
			insertIndex = i + 1;
			break;
		}
	}
	
	if (insertIndex === -1) {
		// Fallback: add after imports
		for (let i = 0; i < lines.length; i++) {
			if (lines[i].startsWith('export const ')) {
				insertIndex = i;
				break;
			}
		}
	}
	
	// Insert the new constant
	lines.splice(insertIndex, 0, constantLine);
	
	// Update LOCALES object
	const updatedContent = lines.join('\n');
	const newContent = updatedContent.replace(
		/export const LOCALES = \{([^}]*)\} as const;/,
		(_, content) => {
			// Add new locale to LOCALES object
			const newLocaleEntry = `\t"${newHyphenated}": ${newConstant},`;
			return `export const LOCALES = {${content}${newLocaleEntry}\n} as const;`;
		}
	);
	
	fs.writeFileSync(parentFile, newContent, "utf8");
	console.log(`✓ Added ${newConstant} to: ${path.relative(projectRoot, parentFile)}`);
}

// Helper function to get the correct error code type for each plugin
function getPluginErrorCodeType(pluginName) {
	const pluginTypeMap = {
		'admin': 'AdminErrorCodesType',
		'anonymous': 'AnonymousErrorCodesType',
		'api-key': 'ApiKeyErrorCodesType',
		'auth': 'AuthErrorCodesType',
		'device-authorization': 'DeviceAuthorizationErrorCodesType',
		'email-otp': 'EmailOTPErrorCodesType',
		'generic-oauth': 'GenericOAuthErrorCodesType',
		'have-i-been-pwned': 'HaveIBeenPwnedErrorCodesType',
		'multi-session': 'MultiSessionErrorCodesType',
		'organization': 'OrganizationErrorCodesType',
		'passkey': 'PasskeyErrorCodesType',
		'phone-number': 'PhoneNumberErrorCodesType',
		'two-factor': 'TwoFactorErrorCodesType',
		'username': 'UsernameErrorCodesType'
	};
	
	return pluginTypeMap[pluginName] || 'ErrorCodesType';
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
				'',
				`export const ${localeToConstantName(parentLocale)} = {} satisfies ${errorCodeType};`,
				'',
				'export const LOCALES = {',
				`\t"${localeToHyphenated(parentLocale)}": ${localeToConstantName(parentLocale)},`,
				'} as const;'
			].join('\n');

			fs.writeFileSync(pluginFile, constants, "utf8");
			console.log(`✓ Created parent file: ${path.relative(projectRoot, pluginFile)}`);
		}
		
		const content = fs.readFileSync(pluginFile, "utf8");
		const newConstant = localeToConstantName(newLocale);
		const newHyphenated = localeToHyphenated(newLocale);
		
		if (content.includes(`export const ${newConstant}`)) {
			console.log(`⚠ Constant ${newConstant} already exists in ${pluginDir}/${parentLocale}.ts`);
			continue;
		}
		
		const newConstantLine = `export const ${newConstant} = {} satisfies ${errorCodeType};`;
		
		const lines = content.split('\n');
		let insertIndex = -1;
		
		for (let i = lines.length - 1; i >= 0; i--) {
			if (lines[i].startsWith('export const ') && lines[i].includes(`satisfies ${errorCodeType}`)) {
				insertIndex = i + 1;
				break;
			}
		}
		
		if (insertIndex === -1) {
			for (let i = 0; i < lines.length; i++) {
				if (lines[i].includes('export const LOCALES')) {
					insertIndex = i;
					break;
				}
			}
		}
		
		lines.splice(insertIndex, 0, newConstantLine);
		
		const updatedContent = lines.join('\n');
		const newContent = updatedContent.replace(
			/export const LOCALES = \{([^}]*)\} as const;/,
			(_, content) => {
				const newLocaleEntry = `\t"${newHyphenated}": ${newConstant},`;
				return `export const LOCALES = {${content}${newLocaleEntry}\n} as const;`;
			}
		);
		
		fs.writeFileSync(pluginFile, newContent, "utf8");
		updatedFiles.push(path.relative(projectRoot, pluginFile));
		console.log(`✓ Added ${newConstant} to: ${path.relative(projectRoot, pluginFile)}`);
	}
	
	return updatedFiles;
}

async function main() {
	try {
		const { newLocale } = await prompts({
			type: 'autocomplete',
			name: 'newLocale',
			message: 'Select the new locale to create:',
			choices: locales.map(pattern => ({
				title: pattern,
				value: pattern
			})),
		});
		
		const trimmedLocale = newLocale;
		
		console.log(`\n📝 Creating locale '${trimmedLocale}'...`);
		
		// Add new locale to parent file
		await addLocaleToParentFile(trimmedLocale);
		
		// Add new locale to plugin files
		const pluginFiles = await addLocaleToPluginFiles(trimmedLocale);
		
		console.log("\n🎉 Successfully created locale!");
		const parentLocale = getParentLocale(trimmedLocale);
		console.log(`📁 Added to parent file: src/translations/${parentLocale}.ts`);
		if (pluginFiles.length > 0) {
			console.log(`📁 Updated plugin files: ${pluginFiles.length} files updated`);
		}
		console.log("\n✨ Don't forget to translate the content to match your locale!");
		
	} catch (error) {
		console.error("\n❌ Error:", error.message);
		process.exit(1);
	}
}

// Run the script
main();
