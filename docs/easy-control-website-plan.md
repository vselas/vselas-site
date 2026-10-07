# Product Website Plan

## Goal

Create a polished Next.js product site that can present multiple apps over time, while giving each product an honest release posture:

- **Easy Control for Home Assistant** as the launch-ready public story
- **HomeControl+** as the upcoming macOS flagship that is still in development

## Portfolio research summary

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
- it is already the best candidate for the first public launch story

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

- it gives the site a second, complementary product story
- it shifts the portfolio from “one guest-access app” to “guest access plus resident control center”
- it should be shown publicly as **in development**, not as a published app

## Site strategy

### Portfolio positioning

The product family becomes clearer when the roles stay distinct:

- **Easy Control**: guest access without shared accounts
- **HomeControl+**: the owner-facing smart-home cockpit on macOS

That means the site should present:

- one launch-ready product with download-oriented messaging
- one in-development product with preview-oriented messaging
- room for future iOS, macOS, and Home Assistant tools without redesign

### Information architecture

The current structure still works well:

- `/`
  - product-family landing page
  - launch-ready feature emphasis on Easy Control
  - clear signal that HomeControl+ is coming next
- `/apps`
  - reusable catalogue for shipped and in-development products
- `/apps/easy-control`
  - full public product story
- `/apps/homecontrol-plus`
  - preview page with strong capability framing but no public download pressure

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
- FAQ

This now clearly fits both products:

- Easy Control uses modules to express app + integration
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

The first implementation should feel intentional and a little more premium than a generic SaaS page:

- warm neutral background instead of flat white
- orange, teal, and lime accents to suggest smart-home energy without drifting into generic blue-purple gradients
- rounded glass-like panels for product cards
- large expressive typography with a strong headline rhythm
- animated hero panels that still respect reduced motion

## Release engineering requirements

The site is a fully static export (`output: "export"`) published on GitHub Pages
through `.github/workflows/deploy.yml`. It replaced the earlier Docker/Traefik
release path.

- every push to `main` builds and deploys the site
- site and legal configuration is read from GitHub Actions variables at build time
- the custom domain is defined by `public/CNAME`

See `deployment_workflow.md` for the setup and release steps.

## Near-term next steps

1. Install dependencies and run `lint` and `build`.
2. Decide the public brand name and final domain.
3. Add real release links for Easy Control once App Store and HACS/GitHub targets are confirmed.
4. Gather screenshots or renders for both products, especially HomeControl+ dashboards and camera views.
5. Keep HomeControl+ framed as an upcoming app until a beta or release plan exists.
6. Add legal pages when the final company or personal publisher information is ready.

## Future product rules

To keep the site coherent as more apps arrive:

- every product gets a catalogue card and a detail page
- every product uses the same structured content data
- multi-part products can attach multiple modules under one slug
- release infrastructure remains shared across the entire site
- shipped apps and in-development apps must be able to coexist without misleading CTAs
