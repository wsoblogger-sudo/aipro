import type { Metadata } from "next";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import { TESTIMONIALS } from "@/lib/content";
import { createSeoMetadata } from "@/lib/seo";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = createSeoMetadata({
  title: "Products Overview — AIPROFITGEN",
  description:
    "Explore all AIProfitGen software products with futuristic UI, interactive previews, and pricing pages. Demo / Simulation Preview Only.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <section className="glass-surface neon-outline rounded-3xl p-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Products Overview
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-200">
          Consolidated list of all software with quick links to individual product
          pages.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/pricing"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Buy Software
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Dashboard
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Blog / Knowledge Base
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

      <section className="mt-12">
        <TestimonialsCarousel testimonials={TESTIMONIALS} />
      </section>
    </div>
  );
}
