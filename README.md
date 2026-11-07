# Corey Lightner — Creative Producer

Dependency-free HTML/CSS scaffold for migrating the v1 portfolio. No framework, install step, runtime service, or external font dependency is required.

## Local review

Run `npm run dev`, then open `http://localhost:8000`. Requires Python 3. You can also use any static web server.

Run `npm run build` to copy the site into `dist/`. Requires Node.js 18 or newer. Build paths are relative to the repository root.

## Current state

Includes the supplied hero copy, selected-work grid, studio section, and Journal / Prints / Resources / Support section. Responsive layouts, keyboard navigation, reduced-motion support, metadata, and favicon are included.

This is a scaffold, not an exact reproduction of v1. The hosted v1 could not be fetched because the environment's outbound policy blocks its hostname. Colors, typography, graphic studies, and layout are provisional. Project cards explicitly identify missing content. Their details remain visible on touch devices; decorative hover effects are optional. The studio link temporarily points to v1. The four content areas are noninteractive until real destinations are provided. No contact address or project credentials have been invented.

See [the migration checklist](docs/MIGRATION.md) for the exact export request and remaining inputs.

## Deploy after review

Both hosts serve the same `dist/` directory. No deployment has been made.

- **Netlify:** Import this repository. `netlify.toml` supplies build command `npm run build` and publish directory `dist`.
- **Vercel:** Import this repository, choose framework preset **Other**, build command `npm run build`, and output directory `dist`. `vercel.json` supplies these defaults.

Use the host's temporary URL to review before adding a domain. Check current free-plan eligibility and limits, particularly commercial-use terms, before choosing a host for the portfolio.

After approval, add `coreylightner.com` and `www.coreylightner.com` in the chosen host's domain settings. Choose the apex as primary and redirect www to it. At your domain's DNS provider, apply the exact records shown by that host; do not guess IP addresses or overwrite email/MX/TXT records. Wait for DNS verification and HTTPS provisioning, then verify both names. No registrar credentials are needed in chat. Add the canonical URL, social preview image, sitemap, and indexing policy once final routes and launch content are approved.
