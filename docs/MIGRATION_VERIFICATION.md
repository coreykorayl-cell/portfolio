# V1 migration verification

## Assembled source

All 140 entries under `source/dist/` in the original `FILE_MANIFEST.sha256` are present under `public/`, with no extra site files. This includes 13 route documents and all 97 media files. Adobe and Black Boy Joy split archives were placed in `public/media/adobe/` and `public/media/black-boy-joy/` respectively. macOS metadata was excluded.

139 site entries match the original SHA-256 hashes exactly. The sole exception is `home.js`: both local-video and YouTube hover preview branches now check `prefers-reduced-motion`. This implements the behavior guide's stated suppression of hover video previews. The original export manifest remains unchanged so this difference stays explicit.

No provisional scaffold artwork, copy, build script, package.json, or generated dist output remains. The site is served directly from `public/` with no build command. Original links, CSS, and remaining JavaScript were retained unchanged. The inventory lists no redirects; no custom redirect rules or SPA rewrites were introduced.

## Verification performed

- All 140 site manifest entries accounted for; all 97 media hashes match.
- 13 routes confirmed against the supplied route inventory.
- 271 local HTML/CSS references checked, including local page fragments; none missing.
- All exported JavaScript files pass `node --check`.
- Placeholder/scaffold copy scan found no matches in the deployed site files.
- Git whitespace checks pass.
- Largest individual file: `media/adobe/adobe-social-reel.mp4`, 21,220,640 bytes, below GitHub's 100 MiB limit. Total site size: 128,093,417 bytes. No media compression or substitution was necessary.

## Limits and omitted reference artifacts

The supplied archives omit `screenshots/home-desktop.png`, `screenshots/home-mobile.png`, and `source/.openai/hosting.json` listed in the original manifest. These are not missing deployable media. Original guide documents and the original checksum manifest are retained under `docs/v1-export/`.

The screenshots' absence prevents direct screenshot comparison. Browser interaction, visual layout, video playback, and live availability of remote assets/embeds have not been interactively verified. Exported behavior implementations are preserved, with only the reduced-motion correction above. External YouTube embeds and remotely hosted fallback images remain external, as documented in the export.

Vercel and Netlify configuration files point to `public/` without a build step. They have not been exercised through a deployment. No deployment was initiated and no DNS settings were changed.
