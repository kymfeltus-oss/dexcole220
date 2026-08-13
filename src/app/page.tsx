import { contact } from "@/lib/contact";

export default function Home() {
  return (
    <div className="page-shell coming-soon-shell">
      <main className="page-main coming-soon-main">
        <header className="intro coming-soon-intro">
          <p className="intro__brand">{contact.brand}</p>
          <p className="intro__name">{contact.fullName}</p>
          <p className="intro__title">{contact.title}</p>
          <p className="coming-soon__eyebrow">Coming Soon</p>
          <h1 className="coming-soon__headline">A new experience is on the way</h1>
          <p className="intro__statement coming-soon__copy">
            Thank you for visiting dexcole220.com. This site is being refreshed
            and will return shortly with an updated professional presence.
          </p>
        </header>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {contact.fullName}
        </p>
      </footer>
    </div>
  );
}
