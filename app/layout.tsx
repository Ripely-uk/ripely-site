import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ripely.uk"),
  title: "Ripely — farm data, joined up",
  description:
    "Berry growers run on software that doesn't talk to itself. Ripely joins your farm's data — labour, transport, yield, quality — into one place and puts modern AI to work on it, so your team spends its time on the fruit, not the spreadsheets.",
  openGraph: {
    title: "Ripely — farm data, joined up",
    description:
      "We join up the farm software you already run and put modern AI to work on it, starting with picker transport.",
    url: "https://ripely.uk",
    siteName: "Ripely",
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E3A2B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
