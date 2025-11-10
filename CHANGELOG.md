# better-auth-localization

## 2.2.2

### Patch Changes

- - Added support for az-AZ (Azerbaijani) (thanks @mehdiasadli)
  - Added support for bn-BD (Bengali) (thanks @ktisakib)

## 2.2.1

### Patch Changes

- Changes on DOC

## 2.2.0

### Minor Changes

- - Added support for translations in plugins (thanks @ylyra)
  - To contribute a new language, just run `pnpm generate:locale` and enter the language code, it will generate the new language files for you to edit and add translations (@ylyra is the best)
  - Added support for ckb-IQ (Kurdish Sorani) (thanks @didar-dev)

## 2.1.10

### Patch Changes

- Added support for ro-RO (Romanian) (thanks @danielavornic)

## 2.1.9

### Patch Changes

- Fix: Missing error USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL

## 2.1.8

### Patch Changes

- fix: preserve original error codes in translations (thanks @tockawaffle)

## 2.1.7

### Patch Changes

- Fixed issue where translations were not applied on server side requests
- Added support for Danish (Thanks @BjornFrancke)

## 2.1.6

### Patch Changes

- Providing custom translations no longer override the whole translation for used language
  Before when providing a custom translation for a specific error code, the whole translation for the language was overridden.

  ```typescript
  localization({
    defaultLocale: "pt-BR",
    translations: {
      "pt-BR": {
        USER_NOT_FOUND: "Usuário não encontrado",
      },
    },
  });
  ```

  If any other error code happened, it would fallback to the default translation due to the code missing from the custom translation. Now it will just use the default translation.

## 2.1.5

### Patch Changes

- Added support for Marathi (Thanks @OutOfBoundCats)

## 2.1.4

### Patch Changes

- Added support for Russian (Thanks @draneone)

## 2.1.3

### Patch Changes

- Added support for Persian/Farsi (Thanks @Yasser5711)

## 2.1.2

### Patch Changes

- Missing client plugin export

## 2.1.1

### Patch Changes

- Added support for Turkish (Thanks @furkanczay)

## 2.1.0

### Minor Changes

- Now translations index is automatically generated on build through the generate-translations-index.cjs script, this was done to avoid manually updating the translations index file which was generating merge conflicts.
  This is a breaking change when adding new translations from now on, as we now need to export a LOCALES object from the translation file.

  ```ts
  export const LOCALES = {
    "pt-BR": PT_BR,
    "pt-PT": PT_PT,
  } as const;
  ```

  To generate the translations index locally for testing purposes, run:

  ```bash
  pnpm generate:translations
  ```

- Added support for Dutch nl-NL (thanks @InvixGG)

## 2.0.8

### Patch Changes

- Added support for new languages:
  - 🇨🇳 **Traditional Chinese (zh-Hant)** (Thanks @MarkLee425)
  - 🇨🇳 **Simplified Chinese (zh-Hans)** (Thanks @MarkLee425)
  - 🇰🇷 **Korean (ko-KR)** (Thanks @MarkLee425)
  - 🇮🇳 **Hindi (hi-HI)** (Thanks @MarkLee425)

## 2.0.7

### Patch Changes

- Added support for new languages:
  - 🇸🇪 **Swedish (sv-SE)** (Thanks @yamanadamnor)
  - 🇮🇹 **Italian (it-IT)** (Thanks @mattiamalonni)
  - 🇩🇪 **German (de-DE)** (Thanks @NiklasDah)

## 2.0.6

### Patch Changes

- Support for Greek (Thanks @DomVournias)

## 2.0.5

### Patch Changes

- - Support for Japanese (Thanks @HRTK92)
  - Support for Arabic (Thanks @mosaleh-dev)

## 2.0.4

### Patch Changes

- Support for Indonesian (Thanks @finly)

## 2.0.3

### Patch Changes

- Wrong repo URL 🤦

## 2.0.2

### Patch Changes

- Support for Polish (Thanks @stripsior)

## 2.0.1

### Patch Changes

- Small JSDocs update

## 2.0.0

### Major Changes

- **BREAKING CHANGE**: Rename main function from `betterAuthLocalization` to `localization`

  The main plugin function has been renamed for better consistency and DX.

  **Migration:**

  ```diff
  - import { betterAuthLocalization } from 'better-auth-localization';
  + import { localization } from 'better-auth-localization';

  betterAuth({
    plugins: [
  -   betterAuthLocalization({
  +   localization({
        defaultLocale: "pt-BR"
      })
    ]
  });
  ```

  **New Language Support**

  - 🇵🇹 **OG Portuguese (pt-PT)** - ✅ Complete
  - 🇫🇷 **French (fr-FR)** - ✅ Complete
    (I don't speak French, so if it is bad you can ~~fix it~~ blame AI)

## 1.3.0

### Minor Changes

- Added support for spanish

## 1.2.5

### Patch Changes

- translation type missing error codes on custom locale

## 1.2.4

### Patch Changes

- Added type prettify

## 1.2.3

### Patch Changes

- Type fixes for better DX

## 1.2.2

### Patch Changes

- Missing some types when exporting them

## 1.2.1

### Patch Changes

- Changes in readme to show which languages are supported

## 1.2.0

### Minor Changes

- Package Rename: "better-localization" -> "better-auth-localization"
