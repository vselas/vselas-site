export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  title: string;
  items: FaqItem[];
};

export const easyControlFaq: FaqGroup[] = [
  {
    title: "For guests",
    items: [
      {
        question: "I got a QR code or invite link. What do I do?",
        answer:
          "Install the Easy Control app on your iPhone, then scan the QR code or tap the link. The app pairs with the home in a few seconds and shows you exactly the controls that were shared with you.",
      },
      {
        question: "Do I need a Home Assistant account?",
        answer:
          "No. You never create or log into a Home Assistant account. The pass you received is all you need, and it only unlocks the devices your host selected for you.",
      },
      {
        question: "Why am I asked for Face ID before some actions?",
        answer:
          "Hosts can mark actions like unlocking the front door as sensitive. Your iPhone then asks for Face ID or your passcode first, so an unattended phone cannot open the home.",
      },
      {
        question: "My pairing code does not work anymore.",
        answer:
          "Pairing codes are short-lived on purpose. Ask your host to create a new pass — it takes them under a minute, and you can scan the fresh code right away.",
      },
      {
        question: "What happens when my visit is over?",
        answer:
          "Access simply expires at the time your host chose, or earlier if they revoke it. You do not need to uninstall or clean up anything.",
      },
    ],
  },
  {
    title: "For hosts",
    items: [
      {
        question: "What do I need to get started?",
        answer:
          "A running Home Assistant installation (2024.1 or newer) with the Easy Control integration installed. Your guest only needs an iPhone with the app — they never touch your Home Assistant setup.",
      },
      {
        question: "Which devices can I share?",
        answer:
          "Locks, garage doors and covers, lights, switches, climate controls, and read-only sensors. You pick exact entities, and the allowed actions are derived automatically from each device type.",
      },
      {
        question: "How do I stop access immediately?",
        answer:
          "Revoke a single guest with one action, or use the emergency revoke to invalidate every pass and pairing code at once. Both take effect immediately.",
      },
      {
        question: "Can I approve guests before they get access?",
        answer:
          "Yes. Enable admin approval and a scanned pass stays pending until you confirm it in Home Assistant. You can also make approval the default for every new pass.",
      },
      {
        question: "Does it work when my home is local-only?",
        answer:
          "Yes. Local-only setups are supported, and you can restrict guest access to your home network if that fits your setup.",
      },
    ],
  },
  {
    title: "General",
    items: [
      {
        question: "Is there an Android app for guests?",
        answer:
          "Not at the moment. The guest app is built natively for iPhone, so guests currently need an iPhone to pair with a pass.",
      },
      {
        question: "Where do I get help if something does not work?",
        answer:
          "Use the email support option in the support section on this page. Describe what you tried and what you expected — screenshots help a lot.",
      },
      {
        question: "How is my data handled?",
        answer:
          "Easy Control is designed so access stays between the guest's iPhone and your Home Assistant. The details are documented in the privacy policy linked in the footer.",
      },
    ],
  },
];

export const roomToneFaq: FaqGroup[] = [
  {
    title: "Getting started",
    items: [
      {
        question: "What do I need to use RoomTone?",
        answer:
          "Sonos speakers on the current Sonos software (S2), and an iPhone or iPad with iOS or iPadOS 18 or later on the same Wi-Fi as the speakers.",
      },
      {
        question: "How do I set up RoomTone?",
        answer:
          "Open RoomTone on your child's device and choose “Set up”. Choose a parental PIN, allow access to the local network so RoomTone finds the speakers, and choose the speakers your child may control. Music comes from your Sonos favorites and Sonos playlists, so save what your child may listen to as a favorite or playlist in the Sonos app.",
      },
      {
        question: "How does my child get every episode of a series?",
        answer:
          "Many labels keep playlists with every episode of a series on Spotify and Apple Music. Save such a playlist once as a favorite in the Sonos app; new episodes are added by themselves. RoomTone recognizes the series and offers “Next episode” in the player. Every episode starts from the beginning, its chapters in order. The first time, the speaker needs a while to load thousands of tracks.",
      },
      {
        question: "My child can't find something.",
        answer:
          "RoomTone searches your Sonos favorites and Sonos playlists. Turn on “Search Apple Music” or “Search Spotify” in the parental settings, or both, and your child also finds albums, songs, artists and playlists there (in Apple Music also stations); with both on, your child picks where to search. They play with the account of your Sonos system. For Spotify, sign in once with an account your Sonos system has, for example your child's; RoomTone then plays with exactly that account. Explicit songs and albums, playlists and stations only show if you allow them.",
      },
    ],
  },
  {
    title: "For parents",
    items: [
      {
        question: "How do I hide my own playlists?",
        answer:
          "In the parental settings under “What your child sees”, you hide single favorites and playlists. Your child sees everything else, also what's added later.",
      },
      {
        question: "What happens at bedtime?",
        answer:
          "During the time you set, your child can only pause, turn the volume down and start the sleep favorites you chose, with a timer.",
      },
      {
        question: "Why do other rooms keep playing?",
        answer:
          "When your child plays something of their own, RoomTone takes their room out of a group and leaves the other rooms alone. You agree to this during setup.",
      },
      {
        question: "How do I keep my child in RoomTone?",
        answer:
          "On a wall tablet: turn on kiosk mode in the parental settings and use Guided Access (Settings › Accessibility). On your child's own device, iOS Screen Time helps, for example to prevent deleting apps or to block the Sonos app.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      {
        question: "RoomTone says the device isn't at home.",
        answer:
          "Check that the device is on your home Wi-Fi, and allow “Local Network” in Settings › Apps › RoomTone.",
      },
      {
        question: "I forgot the PIN.",
        answer:
          "Delete RoomTone and install it again; then set everything up again. So that a child can't do the same, set “Deleting Apps: Don't Allow” in Screen Time. If you forget the PIN, allow it for a moment with your Screen Time passcode.",
      },
    ],
  },
];
