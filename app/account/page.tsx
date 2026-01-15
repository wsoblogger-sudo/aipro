import type { Metadata } from "next";
import Link from "next/link";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Account — Create Login Access | Automated Income Suite",
  description:
    "Create a mock account and login via localStorage to access an AI trading software dashboard, crypto money making previews, automated income simulations, and billing history.",
  path: "/account",
});

export default function AccountPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
        <h1 className="text-3xl font-semibold text-white">Account System</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
          Frontend-only account system: Create Account (mock), Login (localStorage),
          tool selection, locked dashboard cards, license keys, and unified billing
          history.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/account/register"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Create Account
          </Link>
          <Link
            href="/account/login"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Login
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Access Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
