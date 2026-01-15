import type { Metadata } from "next";
import Image from "next/image";
import WidgetCheckout from "@/components/WidgetCheckout";
import { createSeoMetadata } from "@/lib/seo";
import { getTool } from "@/lib/tools";

export const metadata: Metadata = createSeoMetadata({
  title: "USDTRex Pro Pricing — Unlock Automated Income",
  description:
    "USDTRex Pro pricing widget integration with dashboard unlock flow, crypto money making simulations, unified billing history, and license expiration UI.",
  path: "/pricing/usdtrex-pro",
});

export default function USDTRexProPricingPage() {
  const tool = getTool("usdtrex-pro");

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white">{tool.name}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">
              Pricing widget integration with account unlock + license tracking.
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

      <div className="mt-10">
        <WidgetCheckout toolId="usdtrex-pro" />
      </div>
    </div>
  );
}
