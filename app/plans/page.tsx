import type { Metadata } from "next";
import Link from "next/link";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Manual Plans — AIProfitGen",
  description:
    "Manual plan pages with text-only pricing for selected products.",
  path: "/plans",
});

export default function PlansPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <section className="glass-surface neon-outline rounded-3xl p-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Manual Plans</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-200">
          Text-only pricing pages.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/plans/arbitrage-trading-robot"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            ARBITRAGE TRADING ROBOT
          </Link>
          <Link
            href="/plans/banking-botnet"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            BANKING BOTNET
          </Link>
        </div>
      </section>
    </div>
  );
}
