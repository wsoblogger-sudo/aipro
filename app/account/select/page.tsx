import type { Metadata } from "next";
import ToolSelection from "@/components/auth/ToolSelection";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Tool Selection — Choose Computer Software or Online Tool",
  description:
    "Select Computer Software or Online Tool and continue into the AI dashboard. Crypto money making, automated income, and AI trading software preview experience.",
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
