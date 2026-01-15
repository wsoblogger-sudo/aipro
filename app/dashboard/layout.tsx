import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "AI Dashboard — Unlock Automated Income Tools",
  description:
    "Access a dark AI dashboard with locked/unlocked tool cards, simulated earnings graphs, unified billing history, and license manager. Crypto money making + automated income UI.",
  path: "/dashboard",
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
