import type { Metadata } from "next";
import ToolSelection from "@/components/auth/ToolSelection";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Tool Selection — AIProfitGen",
  description:
    "Choose your preferred product category and continue into the customer dashboard. Demo / Simulation Preview Only.",
  path: "/account/select",
});

export default function ToolSelectionPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="max-w-2xl">
        <ToolSelection />
      </div>
    </div>
  );
}
