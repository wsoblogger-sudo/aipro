import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Terms of Service — AIProfitGen",
  description:
    "Terms of Service for the AIProfitGen demo platform.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-14">
      <div className="glass-surface neon-outline rounded-3xl p-10">
        <h1 className="text-3xl font-semibold text-white">Terms of Service</h1>
        <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-200">
          <p>
            This project is a UI demo. It provides simulated previews and client-side
            account flows.
          </p>
          <p>
            Demo / Simulation Preview Only. No backend services are provided in this build.
          </p>
        </div>
      </div>
    </div>
  );
}
