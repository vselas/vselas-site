export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  title: string;
  items: FaqItem[];
};

export const siteFaq: FaqGroup[] = [
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
