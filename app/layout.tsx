import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ParallaxVars from "@/components/ParallaxVars";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import BackToTop from "@/components/ui/BackToTop";
import FloatingActions from "@/components/ui/FloatingActions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AIPROFITGEN — Automated Money Making Software",
    template: "%s",
  },
  description:
    "AIPROFITGEN — Automated Money Making Software. Premium AI-centric UI/UX with simulated dashboards, pricing widgets, and license workflows.",
  keywords: [
    "crypto money making",
    "automated income",
    "AI trading software",
    "make money online",
  ],
  openGraph: {
    title: "AIPROFITGEN — Automated Money Making Software",
    description:
      "Premium AI-centric UI/UX with simulated dashboards, pricing widgets, and license workflows.",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "AIPROFITGEN",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 text-zinc-100 antialiased`}
      >
        <ParallaxVars />

        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />

        <FloatingActions />
        <BackToTop />
      </body>
    </html>
  );
}
