import type { Metadata } from "next";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { createSeoMetadata } from "@/lib/seo";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = createSeoMetadata({
  title: "Pricing — AIProfitGen",
  description:
    "Pricing hub with crypto widget checkout integrations, manual plan pages, and conversion-focused CTAs.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <section className="glass-surface neon-outline rounded-3xl p-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Pricing</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-200">
          Choose your software access path. Crypto widget checkout is embedded for
          select products.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/account/register"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Create Account
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Dashboard
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <div className="scene-3d grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-12 glass-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold text-white">Need manual plans?</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Manual plan pages are available for specific products.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/plans"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            View Manual Plans
          </Link>
        </div>
      </section>
    </div>
  );
}
