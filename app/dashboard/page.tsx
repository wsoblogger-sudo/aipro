import { requireUserSession } from "@/lib/plan-system/auth";
import DashboardClient from "@/components/dashboard-client";

export default async function DashboardPage() {
  await requireUserSession();
  return <DashboardClient />;
}
