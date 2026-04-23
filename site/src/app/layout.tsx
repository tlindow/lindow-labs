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
    "A hands-on shop in San Diego for software engineers, IT technologists, and the curious. Solder, print, retrofit, and build hardware alongside people who already shipped today.",
  openGraph: {
    title: "The Tinker Hub — San Diego maker space for tech",
    description:
      "Where engineers become tinkers. A San Diego workshop for software and IT professionals who want the other half of the craft.",
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
