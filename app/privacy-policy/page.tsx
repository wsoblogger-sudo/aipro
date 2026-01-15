import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Privacy Policy — AIPROFITGEN",
  description:
    "Privacy Policy page for an AI-centric software demo. Clear data handling language and localStorage-only behavior.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-14">
      <div className="glass-surface neon-outline rounded-3xl p-10">
        <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
        <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-200">
          <p>
            This site is a frontend-only demo. Account sessions, preferences, licenses,
            and billing entries are stored locally in your browser (localStorage).
          </p>
          <p>
            Embedded third-party widgets and video players may load resources from
            external domains when you interact with them.
          </p>
          <p>
            Demo / Simulation Preview Only. No guarantees are made about outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
