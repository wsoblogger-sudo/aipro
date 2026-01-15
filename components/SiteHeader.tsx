import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide text-white">
          Automated Income Suite
        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-200">
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/plans" className="hover:text-white">
            Manual Plans
          </Link>
          <Link href="/dashboard" className="hover:text-white">
            Access Dashboard
          </Link>
          <Link
            href="/account/login"
            className="rounded-md bg-white/10 px-3 py-1.5 hover:bg-white/15"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
