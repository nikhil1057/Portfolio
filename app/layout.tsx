import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikhil Tiwari — Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer who builds healthcare platforms by day and AI developer tools by night.",
  openGraph: {
    title: "Nikhil Tiwari — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer who builds healthcare platforms by day and AI developer tools by night.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="crt-vignette grid-bg">{children}</body>
    </html>
  );
}
