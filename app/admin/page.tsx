import type { Metadata } from "next";
import AdminClient from "./AdminClient";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Admin Panel — Toggle Tool Access | Automated Income Suite",
  description:
    "Admin UI to toggle tool access, expire licenses, and reset demo data. Frontend-only simulation with aggressive crypto money making SEO.",
  path: "/admin",
});

export default function AdminPage() {
  return <AdminClient />;
}
