# Corey Lightner — Creative Producer: source export

This archive captures the complete source for the published Site at version 20, commit `9fe15d19e55e659aa4c45f8cba6e16dd827bc1eb`, exported on November 7, 2026.

The live Site was not changed, unpublished, or redeployed while preparing this export.

## Contents

- `source/` — complete deployable Site source, including every HTML route, CSS file, JavaScript file, the hosting manifest, favicon, and bundled project media.
- `screenshots/home-desktop.png` — desktop homepage viewport.
- `screenshots/home-mobile.png` — mobile homepage viewport at 390 × 844.
- `ROUTES_AND_LINKS.md` — internal route, external-link, and redirect inventory.
- `BEHAVIOR.md` — hover, click, navigation, responsive, video, and animation behavior.
- `INTEGRATIONS_AND_ASSETS.md` — third-party services, environment variables, local media, fonts, and non-bundled resources.
- `FILE_MANIFEST.sha256` — SHA-256 checksum for every file in the export except the ZIP itself.

## Technical structure

This is a buildless static website. The deployable source is already organized under `source/dist/`, and `source/.openai/hosting.json` declares `dist` as the static directory.

There is no `package.json`, lockfile, framework configuration, or application build command in the authoritative source. None has been invented for this export. A standard static HTTP server is sufficient.

## Local preview

From `source/`, run any static server against `dist/`. For example:

```sh
python3 -m http.server 8000 --directory dist
```

Then visit `http://localhost:8000/`.

Opening HTML files directly with `file://` is not recommended because the Site uses root-relative URLs such as `/styles.css` and `/media/...`.

## Exclusions

The export intentionally excludes:

- Git history and `.git/`
- credentials, access tokens, and secret values
- `node_modules/`
- deployment archives and unrelated historical exports

No environment-variable values were present in the source.

