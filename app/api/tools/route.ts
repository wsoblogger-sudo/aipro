import { NextResponse } from "next/server";
import { getSession } from "@/lib/plan-system/auth";
import { readDB } from "@/lib/plan-system/db";
import { getAccessibleTools } from "@/lib/plan-system/permissions";

export async function GET() {
  const session = await getSession();
  if (!session || session.role !== "user") return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const db = readDB();
  return NextResponse.json({ tools: getAccessibleTools(db, session.userId) });
}
