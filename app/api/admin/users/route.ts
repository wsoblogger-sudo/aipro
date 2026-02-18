import { NextResponse } from "next/server";
import { getSession } from "@/lib/plan-system/auth";
import { readDB, writeDB } from "@/lib/plan-system/db";
import { hashPassword } from "@/lib/plan-system/security";

async function assertAdmin() {
  const session = await getSession();
  return session?.role === "admin";
}

export async function GET() {
  if (!(await assertAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const db = readDB();
  return NextResponse.json({
    users: db.users.map((u) => ({ id: u.id, email: u.email, active: u.active, createdAt: u.createdAt })),
    userPlans: db.userPlans,
    activationHistory: db.activationHistory,
  });
}

export async function PATCH(req: Request) {
  if (!(await assertAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { userId, action, value } = await req.json();
  const db = readDB();
  const user = db.users.find((u) => u.id === userId);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  if (action === "setActive") user.active = Boolean(value);
  if (action === "resetPassword") user.passwordHash = hashPassword(String(value));
  user.updatedAt = new Date().toISOString();
  writeDB(db);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  if (!(await assertAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { userId } = await req.json();
  const db = readDB();
  db.users = db.users.filter((u) => u.id !== userId);
  db.userPlans = db.userPlans.filter((up) => up.userId !== userId);
  db.licenseKeys = db.licenseKeys.map((k) => (k.activatedByUserId === userId ? { ...k, activatedByUserId: undefined } : k));
  writeDB(db);
  return NextResponse.json({ success: true });
}
