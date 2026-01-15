import type { Metadata } from "next";
import Image from "next/image";
import WidgetCheckout from "@/components/WidgetCheckout";
import { createSeoMetadata } from "@/lib/seo";
import { CASHFLOW_VIDEOS, getTool } from "@/lib/tools";

export const metadata: Metadata = createSeoMetadata({
  title: "CASHFLOW TOOLS — Pricing",
  description:
    "CASHFLOW TOOLS pricing with embedded widget checkout and video showcase.",
  path: "/pricing/cashflow-tools",
});

export default function CashflowToolsPricingPage() {
  const tool = getTool("cashflow-tools");

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <section className="glass-surface neon-outline rounded-3xl p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-white">
              {tool.name}
            </h1>
            <p className="mt-4 text-sm leading-7 text-zinc-200">Pricing widget</p>
          </div>
          <Image
            src={tool.imageSrc}
            alt={tool.name}
            width={64}
            height={64}
            className="h-16 w-16 rounded-2xl border border-white/10 bg-black/30 p-3"
          />
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {CASHFLOW_VIDEOS.map((v) => (
          <div
            key={v.youtubeId}
            className="device-frame hover-tilt overflow-hidden rounded-3xl"
          >
            <div className="border-b border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white">
              {v.title}
            </div>
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${v.youtubeId}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <WidgetCheckout toolId="cashflow-tools" />
      </section>
    </div>
  );
}
