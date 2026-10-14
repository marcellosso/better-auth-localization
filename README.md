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

> Requires `better-auth` **v1.7** or newer. For better-auth v1.5/v1.6, use `better-auth-localization@3`.

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

The `getLocale` option resolves the locale **per request**. It receives the raw `Request` (or `undefined` for server-side `auth.api.*` calls made without headers) and returns a locale. The plugin knows nothing about your users, so you decide where the locale comes from: a header, a cookie, or the user's session.

`getLocale` only runs when a request fails with an error, so successful requests don't pay for it. If it throws or returns an unknown locale, the plugin falls back to `defaultLocale`.

#### From a header or cookie

```ts
localization({
  defaultLocale: "pt-BR",
  getLocale: (request) => {
    const header = request?.headers.get("x-user-locale");
    return (header as BuiltInLocales | null) ?? "pt-BR";
  },
});
```

Use the same approach for a cookie (`request.headers.get("cookie")`) or `accept-language`.

#### From the user's session

To use a locale saved on the user, call `auth.api.getSession` inside `getLocale`. It reads the session from the request's cookies, the same way your app does:

```ts
import { betterAuth } from "better-auth";
import { type BuiltInLocales, localization } from "better-auth-localization";

export const auth = betterAuth({
  user: {
    additionalFields: {
      locale: { type: "string", required: false },
    },
  },
  plugins: [
    localization({
      defaultLocale: "default",
      // The explicit return type is required: `auth` is referenced inside its own
      // config, so TypeScript can't infer it.
      getLocale: async (request): Promise<BuiltInLocales> => {
        if (!request) return "default";

        const session = await auth.api.getSession({ headers: request.headers });
        if (session?.user.locale) return session.user.locale as BuiltInLocales;

        // No session (e.g. a failed sign-in): fall back to a header.
        return (request.headers.get("x-user-locale") as BuiltInLocales | null) ?? "default";
      },
    }),
  ],
});
```

Notes:
- Errors on sign-in and sign-up happen before a session exists, so always keep a fallback such as a header, a cookie or `accept-language`.
- `getSession` reads the session from your database on each translated error. Enable [`session.cookieCache`](https://www.better-auth.com/docs/concepts/session-management#cookie-cache) to avoid the lookup.
- If you use custom translations, annotate with `AvailableLocales<typeof translations>` instead of `BuiltInLocales`.

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

### Translating Outside a Request

`translateError` translates an error code without going through the plugin. Use it when the locale is only known in your UI, for example from the URL path (`/pt-BR/login`):

```ts
import { translateError } from "better-auth-localization/translate";

const { error } = await authClient.signIn.email({ email, password });

if (error?.code) {
  const message = translateError(error.code, "pt-BR") ?? error.message;
}
```

It returns `undefined` when there is no translation, and for the `"default"` locale, so you can fall back to the original message. It accepts the same `fallbackLocale` and `translations` options as the plugin:

```ts
translateError(error.code, locale, {
  fallbackLocale: "pt-BR",
  translations: { "fr-CA": { USER_NOT_FOUND: "Utilisateur introuvable" } },
});
```

Import it from `better-auth-localization/translate` in client code: that entry doesn't load any server code. It is also exported from `better-auth-localization`.

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
- 🇨🇿 **Czech (cs-CZ)** - ✅ Complete (Thanks @michaeldoubek)
  - 🇨🇿 **Czech (informal) (cs-CZ-informal) (default)**
  - 🇨🇿 **Czech (formal) (cs-CZ-formal)**
- 🇸🇰 **Slovak (sk-SK)** - 🟡 Partial (Thanks @branislavjuhaas)
  - 🇸🇰 **Slovak (informal) (sk-SK-informal) (default)**
  - 🇸🇰 **Slovak (formal) (sk-SK-formal)**
- 🇹🇭 **Thai (th-TH)** - 🟡 Partial (Thanks @ArtifactyNight)

Partial locales are missing some error codes; untranslated messages use `fallbackLocale`. Contributions to complete them are welcome.

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
- API Key plugin (`@better-auth/api-key`)
- Captcha plugin
- Device authorization plugin
- Electron plugin (`@better-auth/electron`)
- Email OTP plugin
- Generic OAuth plugin
- Have I Been Pwned plugin
- Multi-session plugin
- Organization plugin
- Passkey plugin (`@better-auth/passkey`)
- Phone number plugin
- SSO plugin (`@better-auth/sso`) - coded SAML/SSO errors with a fixed message
- Stripe plugin (`@better-auth/stripe`)
- Two-factor authentication plugin
- Username plugin

For a complete and specific list, refer to the [Better Auth documentation](https://github.com/better-auth/better-auth/blob/main/packages/core/src/error/codes.ts).

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
4. Translate the generated content to match your locale. Every error code needs a translation; `pnpm test` fails and lists any missing codes.
5. Do not edit or commit `src/translations/index.ts`.
6. Submit your pull request. The index is generated automatically by the build and tests.

The build runs the generator automatically to ensure the index stays up to date.

## License

MIT © Marcel Losso Forte
