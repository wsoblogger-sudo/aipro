import type { Metadata } from "next";
import Image from "next/image";
import { createSeoMetadata } from "@/lib/seo";
import { getTool } from "@/lib/tools";

export const metadata: Metadata = createSeoMetadata({
  title: "BANKING BOTNET — Manual Plans",
  description:
    "BANKING BOTNET manual plans (text-only). View plan lineup for simulated AI tool access, automated income previews, and dashboard unlock flow. No backend.",
  path: "/plans/banking-botnet",
});

export default function BankingBotnetPlansPage() {
  const tool = getTool("banking-botnet");

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white">{tool.name}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">
              Manual Plans (text-only, no automation)
            </p>
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
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-lg font-semibold text-white">Starter Plan — $499/month</div>
          <div className="mt-4 space-y-2 text-sm text-zinc-200">
            <div>Core dashboard access</div>
            <div>Standard simulations</div>
            <div>Basic license manager</div>
            <div>Email support</div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-lg font-semibold text-white">Pro Plan — $999/month</div>
          <div className="mt-4 space-y-2 text-sm text-zinc-200">
            <div>Expanded modules</div>
            <div>Higher throughput simulation</div>
            <div>Priority responses</div>
            <div>License expiration controls</div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-lg font-semibold text-white">Elite Plan — $2499/year</div>
          <div className="mt-4 space-y-2 text-sm text-zinc-200">
            <div>Full feature access</div>
            <div>Unlimited simulation runs</div>
            <div>Dedicated license support</div>
            <div>Unified billing view</div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-lg font-semibold text-white">Infinity Plan — $4999/year</div>
          <div className="mt-4 space-y-2 text-sm text-zinc-200">
            <div>Maximum access tier</div>
            <div>Admin UI controls enabled</div>
            <div>Priority support</div>
            <div>Extended license durations</div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">
        <div className="text-sm font-semibold text-white">CTA</div>
        <div className="mt-2 text-sm text-zinc-300">
          Start Automated Income · Unlock AI Software · Upgrade Tool Access
        </div>
      </div>
    </div>
  );
}
