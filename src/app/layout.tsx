import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikhil Tiwari — Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer who builds healthcare platforms by day and AI developer tools by night — shipping production systems on Azure/AWS while creating open-source tools that give AI agents persistent memory.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
