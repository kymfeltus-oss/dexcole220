"use client";

import { useState } from "react";
import { contact } from "@/lib/contact";

export function ShareResumeButton() {
  const [status, setStatus] = useState<"idle" | "shared" | "copied" | "error">(
    "idle",
  );

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : contact.website;
    const shareData = {
      title: `${contact.fullName} | ${contact.title}`,
      text: `View the professional music ministry resume of ${contact.fullName}.`,
      url,
    };

    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share(shareData);
        setStatus("shared");
        window.setTimeout(() => setStatus("idle"), 2000);
        return;
      }

      await navigator.clipboard.writeText(url);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      try {
        await navigator.clipboard.writeText(url);
        setStatus("copied");
        window.setTimeout(() => setStatus("idle"), 2000);
      } catch {
        setStatus("error");
        window.setTimeout(() => setStatus("idle"), 2500);
      }
    }
  }

  const label =
    status === "shared"
      ? "Shared"
      : status === "copied"
        ? "Link Copied"
        : status === "error"
          ? "Unable to Share"
          : "Share Resume";

  return (
    <button
      type="button"
      className="action-btn action-btn--secondary"
      onClick={handleShare}
      aria-label="Share resume"
    >
      <ShareIcon />
      <span>{label}</span>
    </button>
  );
}

function ShareIcon() {
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
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  );
}
