import { NextResponse } from "next/server";
import { getSession } from "@/lib/plan-system/auth";
import { readDB, writeDB } from "@/lib/plan-system/db";
import { generateId } from "@/lib/plan-system/security";

async function isAdmin() {
  const session = await getSession();
  return session?.role === "admin";
}

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const db = readDB();
  return NextResponse.json({ plans: db.plans, tools: db.tools, userPlans: db.userPlans });
}

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const payload = await req.json();
  const db = readDB();

  if (payload.kind === "plan") {
    db.plans.push({
      id: generateId("plan"),
      name: payload.name,
      category: payload.category,
      priceUsd: Number(payload.priceUsd),
      durationDays: Number(payload.durationDays),
      enabled: true,
      toolIds: payload.toolIds ?? [],
    });
  }

  if (payload.kind === "assign") {
    const plan = db.plans.find((p) => p.id === payload.planId);
    if (!plan) return NextResponse.json({ error: "Plan not found" }, { status: 404 });
    const now = new Date();
    const expires = new Date(now);
    expires.setDate(expires.getDate() + plan.durationDays);
    db.userPlans.push({
      id: generateId("upl"),
      userId: payload.userId,
      planId: plan.id,
      status: plan.category === "web" ? "active" : "purchased",
      purchasedAt: now.toISOString(),
      activatedAt: plan.category === "web" ? now.toISOString() : undefined,
      expiresAt: expires.toISOString(),
    });
  }

  writeDB(db);
  return NextResponse.json({ success: true });
}

export async function PATCH(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { planId, updates } = await req.json();
  const db = readDB();
  const plan = db.plans.find((p) => p.id === planId);
  if (!plan) return NextResponse.json({ error: "Plan not found" }, { status: 404 });
  Object.assign(plan, updates);
  writeDB(db);
  return NextResponse.json({ success: true });
}
