import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Dashboard — AIProfitGen",
  description:
    "Customer dashboard for purchased software, downloads, activation keys, payment history, support tickets, and profile customization.",
  path: "/dashboard",
});

export default function DashboardPage() {
  return <DashboardClient />;
}
