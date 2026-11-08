# Corey Lightner — Creative Producer

Buildless static migration of the official v20 export (source commit `9fe15d19e55e659aa4c45f8cba6e16dd827bc1eb`). The deployable site lives in `public/`; there is no framework, dependency installation, or build step.

## Preview

Run `python3 -m http.server 8000 --directory public` from the repository root, then visit http://localhost:8000/. Root-relative URLs require an HTTP server.

## Hosting

Vercel: framework preset Other, no build command, output directory `public` (configured in `vercel.json`).

Netlify: no build command, publish directory `public` (configured in `netlify.toml`).

No deployment or DNS change is authorized for this migration. Review the complete site before connecting hosting or changing the domain.

## Migration status

All 13 routes and the exported HTML/CSS/JS are imported. See `docs/v1-export/` for the original inventory, behavior guide, integration notes, and checksum manifest. Those documents describe the original complete export; they are preserved as references and do not override the current request.

All 140 deployable files are assembled, including all 97 media files. 139 files match the export's SHA-256 manifest exactly. The sole intentional difference is `home.js`: reduced-motion preferences suppress video/YouTube hover previews, matching the export behavior guide. No scaffold placeholder content remains.

The two homepage reference screenshots and original ChatGPT hosting manifest listed in the export were not supplied. The site uses the Vercel and Netlify configurations in this repository instead; no site media is missing. See [verification details](docs/MIGRATION_VERIFICATION.md).

All original internal and external links are retained. The source inventory specifies no redirects; no custom redirects or SPA fallback have been added. Each route is served from its own directory's `index.html`.

Preserved behaviors include mobile navigation, project hover/focus previews and filters, scroll reveals, portrait rotation and pause/advance controls, video playback, and responsive galleries. JavaScript syntax and all 271 local HTML/CSS references pass verification. Browser layout, live third-party embeds, and media playback have not been interactively verified.

Third-party embeds and remote fallback images remain external as in v1. No backend, analytics, forms service, secrets, or font downloads are required.
