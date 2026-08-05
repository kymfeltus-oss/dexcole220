import Image from "next/image";
import { existsSync } from "fs";
import path from "path";
import { contact } from "@/lib/contact";

export function ResumeDisplay() {
  const resumeFilePath = path.join(
    process.cwd(),
    "public",
    "images",
    "dexter-coleman-resume.png",
  );
  const hasResume = existsSync(resumeFilePath);

  if (!hasResume) {
    return (
      <div className="resume-missing" role="status">
        <p className="resume-missing__title">Resume image not found</p>
        <p className="resume-missing__body">
          Place the approved full-resolution resume image at{" "}
          <code>public/images/dexter-coleman-resume.png</code> and refresh this
          page.
        </p>
      </div>
    );
  }

  return (
    <figure className="resume-frame">
      <div className="resume-spotlight" aria-hidden="true" />
      <Image
        src={contact.resumeImagePath}
        alt={`Professional resume for ${contact.fullName}, ${contact.title}`}
        width={contact.resumeImageWidth}
        height={contact.resumeImageHeight}
        className="resume-image"
        priority
        unoptimized
        sizes="(max-width: 1100px) 100vw, 1020px"
      />
      <figcaption className="sr-only">
        Full professional resume for {contact.fullName}
      </figcaption>
    </figure>
  );
}
