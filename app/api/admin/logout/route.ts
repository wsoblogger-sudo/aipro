import { NextResponse } from "next/server";
import { clearSession } from "@/lib/plan-system/auth";

export async function POST() {
  await clearSession();
  return NextResponse.json({ success: true });
}
