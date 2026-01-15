import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DemoTerminal from "@/components/DemoTerminal";
import EarningsGraph from "@/components/EarningsGraph";
import WidgetCheckout from "@/components/WidgetCheckout";
import FAQAccordion from "@/components/ui/FAQAccordion";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import { FAQS, TESTIMONIALS } from "@/lib/content";
import { createSeoMetadata } from "@/lib/seo";
import { CASHFLOW_VIDEOS, TOOLS, getTool, isToolId, type ToolId } from "@/lib/tools";

export function generateStaticParams(): { slug: string }[] {
  return TOOLS.map((t) => ({ slug: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug?: string } | Promise<{ slug?: string }>;
}): Promise<Metadata> {
  const resolved = await Promise.resolve(params);
  if (!resolved.slug || !isToolId(resolved.slug)) notFound();
  const tool = getTool(resolved.slug);
  return createSeoMetadata({
    title: `${tool.name} — AIPROFITGEN Software Page`,
    description:
      "Premium AI-centric software page with 3D interface preview, interactive demo, features, pricing, video showcase, testimonials, and CTAs. Demo / Simulation Preview Only.",
    path: `/products/${tool.id}`,
  });
}

function VideoShowcase() {
  return (
    <div className="scene-3d -mx-6 overflow-x-auto px-6 pb-6">
      <div className="flex gap-5 snap-x snap-mandatory">
        {CASHFLOW_VIDEOS.map((v) => (
          <div
            key={v.youtubeId}
            className="device-frame hover-tilt relative w-[min(520px,88vw)] shrink-0 snap-center overflow-hidden rounded-3xl"
          >
            <div className="border-b border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white">
              {v.title}
            </div>
            <div className="relative p-4">
              <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ProductPage({
  params,
}: {
  params: { slug?: string } | Promise<{ slug?: string }>;
}) {
  const resolved = await Promise.resolve(params);
  if (!resolved.slug || !isToolId(resolved.slug)) notFound();
  const tool = getTool(resolved.slug);

  const isWidget = tool.pricing === "widget";

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <section className="scene-3d grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="glass-surface neon-outline hover-tilt relative overflow-hidden rounded-3xl p-10">
          <div aria-hidden className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/12 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <div className="relative flex flex-wrap items-center gap-3">
            <div className="text-xs uppercase tracking-widest text-zinc-400">
              Software
            </div>
            <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-200">
              Demo / Simulation Preview Only
            </div>
          </div>

          <h1 className="relative mt-4 text-4xl font-semibold tracking-tight text-white">
            {tool.name}
          </h1>
          <p className="relative mt-4 text-sm leading-7 text-zinc-200">
            {tool.tagline}
          </p>

          <div className="relative mt-7 flex flex-wrap gap-3">
            <Link
              href="/pricing"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Start Automated Income
            </Link>
            <Link
              href="/dashboard"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Access Dashboard
            </Link>
            <Link
              href="/account/register"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Unlock AI Software
            </Link>
          </div>
        </div>

        <div className="glass-surface neon-outline hover-tilt relative overflow-hidden rounded-3xl p-6">
          <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          <div className="relative grid gap-4">
            <div className="device-frame relative overflow-hidden rounded-3xl p-5">
              <div className="text-xs uppercase tracking-widest text-zinc-400">
                Software interface showcase
              </div>
              <Image
                src="/og.svg"
                alt="Automated Income"
                width={900}
                height={472}
                className="mt-4 w-full rounded-2xl border border-white/10 bg-black/30 p-6"
              />
            </div>
            <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/30 p-5">
              <div>
                <div className="text-sm font-semibold text-white">
                  {tool.channel === "computer" ? "Computer Software" : "Online Tool"}
                </div>
                <div className="mt-1 text-xs text-zinc-400">
                  {isWidget ? "Pricing Widget" : "Manual Plans"}
                </div>
              </div>
              <Image
                src={tool.imageSrc}
                alt={tool.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-2xl border border-white/10 bg-black/30 p-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <EarningsGraph seed={tool.id.length * 77} />
        <DemoTerminal />
      </section>

      <section className="mt-12 glass-surface rounded-3xl p-8">
        <h2 className="text-2xl font-semibold text-white">Features</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="glass-surface rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">3D interface preview</div>
            <div className="mt-2 text-sm leading-6 text-zinc-300">
              High-end glass UI, depth layers, and subtle parallax motion.
            </div>
          </div>
          <div className="glass-surface rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">Interactive demo</div>
            <div className="mt-2 text-sm leading-6 text-zinc-300">
              Demo terminal logs and simulated charting with clear labeling.
            </div>
          </div>
          <div className="glass-surface rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">License workflow</div>
            <div className="mt-2 text-sm leading-6 text-zinc-300">
              Locked cards, UUID license keys, expiration UI, and unified billing view.
            </div>
          </div>
          <div className="glass-surface rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">Admin UI controls</div>
            <div className="mt-2 text-sm leading-6 text-zinc-300">
              Toggle access and expire licenses inside a UI-only admin panel.
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white">Pricing</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Checkout options with a clean comparison feel.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="glass-surface rounded-3xl p-8">
            <div className="text-sm font-semibold text-white">Plan comparison</div>
            <div className="mt-4 grid gap-3">
              <div className="glass-surface hover-tilt rounded-3xl p-5">
                <div className="text-sm font-semibold text-white">Crypto</div>
                <div className="mt-2 text-sm text-zinc-300">Widget-based checkout</div>
              </div>
              <div className="glass-surface hover-tilt rounded-3xl p-5 opacity-70">
                <div className="text-sm font-semibold text-white">Stripe</div>
                <div className="mt-2 text-sm text-zinc-300">UI preview only</div>
              </div>
              <div className="glass-surface hover-tilt rounded-3xl p-5 opacity-70">
                <div className="text-sm font-semibold text-white">PayPal</div>
                <div className="mt-2 text-sm text-zinc-300">UI preview only</div>
              </div>
            </div>
          </div>

          {isWidget ? (
            <WidgetCheckout toolId={tool.id} />
          ) : (
            <div className="glass-surface rounded-3xl p-8">
              <div className="text-sm font-semibold text-white">Manual plans</div>
              <div className="mt-3 text-sm text-zinc-300">
                Text-only pricing is available on the manual plans pages.
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={tool.id === "arbitrage-trading-robot" ? "/plans/arbitrage-trading-robot" : "/plans/banking-botnet"}
                  className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
                >
                  Upgrade Tool Access
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View Live Demo
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white">Video showcase</h2>
        <p className="mt-2 text-sm text-zinc-300">Floating device mockups</p>
        <div className="mt-6">
          <VideoShowcase />
        </div>
      </section>

      <section className="mt-12">
        <TestimonialsCarousel testimonials={TESTIMONIALS} />
      </section>

      <section className="mt-12">
        <FAQAccordion faqs={FAQS} />
      </section>

      <section className="mt-12 glass-surface neon-outline hover-tilt rounded-3xl p-10">
        <h2 className="text-2xl font-semibold text-white">CTA Copy</h2>
        <div className="mt-4 grid gap-2 text-sm text-zinc-200">
          <div>Start Automated Income</div>
          <div>Unlock AI Software</div>
          <div>Access Dashboard</div>
          <div>Upgrade Tool Access</div>
          <div>View Live Demo</div>
        </div>
      </section>
    </div>
  );
}
