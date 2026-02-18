import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "crypto";

const SESSION_SECRET = process.env.SESSION_SECRET ?? "local-dev-session-secret-change-me";

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, passwordHash: string): boolean {
  const [salt, originalHash] = passwordHash.split(":");
  if (!salt || !originalHash) {
    return false;
  }
  const hashBuffer = scryptSync(password, salt, 64);
  const originalBuffer = Buffer.from(originalHash, "hex");
  return originalBuffer.length === hashBuffer.length && timingSafeEqual(originalBuffer, hashBuffer);
}

export function signValue(value: string): string {
  const signature = createHmac("sha256", SESSION_SECRET).update(value).digest("hex");
  return `${value}.${signature}`;
}

export function verifySignedValue(signed: string): string | null {
  const lastDot = signed.lastIndexOf(".");
  if (lastDot < 0) {
    return null;
  }
  const value = signed.slice(0, lastDot);
  const signature = signed.slice(lastDot + 1);
  const expected = createHmac("sha256", SESSION_SECRET).update(value).digest("hex");
  const sigBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (sigBuffer.length !== expectedBuffer.length) {
    return null;
  }
  return timingSafeEqual(sigBuffer, expectedBuffer) ? value : null;
}

export function generateLicenseKey(): string {
  return Array.from({ length: 4 }, () => randomBytes(4).toString("hex").toUpperCase()).join("-");
}

export function generateId(prefix: string): string {
  return `${prefix}_${randomBytes(8).toString("hex")}`;
}
