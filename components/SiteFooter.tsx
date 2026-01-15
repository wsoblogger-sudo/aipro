import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="glass-surface rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">AIPROFITGEN</div>
            <div className="mt-2 text-xs leading-5 text-zinc-400">
              Automated Money Making Software
            </div>
            <div className="mt-4 text-xs text-zinc-300">Demo / Simulation Preview Only</div>
          </div>

          <div className="glass-surface rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">Sitemap</div>
            <div className="mt-4 grid gap-2 text-sm text-zinc-300">
              <Link href="/products" className="hover:text-white">
                Products Overview
              </Link>
              <Link href="/pricing" className="hover:text-white">
                Pricing
              </Link>
              <Link href="/dashboard" className="hover:text-white">
                Dashboard
              </Link>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div className="glass-surface rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">Trust</div>
            <div className="mt-4 grid gap-2 text-sm text-zinc-300">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="hover:text-white">
                Refund Policy
              </Link>
            </div>
          </div>

          <div className="glass-surface rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">Social</div>
            <div className="mt-4 grid gap-2 text-sm text-zinc-300">
              <a
                href="https://wa.me/?text=I%20want%20to%20learn%20more%20about%20AIPROFITGEN%20%E2%80%94%20Automated%20Money%20Making%20Software"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
              <a href="mailto:support@aiprofitgen.com" className="hover:text-white">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-zinc-500">
          Frontend-only demo. No backend. No guaranteed earnings.
        </div>
      </div>
    </footer>
  );
}
