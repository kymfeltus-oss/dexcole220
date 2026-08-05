import type { Metadata, Viewport } from "next";
import { contact } from "@/lib/contact";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dexcole220.com"),
  title: "Dexter L. Coleman Jr. | Music Director",
  description:
    "Professional resume and music ministry profile for Dexter L. Coleman Jr., an accomplished music director and Hammond organist based in the Dallas Fort Worth Metroplex.",
  alternates: {
    canonical: "https://dexcole220.com",
  },
  openGraph: {
    type: "website",
    url: "https://dexcole220.com",
    title: "Dexter L. Coleman Jr. | Music Director",
    description:
      "View the professional music ministry resume of Dexter L. Coleman Jr.",
    siteName: "Dexter L. Coleman Jr.",
    images: [
      {
        url: contact.resumeImagePath,
        width: contact.resumeImageWidth,
        height: contact.resumeImageHeight,
        alt: `${contact.fullName} professional resume`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dexter L. Coleman Jr. | Music Director",
    description:
      "View the professional music ministry resume of Dexter L. Coleman Jr.",
    images: [contact.resumeImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0612",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
