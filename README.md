# Better Auth Localization Plugin

A localization plugin for [Better Auth](https://github.com/better-auth/better-auth) that automatically translates error messages from the core library and official plugins.
![ezgif-6723e2cdfd4aa9](https://github.com/user-attachments/assets/af185757-1772-4022-9820-eb437d23c86f)

## Features

- 🌍 **Multi-language support** - Built-in translations with easy custom locale addition
- 🔄 **Automatic translation** - Seamlessly translates error messages without changing your application logic
- 🎯 **Type-safe** - Full TypeScript support with autocomplete for custom translations
- 🛡️ **Fallback system** - Fallback to default messages when translations are missing
- 🔧 **Flexible locale detection** - Support for custom locale resolution from headers, cookies, or databases
- ⚡ **Zero runtime overhead** - Translations are bundled at build time

## Installation

```bash
npm install better-auth-localization
# or
yarn add better-auth-localization
# or
pnpm add better-auth-localization
```

## Quick Start

### Basic Usage with Built-in Locale

```typescript
import { betterAuth } from "better-auth";
import { localization } from "better-auth-localization";

export const auth = betterAuth({
  // ... your config
  plugins: [
    localization({
      defaultLocale: "pt-BR", // Use built-in Portuguese translations
      fallbackLocale: "default" // Fallback to English
    })
  ]
});
```

### Dynamic Locale Detection

The `getLocale` option lets you **dynamically detect the locale** for each request.  
It receives a **raw `Request` object**, so you can read cookies, headers, JWT tokens, database info, whatever makes sense in your app.

This plugin does *not* know your user/session automatically. You decide how to extract the locale.

---

## Example

```ts
localization({
  defaultLocale: "pt-BR",
  fallbackLocale: "default",
  getLocale: async (req) => {
    try {
      const locale = await getUserLocale(req);
      return locale ?? "default";
    } catch (err) {
      console.warn("Error detecting locale:", err);
      return "default";
    }
  }
});
```

---

## Implementing `getUserLocale` (choose the strategy you prefer)

Below are a few common ways to detect the locale.  
Pick one or combine them depending on your app’s architecture.

---

### **1. Read locale directly from a cookie** (simplest)

```ts
async function getUserLocale(req: Request): Promise<string | null> {
  const cookieHeader = req.headers.get("cookie");
  const cookies = parseCookie(cookieHeader);
  return cookies.locale ?? null;
}
```

---

### **2. Read locale from a custom header**

```ts
async function getUserLocale(req: Request): Promise<string | null> {
  return req.headers.get("x-user-locale");
}
```

---

### **3. Decode your session/JWT and read the user's preferred locale**

Useful if your authentication stores user data inside a token.

```ts
async function getUserLocale(req: Request): Promise<string | null> {
  const cookieHeader = req.headers.get("cookie");
  const session = decodeSession(cookieHeader); // your own logic

  return session?.user?.locale ?? null;
}
```

---

### **4. Look up user locale in your database**

Only makes sense if your session/cookie includes a userId.

```ts
async function getUserLocale(req: Request): Promise<string | null> {
  const cookieHeader = req.headers.get("cookie");
  const session = decodeSession(cookieHeader); // extract userId
  const userId = session?.userId;

  if (!userId) return null;

  const locale = await db.user.getLocale(userId);
  return locale ?? null;
}
```

If you have suggestions for more examples or want to see a built-in helper, feel free to open an issue!

### Custom Translations

```typescript
localization({
  defaultLocale: "fr",
  fallbackLocale: "pt-BR", // Can also use built-in locales as fallback
  translations: {
    "fr": {
      USER_NOT_FOUND: "Utilisateur non trouvé",
      INVALID_PASSWORD: "Mot de passe invalide",
      INVALID_EMAIL: "Email invalide",
      SESSION_EXPIRED: "Session expirée"
    },
    "es": {
      USER_NOT_FOUND: "Usuario no encontrado",
      INVALID_PASSWORD: "Contraseña inválida",
      INVALID_EMAIL: "Email inválido",
      SESSION_EXPIRED: "Sesión expirada"
    }
  },
});
```

### Overriding Built-in Translations

```typescript
localization({
  defaultLocale: "pt-BR",
  translations: {
    "pt-BR": {
      // Override specific messages
      USER_NOT_FOUND: "Usuário não foi encontrado no sistema",
      INVALID_PASSWORD: "A senha fornecida está incorreta"
    }
  }
});
```

### Language Support Status

Currently supported languages:
- 🇧🇷 **Portuguese (pt-BR)** - ✅ Complete
- 🇵🇹 **Portuguese (pt-PT)** - ✅ Complete
- 🇪🇸 **Spanish (es-ES)** - ✅ Complete
- 🇫🇷 **French (fr-FR)** - ✅ Complete
- 🇵🇱 **Polish (pl-PL)** - ✅ Complete (Thanks @stripsior)
- 🇮🇩 **Indonesian (id-ID)** - ✅ Complete (Thanks @finly)
- 🇯🇵 **Japanese (ja-JP)** - ✅ Complete (Thanks @HRTK92)
- 🇸🇦 **Arabic (ar-SA)** - ✅ Complete (Thanks @mosaleh-dev)
- 🇬🇷 **Greek (el-GR)** - ✅ Complete (Thanks @DomVournias)
- 🇸🇪 **Swedish (sv-SE)** - ✅ Complete (Thanks @yamanadamnor)
- 🇮🇹 **Italian (it-IT)** - ✅ Complete (Thanks @mattiamalonni)
- 🇩🇪 **German (de-DE)** - ✅ Complete (Thanks @NiklasDah)
  - 🇩🇪 **German (informal, "du") (de-DE-informal) (default)** 
  - 🇩🇪 **German (formal, "Sie") (de-DE-formal)** 
- 🇨🇳 **Traditional Chinese (zh-Hant)** - ✅ Complete (Thanks @MarkLee425)
- 🇨🇳 **Simplified Chinese (zh-Hans)** - ✅ Complete (Thanks @MarkLee425)
- 🇰🇷 **Korean (ko-KR)** - ✅ Complete (Thanks @MarkLee425)
- 🇮🇳 **Hindi (hi-HI)** - ✅ Complete (Thanks @MarkLee425)
- 🇹🇷 **Turkish (tr-TR)** - ✅ Complete (Thanks @furkanczay)
- 🇳🇱 **Dutch (nl-NL)** - ✅ Complete (Thanks @InvixGG)
  - 🇳🇱 **Dutch (informal, "je") (nl-NL-informal) (default)**
  - 🇳🇱 **Dutch (formal, "u") (nl-NL-formal)**
- 🇮🇷 **Persian/Farsi (fa-IR)** - ✅ Complete (Thanks @Yasser5711)
- 🇷🇺 **Russian (ru-RU)** - ✅ Complete (Thanks @draneone)
- 🇮🇳 **Marathi (mr-MR)** - ✅ Complete (Thanks @OutOfBoundCats)
- 🇩🇰 **Danish (da-DK)** - ✅ Complete (Thanks @BjornFrancke)
- 🇷🇴 **Romanian (ro-RO)** - ✅ Complete (Thanks @danielavornic)
- 🇮🇶 **Kurdish Sorani (ckb-IQ)** - ✅ Complete (Thanks @didar-dev)
- 🇧🇩 **Bengali (bn-BD)** - ✅ Complete (Thanks @ktisakib)
- 🇦🇿 **Azerbaijani (az-AZ)** - ✅ Complete (Thanks @mehdiasadli)
- 🇻🇳 **Vietnamese (vi-VN)** - ✅ Complete (Thanks @trinhvanminh)
- 🇺🇦 **Ukrainian (uk-UA)** - ✅ Complete (Thanks @tarasromil)

## Built-in Translations

The plugin comes with built-in translations for all Better Auth error codes, including:

**Core Library:**
- User-related errors (USER_NOT_FOUND, USER_ALREADY_EXISTS, etc.)
- Session errors (SESSION_EXPIRED, FAILED_TO_CREATE_SESSION, etc.)
- Authentication errors (INVALID_PASSWORD, INVALID_EMAIL, etc.)
- Password validation (PASSWORD_TOO_SHORT, PASSWORD_TOO_LONG)
- Social authentication errors
- Account management errors

**Official Plugins:**
- Admin plugin error messages
- Anonymous authentication plugin
- API Key plugin
- Device authorization plugin
- Email OTP plugin
- Generic OAuth plugin
- Have I Been Pwned plugin
- Multi-session plugin
- Organization plugin
- Passkey plugin
- Phone number plugin
- Two-factor authentication plugin
- Username plugin

For a complete and specific list, refer to the [Better Auth documentation](https://github.com/better-auth/better-auth/blob/canary/packages/core/src/error/codes.ts).

## Contributing

We welcome and appreciate contributions! Help us expand language support by adding new translations.

### Adding a new language (no merge conflicts)

This repo auto-generates the translations index to avoid PR conflicts when multiple languages are added in parallel.

1. Run the locale creation script:
   ```bash
   npm run generate:locale
   # or
   pnpm generate:locale
   # or
   yarn generate:locale
   ```
2. Input your desired locale (e.g., `nl_NL`, `fr_CA`, `es_MX`)
3. The script will automatically:
   - Create the main translation file with the correct structure
   - Generate plugin-specific translation files with proper types
   - Update all necessary LOCALES objects
   - Use the correct error code types for each plugin
4. Translate the generated content to match your locale
5. Do not edit or commit `src/translations/index.ts`.
6. Submit your pull request. The index is generated automatically by the build and tests.

The build runs the generator automatically to ensure the index stays up to date.

## License

MIT © Marcel Losso Forte
