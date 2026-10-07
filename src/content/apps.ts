import type { StoreBadgeKind } from "@/components/placeholders";
import type { FeatureFlagName } from "@/lib/feature-flags";
import { getFeatureFlags } from "@/lib/feature-flags";

export type ProductModule = {
  name: string;
  role: string;
  summary: string;
  bullets: string[];
  asset: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type StoryStep = {
  title: string;
  description: string;
};

export type FeatureGroup = {
  title: string;
  intro: string;
  bullets: string[];
};

export type SetupStep = {
  title: string;
  detail: string;
};

export type ProductDownload = {
  label: string;
  description: string;
  href?: string;
  status: string;
  badge?: StoreBadgeKind;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type CompanionGuideStep = {
  title: string;
  detail: string;
  bullets: string[];
};

export type CompanionActionField = {
  name: string;
  required: boolean;
  detail: string;
};

export type CompanionAction = {
  name: string;
  title: string;
  purpose: string;
  fields: CompanionActionField[];
  whatHappens: string[];
  response?: string;
  example: string;
};

export type CompanionEntitySupport = {
  domain: string;
  guestActions: string;
  homeAssistantServices: string;
};

export type CompanionHowTo = {
  eyebrow: string;
  title: string;
  intro: string;
  installSteps: CompanionGuideStep[];
  actions: CompanionAction[];
  supportedEntities: CompanionEntitySupport[];
  screenshotNotes: string[];
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  navLabel?: string;
  tagline: string;
  shortSummary: string;
  longSummary: string;
  status: string;
  featureFlag?: FeatureFlagName;
  platforms: string[];
  audience: string[];
  proofPoints: { label: string; value: string }[];
  heroHighlights: string[];
  modules: ProductModule[];
  story: StoryStep[];
  featureGroups: FeatureGroup[];
  supportedDomains: string[];
  securityHighlights: string[];
  setup: SetupStep[];
  downloads: ProductDownload[];
  futureFit: string[];
  companionHowTo?: CompanionHowTo;
  faq: ProductFaq[];
};

export const products: Product[] = [
  {
    slug: "easy-control",
    name: "Easy Control for Home Assistant",
    navLabel: "Easy Control",
    category: "Guest access",
    tagline: "Scoped guest access for the smart home, without shared accounts.",
    shortSummary:
      "Easy Control lets you share temporary smart-home access with guests through an iPhone app and a simple Home Assistant setup.",
    longSummary:
      "Easy Control turns an awkward smart-home handoff into something simple and clear. You create a pass in Home Assistant, share it as a QR code or email link, and guests pair in seconds on iPhone. They only see the devices and actions you approved, sensitive actions can stay protected with Face ID, and live status helps everyone feel confident during the visit.",
    status: "Available now",
    platforms: ["iPhone", "Home Assistant", "Live status"],
    audience: ["Home owners", "Airbnb hosts", "Family access", "Trusted visitors"],
    proofPoints: [
      { label: "Shared devices", value: "Doors, lights, climate" },
      { label: "Invites", value: "QR code or link" },
      { label: "Access", value: "Expires automatically" },
      { label: "Status", value: "Live in the app" },
    ],
    heroHighlights: [
      "No Home Assistant account for guests",
      "Choose exact devices and actions",
      "Face ID before sensitive actions",
      "Approve new pairings and stop access anytime",
    ],
    modules: [
      {
        name: "iPhone app",
        role: "For guests",
        summary:
          "Guests use the iPhone app to pair quickly, see live status, and control only the things you shared with them.",
        bullets: [
          "Scan a QR code or open an invite link to get started",
          "Use Face ID or the iPhone passcode before sensitive actions",
          "See live status for doors, garage doors, lights, climate, and sensors",
          "Keep access safely stored on the phone while the visit lasts",
        ],
        asset: {
          src: "/apps/easy-control/app-icon.png",
          alt: "HA Easy Control iPhone app icon",
          width: 1024,
          height: 1024,
        },
      },
      {
        name: "Home Assistant",
        role: "For the person sharing access",
        summary:
          "This is where you choose what a guest can use, send the invite, and turn access off again when needed.",
        bullets: [
          "Choose exactly which devices and actions a guest can use",
          "Share access as a QR code or an email link",
          "Approve new pairings when you want an extra check",
          "Revoke access at any time if plans change",
        ],
        asset: {
          src: "/apps/easy-control/integration-icon.png",
          alt: "HA Easy Control Home Assistant integration icon",
          width: 256,
          height: 256,
        },
      },
    ],
    story: [
      {
        title: "Create a guest pass in Home Assistant",
        description:
          "Choose the devices a guest should be able to use, how long access should last, and whether you want to approve the pairing first.",
      },
      {
        title: "Share it as a QR code or email",
        description:
          "Send the access in the way that feels easiest, whether that is a quick QR code at the front door or an email link before the visit.",
      },
      {
        title: "Pair in seconds on iPhone",
        description:
          "Guests scan or tap once, confirm the connection if needed, and arrive directly in a simple app view made just for them.",
      },
      {
        title: "Let guests control only what you approved",
        description:
          "Guests see a small set of clear controls with live status, while sensitive actions stay protected and expired access disappears automatically.",
      },
    ],
    featureGroups: [
      {
        title: "Guest flow that feels effortless",
        intro:
          "The experience should feel natural even for people who have never opened Home Assistant before.",
        bullets: [
          "Fast onboarding with a QR code or a shared link",
          "A focused tile layout instead of a cluttered smart-home dashboard",
          "Clear states for active, pending, expired, or revoked access",
          "A setup that works for visitors, family, and short stays",
        ],
      },
      {
        title: "Safety that feels reassuring, not complicated",
        intro:
          "People care about convenience, but they also want to know the front door and garage are not left open to the wrong person.",
        bullets: [
          "Access can be limited to only the devices you choose",
          "Temporary passes can expire automatically after the visit",
          "Face ID can be required before sensitive actions",
          "Access can be revoked immediately if you need it gone",
        ],
      },
      {
        title: "Useful feedback instead of blind buttons",
        intro:
          "Guests should be able to see what is happening, not just tap and hope for the best.",
        bullets: [
          "Live status for doors, garage doors, lights, switches, climate, and sensors",
          "Read-only sensor information when context helps the guest",
          "Brightness and temperature controls where they make sense",
          "A small, calm interface that is easy to understand at a glance",
        ],
      },
      {
        title: "Easy for the host to manage",
        intro:
          "The person sharing access should stay in control from start to finish.",
        bullets: [
          "Approve pairings when you want one more confirmation step",
          "See what guests are using in Home Assistant",
          "Keep access local to the home network if that fits your setup",
          "Turn off a single guest or everything at once when plans change",
        ],
      },
    ],
    supportedDomains: [
      "Door locks for quick lock and unlock",
      "Garage doors and gates with open, close, and position control",
      "Lights with on, off, and brightness control",
      "Switches for simple on and off control",
      "Climate controls with temperature changes where supported",
      "Sensors and status information for helpful context",
    ],
    securityHighlights: [
      "Access stays limited to the devices you chose",
      "Sensitive actions can ask for Face ID first",
      "Guest access stays tied to the iPhone instead of a shared account",
      "Local-only setups are possible for homes that prefer to stay on the local network",
      "You can shut access off quickly if something changes",
    ],
    setup: [
      {
        title: "Set up Easy Control in Home Assistant",
        detail:
          "Install the integration, choose your default safety settings, and decide whether you want live updates during the visit.",
      },
      {
        title: "Choose what a guest can use",
        detail:
          "Pick the doors, garage, lights, climate controls, and sensors you want to share, then choose how long the access should stay active.",
      },
      {
        title: "Share the invite",
        detail:
          "Send a QR code or link so the guest can open the app and pair in a few seconds without learning anything about Home Assistant.",
      },
      {
        title: "Use it and turn it off again",
        detail:
          "Guests use only the controls you shared, and you can review, approve, or revoke access whenever the visit is over or plans change.",
      },
    ],
    downloads: [
      {
        label: "For the home owner",
        description:
          "Install the Home Assistant part first so you can choose devices, create guest access, and manage invites.",
        status: "Install first",
        badge: "hacs",
      },
      {
        label: "For the guest",
        description:
          "Guests use the iPhone app to pair quickly, see live status, and control only the parts of the home that were shared with them.",
        status: "Open during the visit",
        badge: "app-store",
      },
    ],
    futureFit: [
      "Keep the site architecture app-first so future iOS and macOS products can reuse the same hero, proof point, feature, and download components.",
      "Use Easy Control as the public launch pattern while HomeControl+ matures as the owner-facing companion product.",
      "Model every product as a single slug with optional modules, because Easy Control already proves some products span multiple deliverables.",
      "Make the catalogue page work as a growing index rather than a one-off landing page so later apps feel expected, not bolted on.",
    ],
    companionHowTo: {
      eyebrow: "Home Assistant companion",
      title: "How to set up and manage guest access in Home Assistant.",
      intro:
        "The Home Assistant companion integration is the host side of Easy Control. Use it to install the integration, choose which entities a guest may use, create pairing codes, approve pending pairings, and revoke access again when the visit is over.",
      installSteps: [
        {
          title: "Install the integration",
          detail:
            "Install HA Easy Control through HACS as a custom integration, then restart Home Assistant. You can also install manually by copying the custom_components/easy_control folder into your Home Assistant config.",
          bullets: [
            "HACS path: HACS -> three-dot menu -> Custom repositories -> add dvselas/ha-easy-control-companion as an Integration.",
            "After installation, restart Home Assistant so the custom integration and actions are loaded.",
            "Home Assistant 2024.1 or newer is expected by the integration.",
          ],
        },
        {
          title: "Add HA Easy Control",
          detail:
            "Open Settings -> Devices & Services -> Add Integration, search for HA Easy Control, and complete the setup flow. The integration is designed as a single Home Assistant instance entry.",
          bullets: [
            "The initial setup does not require advanced parameters.",
            "Later changes live under Settings -> Devices & Services -> HA Easy Control -> Configure.",
            "Security options include local-only mode, allowed local CIDRs, device binding, action proof, and default admin approval.",
          ],
        },
        {
          title: "Create the first guest pass",
          detail:
            "Go to Developer Tools -> Actions, select easy_control.create_guest_pass, choose the entities to share, and set a future expiration time. Home Assistant can show a QR notification, and the guest scans it with the iPhone app.",
          bullets: [
            "The pairing code is short-lived, so the guest should scan it soon after you create it.",
            "The guest pass itself remains valid until the expiration time you choose, unless you revoke it earlier.",
            "Supported entities include locks, covers, switches, lights, sensors, binary sensors, and climate entities.",
          ],
        },
        {
          title: "Use approval when you want an extra check",
          detail:
            "Enable admin approval per pass, or make it the default in the integration options. The guest can start pairing, but access remains pending until you approve the pairing code.",
          bullets: [
            "Approve with easy_control.approve_pairing_request when the guest is expected.",
            "Reject with easy_control.reject_pairing_request when the request is unknown or no longer needed.",
            "Expired or unknown pairing codes are rejected by Home Assistant instead of silently succeeding.",
          ],
        },
      ],
      actions: [
        {
          name: "easy_control.create_guest_pass",
          title: "Create a guest pass",
          purpose:
            "Use this when you want to give a guest temporary access to selected Home Assistant entities. It creates a pairing code, a deep-link payload for the iPhone app, and optionally a Home Assistant QR notification or email invite.",
          fields: [
            {
              name: "entities",
              required: true,
              detail:
                "A list of entities the guest may use. Supported domains are lock, cover, switch, light, sensor, binary_sensor, and climate. Allowed actions are inferred automatically from each domain.",
            },
            {
              name: "expiration_time",
              required: true,
              detail:
                "A future date and time for when guest access expires. Home Assistant rejects values in the past.",
            },
            {
              name: "show_qr_notification",
              required: false,
              detail:
                "Defaults to true. When enabled, Home Assistant creates a persistent notification with a QR image link, a clickable QR URL, the fallback pairing code, and the pairing expiry.",
            },
            {
              name: "require_admin_approval",
              required: false,
              detail:
                "When true, the guest pairing stays pending until you approve it. If omitted, the integration uses the default approval setting from its options.",
            },
            {
              name: "email_recipient",
              required: false,
              detail:
                "The guest email address. Use it together with email_notify_service to send the QR code and app link directly by email.",
            },
            {
              name: "email_notify_service",
              required: false,
              detail:
                "The Home Assistant notify service to use for email delivery, for example email for notify.email. Must be provided together with email_recipient.",
            },
            {
              name: "email_guest_name",
              required: false,
              detail:
                "A friendly guest name used to personalize the email greeting.",
            },
          ],
          whatHappens: [
            "The integration validates the selected entity domains and maps them to safe guest actions.",
            "A pairing code is created for the iPhone app, together with QR and deep-link data.",
            "If QR notifications are enabled, Home Assistant shows a persistent notification that the guest can scan.",
            "If email delivery is configured, the guest receives an HTML email with a QR code, app link, entity list, expiry time, and fallback pairing code.",
          ],
          response:
            "The action returns the pairing code, QR string, QR image path, Home Assistant base URL, entity grants, approval status, expiry timestamps, and whether the email was sent.",
          example: `service: easy_control.create_guest_pass
data:
  entities:
    - lock.front_door
    - cover.garage_door
    - light.porch
    - sensor.indoor_temperature
  expiration_time: "2026-07-20 12:00:00"
  show_qr_notification: true
  require_admin_approval: true`,
        },
        {
          name: "easy_control.approve_pairing_request",
          title: "Approve a pending pairing",
          purpose:
            "Use this after a guest scans a pass that requires admin approval. Approval turns a pending pairing request into an approved one so the guest can complete pairing in the iPhone app.",
          fields: [
            {
              name: "pairing_code",
              required: true,
              detail:
                "The pairing code shown in the QR notification or returned by create_guest_pass.",
            },
          ],
          whatHappens: [
            "Home Assistant looks up the active pairing record for the code.",
            "If the code is valid, the request is marked approved and an easy_control.approve_pairing_request event is fired.",
            "A logbook entry is written when the logbook service is available.",
            "Expired or unknown pairing codes return an error, so you know the approval did not apply.",
          ],
          response:
            "The action returns the pairing code, status, decision reason, approved entity grants, approval status, and expiry timestamps.",
          example: `service: easy_control.approve_pairing_request
data:
  pairing_code: "ABC123XYZ0"`,
        },
        {
          name: "easy_control.reject_pairing_request",
          title: "Reject a pending pairing",
          purpose:
            "Use this when a pairing request should not become active, for example because the guest no longer needs access or the request is unexpected.",
          fields: [
            {
              name: "pairing_code",
              required: true,
              detail:
                "The pending pairing code to reject.",
            },
          ],
          whatHappens: [
            "The pairing record is marked rejected instead of approved.",
            "The iPhone app can no longer exchange that code for guest access.",
            "Home Assistant fires an easy_control.reject_pairing_request event and writes a logbook entry when available.",
            "If the code is expired or not found, Home Assistant returns an error.",
          ],
          response:
            "The action returns the pairing code, rejected status, reason, affected entities, and expiry timestamps.",
          example: `service: easy_control.reject_pairing_request
data:
  pairing_code: "ABC123XYZ0"`,
        },
        {
          name: "easy_control.revoke_guest_pass",
          title: "Revoke one guest token or one guest",
          purpose:
            "Use this for targeted cleanup. You can revoke one specific token by jti, or revoke all known tokens for one guest_id.",
          fields: [
            {
              name: "jti",
              required: false,
              detail:
                "The token id to revoke when you want to invalidate one specific issued token.",
            },
            {
              name: "guest_id",
              required: false,
              detail:
                "The guest id to revoke when you want to invalidate all known tokens for that guest.",
            },
          ],
          whatHappens: [
            "Provide either jti or guest_id, not both.",
            "The selected token ids are added to the revoked-token store.",
            "Home Assistant fires an easy_control.revoke_guest_pass event and writes a logbook entry when available.",
            "Already missing token ids simply result in an empty revoked_jtis list, so the response tells you what actually changed.",
          ],
          response:
            "The action returns revoked status, revoked_at, revoked_jtis, and target_guest_id.",
          example: `service: easy_control.revoke_guest_pass
data:
  guest_id: "guest_abc123"`,
        },
        {
          name: "easy_control.revoke_all_guest_pass",
          title: "Emergency revoke everything",
          purpose:
            "Use this when you need to shut down every active guest pass immediately, for example after a mistake, lost phone, or security concern.",
          fields: [],
          whatHappens: [
            "The integration rotates the signing key and increments the token version.",
            "All previously issued guest tokens become invalid.",
            "All active pairing codes are cleared, so old QR codes stop working too.",
            "Home Assistant fires an easy_control.revoke_all_guest_pass event and writes a logbook entry when available.",
          ],
          response:
            "The action returns revoked status, revoked_at, updated_entries, cleared_pairings, and the new token_version.",
          example: `service: easy_control.revoke_all_guest_pass`,
        },
      ],
      supportedEntities: [
        {
          domain: "lock.*",
          guestActions: "Lock and unlock",
          homeAssistantServices: "lock.lock, lock.unlock",
        },
        {
          domain: "cover.*",
          guestActions: "Open, close, set position, set tilt",
          homeAssistantServices:
            "cover.open_cover, cover.close_cover, cover.set_cover_position, cover.set_cover_tilt_position",
        },
        {
          domain: "switch.*",
          guestActions: "Turn on and turn off",
          homeAssistantServices: "switch.turn_on, switch.turn_off",
        },
        {
          domain: "light.*",
          guestActions: "Turn on, turn off, set brightness",
          homeAssistantServices: "light.turn_on, light.turn_off",
        },
        {
          domain: "sensor.*",
          guestActions: "Read state",
          homeAssistantServices: "Read-only state access",
        },
        {
          domain: "binary_sensor.*",
          guestActions: "Read state",
          homeAssistantServices: "Read-only state access",
        },
        {
          domain: "climate.*",
          guestActions: "Read state and set temperature",
          homeAssistantServices: "climate.set_temperature plus read-only state access",
        },
      ],
      screenshotNotes: [
        "HACS custom repository dialog after entering dvselas/ha-easy-control-companion.",
        "HA Easy Control integration options screen, especially security and approval settings.",
        "Developer Tools -> Actions with easy_control.create_guest_pass selected and filled in.",
        "The persistent Home Assistant QR notification shown after creating a pass.",
        "The iPhone app pairing screen after scanning the QR code.",
      ],
    },
    faq: [
      {
        question: "Why is Easy Control better than sharing a Home Assistant account?",
        answer:
          "Because it removes full-dashboard exposure. Guests only receive the entities and actions you explicitly grant, and the pass can expire or be revoked automatically.",
      },
      {
        question: "Does the guest need to understand Home Assistant?",
        answer:
          "No. The experience is intentionally narrow: scan a code, confirm trust if needed, and use a focused set of tiles such as Unlock Door or Open Garage.",
      },
      {
        question: "Can it work in a higher-security setup?",
        answer:
          "Yes. You can keep access temporary, require Face ID for sensitive actions, keep things local to the home network, and revoke access whenever you want.",
      },
      {
        question: "What happens when the visit is over?",
        answer:
          "Access can expire automatically, or you can remove it yourself at any time. Guests do not keep a full Home Assistant account after the visit.",
      },
    ],
  },
  {
    slug: "homecontrol-plus",
    name: "HomeControl+",
    navLabel: "HomeControl+",
    category: "Resident control center",
    featureFlag: "homeControlPlus",
    tagline: "A customizable macOS home cockpit for dashboards, cameras, audio, and more.",
    shortSummary:
      "A native macOS control center that connects Home Assistant, UniFi Protect cameras, camera streaming, Sonos, and travel context into configurable dashboards and live control surfaces.",
    longSummary:
      "HomeControl+ is the owner-facing counterpart to Easy Control. It is a native macOS smart-home command center built around MQTT-backed Home Assistant control, configurable dashboards, live camera views, Sonos playback, and travel context. The codebase already supports an eight-step setup wizard, a configurable sidebar, dashboard cycling, and a deep catalogue of widgets, which makes it a strong future flagship for the site even before public release.",
    status: "In development",
    platforms: ["macOS", "Home Assistant", "MQTT", "UniFi Protect", "Sonos"],
    audience: ["Home owners", "Power users", "Mac-first households", "Wall-display setups"],
    proofPoints: [
      { label: "Widget types", value: "36" },
      { label: "Setup wizard", value: "8 steps" },
      { label: "Sidebar surfaces", value: "4 built-in" },
      { label: "Release state", value: "Private dev" },
    ],
    heroHighlights: [
      "Configurable dashboards with 36 widget types",
      "Home Assistant control over MQTT",
      "Dedicated cameras, doorbell, and Sonos views",
      "Preview it honestly while development continues",
    ],
    modules: [
      {
        name: "macOS app",
        role: "Resident-facing control center",
        summary:
          "The main app brings together device control, media, cameras, and navigation in a native SwiftUI shell designed for everyday household use.",
        bullets: [
          "Native macOS experience with a setup wizard and configurable sidebar navigation",
          "Dedicated views for dashboards, cameras, doorbell, and Sonos",
          "Keychain-backed credential storage for Home Assistant and other connected systems",
          "Backup, restore, and setup rerun support for long-lived installations",
        ],
        asset: {
          src: "/apps/homecontrol-plus/app-icon.png",
          alt: "HomeControl+ macOS app icon",
          width: 1024,
          height: 1024,
        },
      },
      {
        name: "Dashboards and live integrations",
        role: "What turns the app into a whole-home cockpit",
        summary:
          "HomeControl+ is more than a launcher. Its dashboard model, streaming integrations, and sidebar system are the core of the product story.",
        bullets: [
          "Eight-step setup wizard covering MQTT, Home Assistant, UniFi, camera streaming, Sonos, travel, and dashboards",
          "Configurable sidebar items with dashboard cycling for always-on display setups",
          "36 widget types spanning floorplans, weather, energy, alarms, maps, vehicles, switches, covers, and heating",
          "UniFi Protect discovery plus camera streaming paths through Home Assistant and WebRTC-oriented integrations",
        ],
        asset: {
          src: "/apps/homecontrol-plus/surface.png",
          alt: "HomeControl+ dashboard surface artwork",
          width: 1920,
          height: 1080,
        },
      },
    ],
    story: [
      {
        title: "Connect the home's core systems",
        description:
          "The setup wizard starts by wiring MQTT and Home Assistant together, then expands into optional systems like UniFi Protect, camera streaming, Sonos, and travel routes.",
      },
      {
        title: "Shape the sidebar around how the house is used",
        description:
          "Users can define dashboard entries, cameras, Sonos, and doorbell surfaces in the sidebar, then choose whether those views participate in an automatic cycle.",
      },
      {
        title: "Compose dashboards for rooms, floorplans, and status",
        description:
          "The dashboard layer supports weather, energy, alarms, traffic, vehicles, switches, controls, and floorplan overlays, which gives the product a strong future screenshot story.",
      },
      {
        title: "Run a resident control center on the Mac",
        description:
          "Instead of a guest-sized flow, HomeControl+ is meant to stay open and useful: live cameras, media control, room dashboards, and operating context in one place.",
      },
    ],
    featureGroups: [
      {
        title: "A true home cockpit on macOS",
        intro:
          "The strongest framing for HomeControl+ is not 'another smart-home client.' It is a control center designed for daily use by the people who run the house.",
        bullets: [
          "Resident-focused experience rather than a guest or installer utility",
          "Dedicated cameras, Sonos, and doorbell surfaces alongside dashboards",
          "Configurable navigation that can match rooms, routines, or displays",
          "Native SwiftUI app structure ready for a more premium macOS presentation",
        ],
      },
      {
        title: "Dashboards that can actually flex",
        intro:
          "The repo already contains far more dashboard depth than a typical v1 marketing page would suggest, and that should become a major differentiator later.",
        bullets: [
          "36 widget types already defined in the dashboard model",
          "Floorplan image support with overlay-style controls and indicators",
          "Energy, weather, travel, maps, vehicles, alarms, and control widgets in one system",
          "Sidebar cycling and kiosk-friendly patterns for always-on household views",
        ],
      },
      {
        title: "Live integrations across the home",
        intro:
          "HomeControl+ becomes compelling when the website shows how multiple systems come together inside one app, not as isolated feature bullets.",
        bullets: [
          "Home Assistant control via MQTT-backed state and command flows",
          "UniFi Protect camera discovery and doorbell-specific views",
          "Multiple camera streaming paths, including WebRTC-oriented setups",
          "Sonos playback support alongside broader smart-home context",
        ],
      },
      {
        title: "Operational polish already matters",
        intro:
          "Even before public release, the repo shows signs of a product that is being shaped for real household use instead of a one-off experiment.",
        bullets: [
          "Required setup gating for core connections in the wizard",
          "Keychain-backed credentials and dedicated auth/session handling",
          "Backup and restore service inside the macOS app",
          "Active testing, architecture cleanup, and feature expansion in progress",
        ],
      },
    ],
    supportedDomains: [
      "Home Assistant entities and controls over MQTT-backed state updates",
      "UniFi Protect cameras and doorbell experiences",
      "Camera streaming through Home Assistant and WebRTC-oriented integrations",
      "Sonos zones, playback, and favorites",
      "Weather, traffic, travel, vehicles, and energy context in dashboards",
      "Floorplans and control overlays for room-based navigation",
    ],
    securityHighlights: [
      "Keychain-backed storage for Home Assistant and related credentials",
      "Dedicated authentication and session handling for connected systems like UniFi",
      "Setup flow that blocks advancement until core connections are validated",
      "Backup and restore paths for resilient long-term installations",
      "Growing automated test coverage and architecture cleanup around critical services",
    ],
    setup: [
      {
        title: "Start with the setup wizard",
        detail:
          "The current onboarding model already spans welcome, MQTT, Home Assistant, UniFi Protect, camera streaming, Sonos, travel, and dashboard setup.",
      },
      {
        title: "Validate the core control path",
        detail:
          "MQTT and Home Assistant are the mandatory steps, which makes the product story easy to explain: connect the live smart-home backbone first.",
      },
      {
        title: "Layer in media, cameras, and travel context",
        detail:
          "Optional integrations add the richer resident experience: cameras, Sonos control, streaming setup, and commute-aware widgets.",
      },
      {
        title: "Configure dashboards and sidebar behavior",
        detail:
          "Once the systems are connected, users can shape the app around their home through dashboards, sidebar items, and cycling behavior for dedicated displays.",
      },
    ],
    downloads: [
      {
        label: "macOS app",
        description:
          "Keep the page public as a product preview and portfolio signal, but do not present a public download or store CTA yet.",
        status: "Private development builds only",
      },
      {
        label: "Public launch posture",
        description:
          "Use screenshots, architecture credibility, and an honest 'in development' label until the onboarding and dashboard experience are ready for a broader audience.",
        status: "Not published yet",
      },
    ],
    futureFit: [
      "HomeControl+ gives the site a clear owner-facing flagship to pair with Easy Control's guest access story.",
      "Its in-development status lets the catalogue support both shipped products and credible public previews without redesign.",
      "Once screenshots are ready, the current page model can absorb floorplans, camera grids, and dashboard walkthroughs with minimal structural change.",
    ],
    faq: [
      {
        question: "How is HomeControl+ different from Easy Control?",
        answer:
          "Easy Control is a tightly scoped guest-access product. HomeControl+ is the resident-facing control center for the people who actually run the home day to day.",
      },
      {
        question: "Why put HomeControl+ on the site before it is published?",
        answer:
          "Because it already shapes the product family clearly. It tells visitors there is a bigger macOS control story coming, while Easy Control handles the launch-ready guest-access case.",
      },
      {
        question: "What makes the app interesting enough to preview now?",
        answer:
          "The repo already shows a real setup wizard, configurable dashboards, live cameras, Sonos support, and a wide widget model. That is enough substance to present direction without overpromising release timing.",
      },
      {
        question: "Should the site promise every future integration today?",
        answer:
          "No. The safest approach is to describe what the current codebase already supports clearly and keep the release language conservative until the public beta or launch plan is ready.",
      },
    ],
  },
];

export function getProducts() {
  const featureFlags = getFeatureFlags();

  return products.filter((product) =>
    product.featureFlag ? featureFlags[product.featureFlag] : true,
  );
}

export function getProductBySlug(slug: string) {
  return getProducts().find((product) => product.slug === slug);
}
