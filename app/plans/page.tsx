import type { Metadata } from "next";
import ToolCard from "@/components/ToolCard";
import { createSeoMetadata } from "@/lib/seo";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = createSeoMetadata({
  title: "Manual Plans — Text-Only Pricing | Automated Income Suite",
  description:
    "Manual plan pages with text-only pricing. View arbitrage trading robot plans and banking botnet plan lineup. AI trading software SEO with crypto money making keywords.",
  path: "/plans",
});

export default function PlansPage() {
  const manualTools = TOOLS.filter((t) => t.pricing === "manual");

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
        <h1 className="text-3xl font-semibold text-white">Manual Plans</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">
          Text-only, no automation. Plan details are shown exactly on each page.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {manualTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
