/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    default: "AIPROFITGEN — Premium AI Fintech Automation Suite",
    template: "%s — AIPROFITGEN",
  },
  description:
    "AIPROFITGEN is a premium AI fintech SaaS ecosystem with automation software tools designed to help users operate data-driven workflows with clarity and control.",
  metadataBase: new URL("https://aiprofitgen.com"),
  openGraph: {
    title: "AIPROFITGEN — Premium AI Fintech Automation Suite",
    description:
      "Explore a premium AI fintech software suite with professional UX, trust-first messaging, and automation-focused tools.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function SiteHeader() {
  return (
    <header className="site-header glass">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="AIPROFITGEN Home">
          <span className="brand-mark" aria-hidden="true">
            AI
          </span>
          <span className="brand-name">AIPROFITGEN</span>
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a className="nav-link" href="/">
            Home
          </a>

          <details className="nav-dropdown">
            <summary className="nav-link">Software Suite</summary>
            <div className="dropdown-panel glass-strong" role="menu">
              <a role="menuitem" href="/software/cashflow-tools">
                Cashflow Tools
              </a>
              <a role="menuitem" href="/software/usdtrex-pro">
                USDTRex Pro
              </a>
              <a role="menuitem" href="/software/ethercraft-pro">
                Ethercraft Pro
              </a>
              <a role="menuitem" href="/software/banking-botnet">
                Banking BotNet
              </a>
              <a role="menuitem" href="/software/arbitrage-robot">
                Arbitrage Trading Robot
              </a>
              <a role="menuitem" href="/software/aiprofitgen-x">
                AiProfitgen X
              </a>
            </div>
          </details>

          <a className="nav-link" href="/affiliate">
            Affiliate Program
          </a>
          <a className="nav-link" href="/faq">
            FAQ
          </a>
          <a className="nav-link" href="/about">
            About
          </a>
          <a className="nav-link" href="/contact">
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <details className="mobile-nav">
            <summary className="icon-button" aria-label="Open menu" title="Menu">
              <span aria-hidden="true">☰</span>
            </summary>
            <div className="mobile-nav-panel glass-strong" role="menu">
              <a role="menuitem" href="/">Home</a>
              <a role="menuitem" href="/software/aiprofitgen-x">Software Suite</a>
              <a role="menuitem" href="/affiliate">Affiliate Program</a>
              <a role="menuitem" href="/faq">FAQ</a>
              <a role="menuitem" href="/about">About</a>
              <a role="menuitem" href="/contact">Contact</a>
              <a role="menuitem" href="/login">Login</a>
              <a role="menuitem" href="/create-account">Create Account</a>
            </div>
          </details>

          <button
            id="theme-toggle"
            className="icon-button"
            type="button"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <span aria-hidden="true">◐</span>
          </button>
          <a className="button button-secondary" href="/login">
            Login
          </a>
          <a
            className="button button-primary animate-pulse-glow"
            href="/create-account"
          >
            Create Account
          </a>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden="true">
              AI
            </span>
            <span className="brand-name">AIPROFITGEN</span>
          </div>
          <p className="muted">
            Premium AI fintech automation tools built with a trust-first approach.
          </p>
        </div>

        <div>
          <h3 className="footer-title">Platform</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/affiliate">Affiliate Program</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Software Suite</h3>
          <ul className="footer-links">
            <li>
              <a href="/software/cashflow-tools">Cashflow Tools</a>
            </li>
            <li>
              <a href="/software/usdtrex-pro">USDTRex Pro</a>
            </li>
            <li>
              <a href="/software/ethercraft-pro">Ethercraft Pro</a>
            </li>
            <li>
              <a href="/software/banking-botnet">Banking BotNet</a>
            </li>
            <li>
              <a href="/software/arbitrage-robot">Arbitrage Trading Robot</a>
            </li>
            <li>
              <a href="/software/aiprofitgen-x">AiProfitgen X</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Legal</h3>
          <ul className="footer-links">
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/disclaimer">Disclaimer / Risk Notice</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="muted">
          © {new Date().getFullYear()} AIPROFITGEN. All rights reserved.
        </p>
        <p className="muted small">
          No guarantees of outcomes. Software-based automation tools only. Users
          are responsible for decisions and results.
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){
  try {
    var stored = localStorage.getItem('aipg-theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : null;
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var effective = theme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', effective);
  } catch (e) {}
})();`}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="page-shell bg-gradient-dark">
          <SiteHeader />
          <main className="site-main">{children}</main>
          <SiteFooter />
        </div>

        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
