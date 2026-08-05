import { contact } from "@/lib/contact";

const actions = [
  {
    label: "Call",
    href: contact.phoneHref,
    external: false,
    icon: PhoneIcon,
  },
  {
    label: "Email",
    href: contact.emailHref,
    external: false,
    icon: EmailIcon,
  },
  {
    label: "Facebook",
    href: contact.facebook,
    external: true,
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: contact.instagram,
    external: true,
    icon: InstagramIcon,
  },
] as const;

export function ContactActions() {
  return (
    <nav aria-label="Contact actions" className="contact-actions">
      {actions.map(({ label, href, external, icon: Icon }) => (
        <a
          key={label}
          href={href}
          className="action-btn"
          aria-label={
            external ? `${label} (opens in a new tab)` : `${label} Dexter`
          }
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Icon />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.09 15.93 2 14.57 2 11.54 2 9.5 3.82 9.5 7.29V9.5H7v4h2.5V22h4.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}
