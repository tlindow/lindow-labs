import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Tinker Hub — San Diego maker space for tech",
  description:
    "A hands-on shop in San Diego for engineers and IT technologists who want to build for themselves. The other bench — no ticket, no standup, no user story. Just your project.",
  openGraph: {
    title: "The Tinker Hub — San Diego maker space for tech",
    description:
      "Where engineers become tinkerers. A San Diego workshop for people who spend their day building for someone else — and want a bench where the project is theirs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
