import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Refund Policy — AIProfitGen",
  description:
    "Refund Policy for the AIProfitGen demo platform.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-14">
      <div className="glass-surface neon-outline rounded-3xl p-10">
        <h1 className="text-3xl font-semibold text-white">Refund Policy</h1>
        <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-200">
          <p>
            This site is a frontend-only demo. Any “payment success” flow is a simulation.
          </p>
          <p>Refund processing is not implemented in this build.</p>
        </div>
      </div>
    </div>
  );
}
