import { NextResponse } from "next/server";
import { readDB } from "@/lib/plan-system/db";
import { setSession } from "@/lib/plan-system/auth";
import { verifyPassword } from "@/lib/plan-system/security";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const db = readDB();
  const user = db.users.find((u) => u.email.toLowerCase() === String(email).toLowerCase());
  if (!user || !user.active || !verifyPassword(String(password), user.passwordHash)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  await setSession({ userId: user.id, role: "user" });
  return NextResponse.json({ success: true });
}
