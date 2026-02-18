import { NextResponse } from "next/server";
import { getSession } from "@/lib/plan-system/auth";
import { readDB, writeDB } from "@/lib/plan-system/db";

async function isAdmin() {
  const session = await getSession();
  return session?.role === "admin";
}

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const db = readDB();
  return NextResponse.json({ tools: db.tools });
}

export async function PATCH(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { toolId, enabled } = await req.json();
  const db = readDB();
  const tool = db.tools.find((t) => t.id === toolId);
  if (!tool) return NextResponse.json({ error: "Tool not found" }, { status: 404 });
  tool.enabled = Boolean(enabled);
  writeDB(db);
  return NextResponse.json({ success: true });
}
