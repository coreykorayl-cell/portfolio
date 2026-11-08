# Integrations, assets, and environment

## Third-party integrations

The Site has no authenticated APIs, analytics SDKs, payment services, databases, forms backend, CMS, or server-side integrations.

Third-party content is limited to:

- YouTube privacy-enhanced embeds from `youtube-nocookie.com` for Fresh Pair Feeling and 48 Hours. One Film.
- External outbound links to Instagram, Vimeo, LinkedIn, Substack, Letterboxd, Spotify, Shorty Awards, The Atlantic, press publications, and collaborator sites.
- A small number of remotely hosted background/thumbnail images from YouTube, Unsplash, People, and UCLA Extension retained in the CSS source.

## Environment variables

None. The source contains no `process.env`, `import.meta.env`, API key lookup, or runtime secret reference.

## Bundled media

Permitted local media is included under `source/dist/media/`, including:

- About portraits and motion clip
- Adobe final work, reel, posters, BTS photo, and BTS clips
- Black Boy Joy interviews, covers, magazine spreads, teaser, BTS, moodboard, project board, and shot list
- Fresh Pair Feeling cover, five teasers, and selected treatment pages
- BEHR Hidden Gem motion assets
- McDonald’s × Travis Scott campaign film, poster, animation, carousel images, and supporting imagery
- Photography images
- Taco Bell × Olivia Rodrigo videos, posters, stills, activation imagery, and press captures
- 98&Great logo and favicon

## External media not bundled

These resources remain external because the source references third-party hosted URLs or embeds rather than local originals:

- Fresh Pair Feeling YouTube hero film
- 48 Hours. One Film. YouTube hero film
- YouTube thumbnail images used by preview styling
- People-hosted BEHR Color of the Year image retained in homepage styling
- Unsplash photography images retained in legacy/fallback styling
- UCLA Extension image retained in legacy/fallback styling
- Instagram BTS Reels linked from the 48 Hour Film page
- Spotify interview audio, Vimeo films, Substack posts, Letterboxd content, and press articles

## Fonts

No font files or web-font services are used. The Site relies on the system stack `Arial, Helvetica, sans-serif`; therefore there are no local font binaries to bundle and no external font license dependency.

