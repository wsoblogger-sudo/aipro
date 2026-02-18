import { NextResponse } from "next/server";
import { getSession } from "@/lib/plan-system/auth";
import { readDB, writeDB } from "@/lib/plan-system/db";
import { generateId } from "@/lib/plan-system/security";

export async function POST(req: Request) {
  const session = await getSession();
  if (!session || session.role !== "user") return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { licenseKey, planId } = await req.json();
  const db = readDB();

  const key = db.licenseKeys.find((k) => k.key === String(licenseKey).trim().toUpperCase());
  if (!key || key.planId !== planId || key.disabled) {
    return NextResponse.json({ error: "Invalid license key" }, { status: 400 });
  }
  if (key.expiresAt && new Date(key.expiresAt).getTime() < Date.now()) {
    return NextResponse.json({ error: "License key expired" }, { status: 400 });
  }
  if (key.assignedUserId && key.assignedUserId !== session.userId) {
    return NextResponse.json({ error: "Key assigned to another user" }, { status: 403 });
  }
  if (key.activatedByUserId && key.activatedByUserId !== session.userId) {
    return NextResponse.json({ error: "Key already used" }, { status: 409 });
  }

  const userPlan = db.userPlans.find(
    (up) => up.userId === session.userId && up.planId === planId && (up.status === "purchased" || up.status === "active"),
  );
  if (!userPlan) return NextResponse.json({ error: "Purchase required" }, { status: 400 });

  key.activatedByUserId = session.userId;
  key.activatedAt = new Date().toISOString();
  userPlan.status = "active";
  userPlan.activatedAt = new Date().toISOString();
  db.activationHistory.push({
    id: generateId("act"),
    userId: session.userId,
    planId,
    licenseKeyId: key.id,
    action: "activated",
    timestamp: new Date().toISOString(),
  });
  writeDB(db);

  return NextResponse.json({ success: true });
}
