import { NextResponse } from "next/server";
import { readDB, writeDB } from "@/lib/plan-system/db";
import { generateId, hashPassword } from "@/lib/plan-system/security";
import { setSession } from "@/lib/plan-system/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (!email || !password || password.length < 8) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
  }

  const db = readDB();
  const exists = db.users.some((u) => u.email.toLowerCase() === String(email).toLowerCase());
  if (exists) {
    return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  }

  const now = new Date().toISOString();
  db.users.push({
    id: generateId("usr"),
    email: String(email).toLowerCase(),
    passwordHash: hashPassword(String(password)),
    active: true,
    createdAt: now,
    updatedAt: now,
  });
  writeDB(db);
  const user = db.users[db.users.length - 1];
  await setSession({ userId: user.id, role: "user" });

  return NextResponse.json({ success: true });
}
