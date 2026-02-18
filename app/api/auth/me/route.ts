import { NextResponse } from "next/server";
import { getSession } from "@/lib/plan-system/auth";
import { readDB } from "@/lib/plan-system/db";
import { getAccessibleTools } from "@/lib/plan-system/permissions";

export async function GET() {
  const session = await getSession();
  if (!session || session.role !== "user") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = readDB();
  const user = db.users.find((u) => u.id === session.userId);
  if (!user || !user.active) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userPlans = db.userPlans.filter((up) => up.userId === user.id);
  const webPlans = db.plans.filter((p) => p.category === "web" && p.enabled);
  const softwarePlans = db.plans.filter((p) => p.category === "software" && p.enabled);
  const accessibleTools = getAccessibleTools(db, user.id);

  return NextResponse.json({
    user: { id: user.id, email: user.email },
    dashboardConfig: db.dashboardConfig,
    webPlans,
    softwarePlans,
    userPlans,
    tools: accessibleTools,
  });
}
