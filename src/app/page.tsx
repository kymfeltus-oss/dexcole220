import { HeroPhoto } from "@/components/hero-photo";
import { contact } from "@/lib/contact";

export default function Home() {
  return (
    <div className="page-shell coming-soon-shell">
      <main className="page-main coming-soon-main">
        <header className="intro coming-soon-intro">
          <p className="intro__brand">{contact.brand}</p>
          <HeroPhoto />
          <p className="intro__name">{contact.fullName}</p>
          <p className="intro__title">{contact.title}</p>
          <p className="coming-soon__eyebrow">Coming Soon</p>
          <h1 className="coming-soon__headline">A new experience is on the way</h1>
          <p className="intro__statement coming-soon__copy">
            Thank you for visiting dexcole220.com. This site is being refreshed
            and will return shortly with an updated professional presence.
          </p>
        </header>

        <nav aria-label="Contact options" className="contact-actions">
          <a
            href={contact.emailHref}
            className="action-btn action-btn--primary"
            aria-label="Email Dexter"
          >
            <EmailIcon />
            <span>Email Dexter</span>
          </a>
          <a
            href={contact.instagram}
            className="action-btn action-btn--secondary"
            aria-label="Instagram (opens in a new tab)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
        </nav>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {contact.fullName}
        </p>
      </footer>
    </div>
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
