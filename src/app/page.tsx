import { ContactActions } from "@/components/contact-actions";
import { ResumeDisplay } from "@/components/resume-display";
import { ShareResumeButton } from "@/components/share-resume-button";
import { contact } from "@/lib/contact";

export default function Home() {
  return (
    <div className="page-shell">
      <main className="page-main">
        <header className="intro">
          <p className="intro__name">{contact.fullName}</p>
          <p className="intro__title">{contact.title}</p>
          <p className="intro__statement">{contact.supportingStatement}</p>
        </header>

        <ContactActions />

        <ResumeDisplay />

        <section className="bottom-actions" aria-label="Resume actions">
          <a
            href={contact.phoneHref}
            className="action-btn action-btn--primary"
            aria-label="Call Dexter"
          >
            <PhoneIcon />
            <span>Call Dexter</span>
          </a>
          <a
            href={contact.emailHref}
            className="action-btn action-btn--primary"
            aria-label="Email Dexter"
          >
            <EmailIcon />
            <span>Email Dexter</span>
          </a>
          <ShareResumeButton />
          <a
            href={contact.vcfPath}
            className="action-btn action-btn--secondary"
            download="dexter-l-coleman-jr.vcf"
            aria-label="Save contact as vCard"
          >
            <SaveIcon />
            <span>Save Contact</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {contact.fullName}
        </p>
      </footer>
    </div>
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

function SaveIcon() {
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
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}
