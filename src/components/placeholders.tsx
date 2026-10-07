export type StoreBadgeKind = "app-store" | "mac-app-store" | "hacs";

type ImagePlaceholderProps = {
  label: string;
  note?: string;
  variant?: "wide" | "phone" | "square";
  tone?: "light" | "dark";
};

export function ImagePlaceholder({
  label,
  note = "Screenshot coming soon",
  variant = "wide",
  tone = "light",
}: ImagePlaceholderProps) {
  const classNames = ["media-placeholder", `media-placeholder--${variant}`];

  if (tone === "dark") {
    classNames.push("media-placeholder--dark");
  }

  return (
    <div aria-label={`Image placeholder: ${label}`} className={classNames.join(" ")} role="img">
      <span className="media-placeholder__tag">Placeholder</span>
      <svg
        aria-hidden="true"
        className="media-placeholder__icon"
        fill="none"
        height="30"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
        width="30"
      >
        <rect height="14" rx="3" width="18" x="3" y="6" />
        <circle cx="12" cy="13" r="3.4" />
        <path d="M9 6l1.2-2h3.6L15 6" />
      </svg>
      <strong className="media-placeholder__label">{label}</strong>
      <span className="media-placeholder__note">{note}</span>
    </div>
  );
}

const storeBadgeCopy: Record<StoreBadgeKind, { eyebrow: string; name: string }> = {
  "app-store": { eyebrow: "Download on the", name: "App Store" },
  "mac-app-store": { eyebrow: "Download on the", name: "Mac App Store" },
  hacs: { eyebrow: "Install via", name: "HACS · Home Assistant" },
};

export function StoreBadgePlaceholder({ store }: { store: StoreBadgeKind }) {
  const copy = storeBadgeCopy[store];

  return (
    <span className="store-badge" title="Download link coming soon">
      <span aria-hidden="true" className="store-badge__icon">
        {store === "hacs" ? (
          <svg
            fill="none"
            height="18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
            width="18"
          >
            <path d="M3 11.5L12 4l9 7.5" />
            <path d="M5.5 10v9h13v-9" />
          </svg>
        ) : (
          <svg
            fill="none"
            height="18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
            width="18"
          >
            <path d="M12 3v10m0 0l-4-4m4 4l4-4" />
            <path d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
          </svg>
        )}
      </span>
      <span className="store-badge__text">
        <small>{copy.eyebrow}</small>
        <strong>{copy.name}</strong>
      </span>
      <em className="store-badge__soon">Link coming soon</em>
    </span>
  );
}
