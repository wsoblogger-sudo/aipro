import { NextResponse } from "next/server";
import { getSession } from "@/lib/plan-system/auth";
import { readDB, writeDB } from "@/lib/plan-system/db";
import { generateId } from "@/lib/plan-system/security";

export async function POST(req: Request) {
  const session = await getSession();
  if (!session || session.role !== "user") return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { planId } = await req.json();
  const db = readDB();
  const plan = db.plans.find((p) => p.id === planId && p.enabled);
  if (!plan) return NextResponse.json({ error: "Plan not found" }, { status: 404 });

  const now = new Date();
  const expires = new Date(now);
  expires.setDate(expires.getDate() + plan.durationDays);
  db.userPlans.push({
    id: generateId("upl"),
    userId: session.userId,
    planId: plan.id,
    status: plan.category === "web" ? "active" : "purchased",
    purchasedAt: now.toISOString(),
    activatedAt: plan.category === "web" ? now.toISOString() : undefined,
    expiresAt: expires.toISOString(),
  });

  writeDB(db);
  return NextResponse.json({ success: true, requiresLicense: plan.category === "software" });
}
