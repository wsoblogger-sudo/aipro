import type { Metadata } from "next";
import Image from "next/image";
import WidgetCheckout from "@/components/WidgetCheckout";
import { createSeoMetadata } from "@/lib/seo";
import { getTool } from "@/lib/tools";

export const metadata: Metadata = createSeoMetadata({
  title: "Ethercraft Pro — Pricing",
  description: "Ethercraft Pro pricing with embedded widget checkout.",
  path: "/pricing/ethercraft-pro",
});

export default function EthercraftProPricingPage() {
  const tool = getTool("ethercraft-pro");

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

      <section className="mt-10">
        <WidgetCheckout toolId="ethercraft-pro" />
      </section>
    </div>
  );
}
