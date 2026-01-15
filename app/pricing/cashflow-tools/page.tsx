import type { Metadata } from "next";
import Image from "next/image";
import WidgetCheckout from "@/components/WidgetCheckout";
import { createSeoMetadata } from "@/lib/seo";
import { CASHFLOW_VIDEOS, getTool } from "@/lib/tools";

export const metadata: Metadata = createSeoMetadata({
  title: "CASHFLOW TOOLS Pricing — Crypto Money Making Widget",
  description:
    "CASHFLOW TOOLS pricing widget with BTC/LTC/ETH/USDT previews, automated income simulation, license manager unlock flow, and AI trading software dashboard access.",
  path: "/pricing/cashflow-tools",
});

function YouTubeEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
      <div className="border-b border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
        {title}
      </div>
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function CashflowToolsPricingPage() {
  const tool = getTool("cashflow-tools");

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white">{tool.name}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">
              Pricing widget integration + embedded crypto previews.
            </p>
            <div className="mt-3 text-xs text-zinc-400">
              Demo / Simulation Preview Only
            </div>
          </div>
          <Image
            src={tool.imageSrc}
            alt={tool.name}
            width={64}
            height={64}
            className="h-16 w-16 rounded-2xl border border-white/10 bg-black/30 p-3"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {CASHFLOW_VIDEOS.map((v) => (
          <YouTubeEmbed key={v.youtubeId} youtubeId={v.youtubeId} title={v.title} />
        ))}
      </div>

      <div className="mt-10">
        <WidgetCheckout toolId="cashflow-tools" />
      </div>
    </div>
  );
}
