---
"better-auth-localization": major
---

Migrate to better-auth v1.7

### Breaking changes

- Requires `better-auth` `^1.7.0`. The optional `@better-auth/api-key` and `@better-auth/passkey` peer dependencies were dropped.

### Features

- Added support for the Stripe, SSO and Electron plugins
- Added support for Slovak (sk-SK, with formal and informal variants) (thanks @branislavjuhaas) and Thai (th-TH) (thanks @ArtifactyNight). Both are partial for now and fall back for untranslated codes
- Every built-in locale now translates all better-auth v1.7 error codes
- Errors returned from other plugins' `onRequest` (e.g. captcha) are now translated (#54)
- Added `translateError` (also available from `better-auth-localization/translate`) to translate an error code outside a request, e.g. on the client (#37)
- Documented reading the locale from the user's session in `getLocale` (#31)

### Fixes

- Translated errors are re-thrown as better-auth's `APIError`, keeping the original status, extra body fields and headers, so `instanceof APIError` checks keep working
- `betterAuthLocalizationClientPlugin` no longer removes other client plugins' types (#56)
- Fixed plugin translations not being applied for hi-IN, mr-IN and ckb, and missing az-AZ translations
