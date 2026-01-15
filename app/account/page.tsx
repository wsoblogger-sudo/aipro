import type { Metadata } from "next";
import Link from "next/link";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Account — AIProfitGen",
  description:
    "Create an account and login to access the customer dashboard, licenses, and billing history. Demo / Simulation Preview Only.",
  path: "/account",
});

export default function AccountPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="glass-surface neon-outline rounded-3xl p-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Account</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-200">
          Login/register and unlock the dashboard preview.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/account/register"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Create Account
          </Link>
          <Link
            href="/account/login"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Login
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
