import type { Metadata } from "next";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import { ARTICLES, TESTIMONIALS } from "@/lib/content";
import { createSeoMetadata } from "@/lib/seo";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = createSeoMetadata({
  title: "Products Overview — AIPROFITGEN",
  description:
    "Explore AIPROFITGEN software products with premium AI-centric UI/UX, interactive previews, licensing flows, and pricing integrations. Demo / Simulation Preview Only.",
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
          Explore every tool as a premium, AI-centric product experience.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/pricing"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Pricing
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Dashboard
          </Link>
          <Link
            href="/account/register"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Create Account
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <div className="scene-3d grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TOOLS.map((tool) => (
            <div key={tool.id} className="flex flex-col gap-3">
              <ToolCard tool={tool} />
              <Link
                href={`/products/${tool.id}`}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                View product page
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <TestimonialsCarousel testimonials={TESTIMONIALS} />
      </section>

      <section className="mt-12 glass-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold text-white">Knowledge Base</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Searchable articles and interactive FAQ are available in the blog.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {ARTICLES.map((a) => (
            <div key={a.id} className="glass-surface rounded-3xl p-6">
              <div className="text-sm font-semibold text-white">{a.title}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-300">
                {a.summary}
              </div>
              <div className="mt-4 text-xs text-zinc-400">
                {a.tags.join(" · ")}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/blog"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Open Blog / Knowledge Base
          </Link>
        </div>
      </section>
    </div>
  );
}
