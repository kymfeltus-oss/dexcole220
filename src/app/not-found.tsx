import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1>Page Not Found</h1>
      <p>
        The page you requested is unavailable. Return to the resume for Dexter
        L. Coleman Jr.
      </p>
      <Link href="/" className="action-btn action-btn--primary">
        Back to Resume
      </Link>
    </div>
  );
}
