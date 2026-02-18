import { NextResponse } from "next/server";
import { getSession } from "@/lib/plan-system/auth";
import { readDB, writeDB } from "@/lib/plan-system/db";

async function isAdmin() {
  const session = await getSession();
  return session?.role === "admin";
}

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const db = readDB();
  return NextResponse.json({ dashboardConfig: db.dashboardConfig });
}

export async function PATCH(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { announcements, enabledFeatures } = await req.json();
  const db = readDB();
  if (announcements) db.dashboardConfig.announcements = announcements;
  if (enabledFeatures) db.dashboardConfig.enabledFeatures = { ...db.dashboardConfig.enabledFeatures, ...enabledFeatures };
  writeDB(db);
  return NextResponse.json({ success: true });
}
