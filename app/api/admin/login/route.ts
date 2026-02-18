import { NextResponse } from "next/server";
import { setSession } from "@/lib/plan-system/auth";

const ADMIN_USER = "aiprofitgen@gmail.com";
const ADMIN_PASS = "Waqas@4141";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    return NextResponse.json({ error: "Invalid admin credentials" }, { status: 401 });
  }
  await setSession({ userId: "admin", role: "admin" });
  return NextResponse.json({ success: true });
}
