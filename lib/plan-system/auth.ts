import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SessionPayload } from "./types";
import { signValue, verifySignedValue } from "./security";

const SESSION_COOKIE = "apg_session";

export async function setSession(payload: SessionPayload): Promise<void> {
  const c = await cookies();
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  c.set(SESSION_COOKIE, signValue(encoded), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSession(): Promise<void> {
  const c = await cookies();
  c.delete(SESSION_COOKIE);
}

export async function getSession(): Promise<SessionPayload | null> {
  const c = await cookies();
  const raw = c.get(SESSION_COOKIE)?.value;
  if (!raw) {
    return null;
  }
  const verified = verifySignedValue(raw);
  if (!verified) {
    return null;
  }
  try {
    return JSON.parse(Buffer.from(verified, "base64url").toString("utf-8")) as SessionPayload;
  } catch {
    return null;
  }
}

export async function requireUserSession(): Promise<SessionPayload> {
  const session = await getSession();
  if (!session || session.role !== "user") {
    redirect("/login");
  }
  return session;
}

export async function requireAdminSession(): Promise<SessionPayload> {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    redirect("/admin/login");
  }
  return session;
}
