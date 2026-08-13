import type { Metadata, Viewport } from "next";
import { contact } from "@/lib/contact";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dexcole220.com"),
  title: "Coming Soon | Dexter L. Coleman Jr.",
  description:
    "dexcole220.com is being refreshed. A new professional presence for Dexter L. Coleman Jr., Music Director, is coming soon.",
  alternates: {
    canonical: "https://dexcole220.com",
  },
  openGraph: {
    type: "website",
    url: "https://dexcole220.com",
    title: "Coming Soon | Dexter L. Coleman Jr.",
    description:
      "A new professional presence for Dexter L. Coleman Jr. is coming soon.",
    siteName: "Dexter L. Coleman Jr.",
    images: [
      {
        url: contact.photoImagePath,
        width: contact.photoImageWidth,
        height: contact.photoImageHeight,
        alt: `${contact.fullName} professional portrait`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon | Dexter L. Coleman Jr.",
    description:
      "A new professional presence for Dexter L. Coleman Jr. is coming soon.",
    images: [contact.photoImagePath],
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
