import type { Metadata } from "next";
import AdminClient from "./AdminClient";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Admin — AIProfitGen",
  description:
    "Admin dashboard UI for managing users and licenses. Frontend-only demo.",
  path: "/admin",
});

export default function AdminPage() {
  return <AdminClient />;
}
