import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Refund Policy — AIPROFITGEN",
  description:
    "Refund Policy page for a demo experience. Clarifies simulated payment success flows and UI-only billing history.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-14">
      <div className="glass-surface neon-outline rounded-3xl p-10">
        <h1 className="text-3xl font-semibold text-white">Refund Policy</h1>
        <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-200">
          <p>
            This site is a frontend-only demo. Any “payment success” flow is a
            simulation preview.
          </p>
          <p>
            Refund processing is not implemented in this build because there is no
            backend order system.
          </p>
          <p>Demo / Simulation Preview Only.</p>
        </div>
      </div>
    </div>
  );
}
