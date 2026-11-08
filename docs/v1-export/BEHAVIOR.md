# Interaction and animation behavior

## Navigation

- The header remains sticky while scrolling.
- Desktop navigation shows the primary routes and a contact call-to-action.
- Below the mobile breakpoint, the navigation links collapse behind a `MENU` button. Clicking it toggles the menu and updates `aria-expanded`.
- `combined.js` inserts the 98&Great link into older page templates and normalizes the Corey Lightner identity lockup.

## Homepage project index

- Hovering a project row, or focusing it by keyboard, marks that row active and updates the large preview, client/role caption, accessible label, and destination link.
- Hidden Gem, Adobe, and local-media projects use locally bundled video previews where configured.
- Fresh Pair Feeling and 48 Hours. One Film. use muted, looping YouTube embeds for hover previews.
- Filters show All, Commercial, 98&Great Originals, or Photography. Clicking a filter hides nonmatching rows and updates the preview to the first visible project.
- With reduced-motion preferences enabled, hover video previews are suppressed.

## Page motion

- Elements with `.reveal` start slightly translated and transparent.
- An `IntersectionObserver` adds `.on` when each element enters the viewport, producing a one-time fade-and-rise transition.
- The legacy marquee uses a continuous horizontal CSS keyframe animation.
- Cards and buttons use short hover transforms, shadow changes, color changes, or subtle image scaling.

## About page

- The portrait area cycles through image and video frames every 4.2 seconds.
- Hovering pauses the rotation; leaving resumes it.
- The manual next control advances immediately and restarts the timer.
- Automatic rotation is disabled when reduced motion is requested.

## Media

- Case-study videos use native HTML video controls unless explicitly designed as muted autoplay previews.
- Black Boy Joy BTS videos are forced muted by the shared script.
- YouTube hero films are embedded through the privacy-enhanced `youtube-nocookie.com` domain.
- McDonald’s carousel assets form a horizontally scrollable/swipeable strip on constrained layouts.

## Responsive behavior

- Multi-column grids collapse to one column at page-specific breakpoints, generally between 760 and 850 pixels.
- The homepage preview stops being sticky on smaller screens.
- Display type uses `clamp()` sizing, with a mobile override that prevents the Storyteller line from colliding.
- Photography, project galleries, credits, and contact/social grids stack for narrow viewports.

