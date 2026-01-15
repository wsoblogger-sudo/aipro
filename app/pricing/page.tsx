import type { Metadata } from "next";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { createSeoMetadata } from "@/lib/seo";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = createSeoMetadata({
  title: "Pricing — Unlock AI Trading Software | Automated Income",
  description:
    "Pricing hub for crypto money making tools. Unlock AI trading software dashboards via embedded pricing widgets, automated income simulations, and license tracking.",
  path: "/pricing",
});

export default function PricingPage() {
  const widgetTools = TOOLS.filter((t) => t.pricing === "widget");

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
        <h1 className="text-3xl font-semibold text-white">Pricing (Strict)</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">
          Embedded pricing integrations using the exact widget scripts provided.
          Use payment success simulation to unlock AI software access in your
          dashboard.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/account/register"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Start Automated Income
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Access Dashboard
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {widgetTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">
        <h2 className="text-lg font-semibold text-white">Need manual plans?</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Some tools are listed as manual plan lineups with text-only pricing.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/plans"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            View Manual Plans
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            View Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
