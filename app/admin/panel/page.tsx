import { requireAdminSession } from "@/lib/plan-system/auth";
import AdminPanelClient from "@/components/admin-panel-client";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPanelPage() {
  await requireAdminSession();
  return <AdminPanelClient />;
}
