# Product Website Plan

## Goal

Create a polished Next.js product and help site that can present multiple apps over time, while giving each product an honest release posture. Visitors often arrive from the App Store, so the site must also work as the support and privacy destination for every published app.

Current portfolio:

| Product | Role | Site status |
| --- | --- | --- |
| **RoomTone** | iPhone/iPad app for children's rooms, compatible with Sonos | Live on the site (`ENABLE_ROOMTONE`, on by default); App Store release "coming soon" |
| **Easy Control for Home Assistant** | iPhone app + Home Assistant integration for guest access | Content written, hidden (`ENABLE_EASY_CONTROL=false`) |
| **HomeControl+** | macOS smart-home control center | Content written, hidden (`ENABLE_HOMECONTROL_PLUS=false`), in development |

## Portfolio research summary

### RoomTone

RoomTone is a single app with two sides:

1. A **child's view**: big covers of Sonos favorites and playlists, one-tap playback, search by typing or voice (on-device), and audio drama series that continue with the next episode.
2. **Parental settings** behind a PIN: which speakers the child may control, which favorites and playlists are hidden, bedtime with sleep favorites and a timer, and kiosk mode with a night light for wall tablets.

What the app gives the website:

- a clear family audience and an everyday problem ("my child wants to play music without touching my speakers")
- a strong privacy story: no account, no server, no ads, no tracking; it talks to speakers over the local Wi-Fi
- the Sonos volume limit applies, so parents keep control
- real iPhone and iPad screenshots with invented demo content (`public/apps/roomtone/`)
- a dedicated support address (`roomtone@vselas.de`) and existing privacy and German help pages on `roomtone.vselas.de`

Why it matters:

- it is the first product published on the site
- it sets the tone for the portfolio: calm, family-friendly, privacy-first
- it needs a careful "compatible with Sonos, not a Sonos product" disclaimer

### Easy Control for Home Assistant

Easy Control is not a single binary. It is a coordinated product made of:

1. An iPhone app that handles guest onboarding, secure session storage, biometric confirmation, and a focused tile UI.
2. A Home Assistant custom integration that creates guest passes, renders QR codes, enforces policy, and exposes administrative services.

What the app and integration already give the website:

- QR onboarding with camera flow and deep-link fallback
- host trust confirmation before continuing with unfamiliar endpoints
- Keychain-backed session storage and token validation
- Face ID or passcode confirmation before sensitive actions
- tile-based control for locks, covers, lights, switches, climate, and sensors
- MQTT live state support when the integration provides broker details
- `easy_control.create_guest_pass` for scoped, time-limited access
- QR presentation through persistent notifications
- optional email delivery with inline QR code and deep-link fallback
- approval and rejection workflow for pending pairings
- single-token, per-guest, and global revocation
- optional local-only mode, CIDR allowlists, rate limits, and action proof
- `easy_control_used` event for audit and automations

Why it matters:

- it has a crisp problem statement
- it contains a full end-to-end user journey
- it has unusually strong trust and security differentiation
- it is a strong candidate for the next public product once release links are confirmed

### HomeControl+

HomeControl+ is the resident-facing counterpart in `/Users/sel0001d/Development/private/HomeControl-`. It is a native macOS SwiftUI smart-home control center that already integrates with:

- Home Assistant via MQTT
- UniFi Protect
- camera streaming paths including WebRTC-oriented setups
- Sonos
- travel and dashboard context

What the repo already proves:

- an eight-step setup wizard for MQTT, Home Assistant, UniFi, cameras, Sonos, travel, and dashboards
- configurable sidebar items for dashboards, cameras, Sonos, and doorbell views
- dashboard cycling and always-on display patterns
- 36 dashboard widget types spanning floorplans, weather, energy, maps, alarms, vehicles, switches, covers, heating, and more
- Keychain-backed credentials plus backup and restore work

Why it matters:

- it gives the site a complementary, owner-facing product story
- it rounds out the portfolio from family audio and guest access to a resident control center
- it should be shown publicly as **in development**, not as a published app

## Site strategy

### Portfolio positioning

The product family becomes clearer when the roles stay distinct:

- **RoomTone**: the child's own speaker, with parental rules
- **Easy Control**: guest access without shared accounts
- **HomeControl+**: the owner-facing smart-home cockpit on macOS

That means the site should present:

- the first enabled product as the flagship on the home page
- download-oriented messaging for published or soon-published apps
- preview-oriented messaging for in-development products
- room for future iOS, macOS, and Home Assistant tools without redesign

Products are switched on one at a time with an `ENABLE_*` flag. A product that is switched off is hidden completely: no pages, navigation, sitemap entries, FAQ, or assets (`scripts/prune-unreleased.mjs` removes them from `out/`). Without any enabled product the home page shows a neutral "coming soon" message.

### Information architecture

- `/`
  - product-family landing page
  - the first enabled product (currently RoomTone) is the flagship: hero, proof points, benefits
  - App Store support band with links to the FAQ and support email
- `/apps`
  - reusable catalogue of all enabled products
- `/apps/[slug]`
  - full product story: modules, how it works, screenshots, features, security, setup, downloads, optional Home Assistant how-to, FAQ, help
  - `/apps/roomtone` is live; `/apps/easy-control` and `/apps/homecontrol-plus` are built only when their flags are on
- `/faq`
  - help center built from the `faqGroups` of all enabled products
- `/impressum`, `/datenschutz`
  - German legal pages, generated from `LEGAL_*` variables

### Content model rules

Each product entry should support:

- name, slug, category, status
- platform badges
- proof points
- hero highlights
- optional modules for multi-part products
- user journey steps
- feature groups
- supported capabilities
- setup steps
- download and release states
- FAQ, plus optional grouped help-center FAQ (`faqGroups`)
- optional feature flag, gallery, support email, external links, disclaimer, and page copy overrides

This fits all three products:

- RoomTone uses modules to express the child's view and the parental settings
- Easy Control uses modules to express app + integration, plus a Home Assistant how-to
- HomeControl+ uses modules to express app + dashboard/integration system

The model also proves the site must support both:

- public releases
- in-development previews

## Inspiration research

### [Controller for HomeKit](https://www.controllerforhomekit.com/)

Strong patterns worth borrowing:

- modular feature storytelling
- social proof and credibility cues
- a product page that feels deep enough to explore

Avoid copying:

- too many repeated feature slices without a tighter narrative arc

### [Heidkamp](https://heidkamp.dev)

Useful cues:

- clear sectioning between services, stack, and projects
- strong project cards with concise benefit bullets

Usefulness for this project:

- good inspiration for the multi-product homepage and catalogue framing

### [Baby Monitor 3G](https://www.babymonitor3g.com/de/)

Useful cues:

- very clear “how it works” narrative
- benefit-first explanation before technical detail

Usefulness for this project:

- Easy Control should use a similarly simple walkthrough because the onboarding journey is central

### [HealthyApps Apps](https://www.healthyapps.dev/apps/)

Useful cues:

- clean product index that reads as a family of focused tools
- simple, repeatable app-card layout

Usefulness for this project:

- validates the separate catalogue page

### [Things / Cultured Code](https://culturedcode.com/things/)

Useful cues:

- confidence, restraint, and very clear product language
- device-specific framing without clutter

Usefulness for this project:

- reminds us that the whole portfolio should sound calm and trustworthy, not overloaded with jargon

## Recommended narrative direction

### RoomTone

Lead with the everyday benefit:

> Your child's own speaker.

Then layer in the parental trust story:

- only the speakers you allow
- the Sonos volume limit applies
- bedtime mode with sleep favorites and a timer
- PIN-protected settings
- no account, no ads, no tracking

### Easy Control

Lead with the everyday benefit:

> Scoped guest access for the smart home, without shared accounts.

Then layer in the trust story:

- scoped permissions
- expiring passes
- Face ID
- device binding
- local-only policies

### HomeControl+

Lead with the product role:

> A customizable macOS home cockpit for the people who run the house.

Then show why it is already worth previewing:

- configurable dashboards with 36 widget types
- cameras, doorbell, and Sonos in the same app
- MQTT-backed Home Assistant control
- floorplans, maps, vehicles, weather, energy, and live household context

Important release rule:

- keep it clearly marked as **in development**
- do not add a public download CTA yet
- use screenshots and capability framing when marketing assets are ready

## Visual direction

The site should feel calm, Apple-native, and a little more premium than a generic SaaS page:

- light blue-tinted background with white surfaces and a deep navy hero (tokens in `src/app/globals.css`)
- a single blue accent with sky-blue highlights
- rounded cards and panels with soft shadows
- the system font stack (SF Pro on Apple devices) with a strong headline rhythm
- real device screenshots where available, clearly marked placeholders where not
- free-licensed (CC0) lifestyle photos of families and children's rooms, so the site shows the app in a real home; every photo is listed in `docs/image-credits.md`
- motion that respects `prefers-reduced-motion`

## Release engineering requirements

The site is a fully static export (`output: "export"`) published on GitHub Pages
through `.github/workflows/deploy.yml`. It replaced the earlier Docker/Traefik
release path.

- every push to `main` builds and deploys the site
- site and legal configuration is read from GitHub Actions variables at build time
- the custom domain is defined by `public/CNAME`

See `deployment_workflow.md` for the setup and release steps.

## Near-term next steps

Done:

- brand name (`vselas Apps`) and domain (`www.vselas.de`)
- static export and GitHub Pages deployment
- German legal pages (Impressum, Datenschutz)
- RoomTone product page, screenshots, and help center

Next:

1. Replace the RoomTone App Store placeholder badge with the real App Store link once the app is published, and change its status from "Coming soon".
2. Add real release links for Easy Control once App Store and HACS/GitHub targets are confirmed, then enable `ENABLE_EASY_CONTROL`.
3. Gather screenshots for Easy Control and HomeControl+, especially HomeControl+ dashboards and camera views.
4. Keep HomeControl+ framed as an upcoming app until a beta or release plan exists.

## Future product rules

To keep the site coherent as more apps arrive:

- every product gets a catalogue card and a detail page
- every product has its own `ENABLE_*` flag, mirrored in `src/lib/feature-flags.ts`, `scripts/prune-unreleased.mjs`, `.env.example`, and the deploy workflow
- every product uses the same structured content data
- multi-part products can attach multiple modules under one slug
- release infrastructure remains shared across the entire site
- shipped apps and in-development apps must be able to coexist without misleading CTAs
