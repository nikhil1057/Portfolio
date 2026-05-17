import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikhil Tiwari — Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer who builds healthcare platforms by day and AI developer tools by night — shipping production systems on Azure/AWS while creating open-source tools that give AI agents persistent memory.",
  openGraph: {
    title: "Nikhil Tiwari — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer who builds healthcare platforms by day and AI developer tools by night.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Tiwari — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer who builds healthcare platforms by day and AI developer tools by night.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
