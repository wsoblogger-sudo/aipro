import { NextResponse } from "next/server";
import { getSession } from "@/lib/plan-system/auth";
import { readDB, writeDB } from "@/lib/plan-system/db";
import { generateId, generateLicenseKey } from "@/lib/plan-system/security";

async function isAdmin() {
  const session = await getSession();
  return session?.role === "admin";
}

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const db = readDB();
  return NextResponse.json({ licenseKeys: db.licenseKeys });
}

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { planId, expiresAt, assignedUserId } = await req.json();
  const db = readDB();
  db.licenseKeys.push({
    id: generateId("lkey"),
    key: generateLicenseKey(),
    planId,
    disabled: false,
    assignedUserId,
    expiresAt,
    createdAt: new Date().toISOString(),
  });
  writeDB(db);
  return NextResponse.json({ success: true });
}

export async function PATCH(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { keyId, disabled } = await req.json();
  const db = readDB();
  const key = db.licenseKeys.find((k) => k.id === keyId);
  if (!key) return NextResponse.json({ error: "Key not found" }, { status: 404 });
  key.disabled = Boolean(disabled);
  if (disabled && key.activatedByUserId) {
    db.userPlans
      .filter((up) => up.userId === key.activatedByUserId && up.planId === key.planId)
      .forEach((up) => {
        up.status = "revoked";
      });
    db.activationHistory.push({
      id: generateId("act"),
      userId: key.activatedByUserId,
      planId: key.planId,
      licenseKeyId: key.id,
      action: "disabled",
      timestamp: new Date().toISOString(),
    });
  }
  writeDB(db);
  return NextResponse.json({ success: true });
}
