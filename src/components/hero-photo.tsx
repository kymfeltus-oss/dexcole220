import Image from "next/image";
import { existsSync } from "fs";
import path from "path";
import { contact } from "@/lib/contact";

export function HeroPhoto() {
  const photoFilePath = path.join(
    process.cwd(),
    "public",
    "images",
    "dexter-coleman-original.jpg",
  );
  const hasPhoto = existsSync(photoFilePath);

  if (!hasPhoto) {
    return null;
  }

  return (
    <figure className="hero-photo">
      <div className="hero-photo__glow" aria-hidden="true" />
      <Image
        src={contact.photoImagePath}
        alt={`Professional portrait of ${contact.fullName}, ${contact.title}`}
        width={contact.photoImageWidth}
        height={contact.photoImageHeight}
        className="hero-photo__image"
        priority
        sizes="(max-width: 480px) 72vw, (max-width: 768px) 320px, 360px"
      />
    </figure>
  );
}
