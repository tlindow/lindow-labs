import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyler Lindow — Developer, Builder, Creator",
  description:
    "Personal website of Tyler Lindow. Software developer, creative coder, and lifelong learner building for the web.",
  openGraph: {
    title: "Tyler Lindow — Developer, Builder, Creator",
    description:
      "Software developer, creative coder, and lifelong learner building for the web.",
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
      <body className={`${inter.variable} ${dmSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
