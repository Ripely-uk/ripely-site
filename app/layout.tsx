import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ripely — soft-fruit operations, integrated",
  description:
    "Ripely builds the software that moves labour and fruit around a large berry operation. Starting with picker transport, growing into the data layer that ties your season together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {/* Shared logo mark, defined once, reused via <use> across the site */}
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A8CE3C" />
              <stop offset="100%" stopColor="#3FA24B" />
            </linearGradient>
            <symbol id="ripely-mark" viewBox="0 0 120 108">
              <path
                d="M60 82 C 38 88, 18 78, 13 55 C 30 52, 47 60, 60 82 Z"
                fill="url(#leafGrad)"
                opacity="0.92"
              />
              <path
                d="M60 82 C 82 88, 102 78, 107 55 C 90 52, 73 60, 60 82 Z"
                fill="url(#leafGrad)"
                opacity="0.78"
              />
              <path
                d="M60 8 C 74 32, 76 58, 60 84 C 44 58, 46 32, 60 8 Z"
                fill="url(#leafGrad)"
              />
              <path
                d="M60 22 L60 78 M60 40 L50 48 M60 40 L70 48 M60 56 L52 62 M60 56 L68 62"
                stroke="#0E3A2B"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
                opacity="0.55"
              />
            </symbol>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
