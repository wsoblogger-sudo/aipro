import type { ToolId } from "./tools";

export type AccountRecord = {
  email: string;
  password: string;
  createdAt: string;
};

export type SessionRecord = {
  email: string;
  loggedInAt: string;
};

export type ToolAccess = {
  toolId: ToolId;
  unlocked: boolean;
  licenseKey?: string;
  expiresAt?: string;
  purchasedAt?: string;
  source?: "widget" | "admin";
};

export type BillingEntry = {
  id: string;
  createdAt: string;
  toolId: ToolId;
  summary: string;
  amountUsd?: number;
  status: "success" | "simulated";
};

export type UserPreferences = {
  toolChannel?: "computer" | "online";
};

const KEYS = {
  accounts: "cr.accounts.v1",
  session: "cr.session.v1",
  toolAccess: "cr.toolAccess.v1",
  billing: "cr.billing.v1",
  preferences: "cr.preferences.v1",
} as const;

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getAccounts(): AccountRecord[] {
  if (!isBrowser()) return [];
  return safeParse<AccountRecord[]>(localStorage.getItem(KEYS.accounts)) ?? [];
}

export function saveAccounts(accounts: AccountRecord[]): void {
  if (!isBrowser()) return;
  localStorage.setItem(KEYS.accounts, JSON.stringify(accounts));
}

export function registerAccount(email: string, password: string): {
  ok: boolean;
  error?: string;
} {
  const normalized = email.trim().toLowerCase();
  if (!normalized.includes("@")) return { ok: false, error: "Enter a valid email." };
  if (password.length < 6)
    return { ok: false, error: "Password must be at least 6 characters." };

  const accounts = getAccounts();
  if (accounts.some((a) => a.email === normalized)) {
    return { ok: false, error: "Account already exists. Please login." };
  }

  const next: AccountRecord = {
    email: normalized,
    password,
    createdAt: new Date().toISOString(),
  };

  saveAccounts([...accounts, next]);
  setSession({ email: normalized, loggedInAt: new Date().toISOString() });
  return { ok: true };
}

export function login(email: string, password: string): {
  ok: boolean;
  error?: string;
} {
  const normalized = email.trim().toLowerCase();
  const accounts = getAccounts();
  const match = accounts.find((a) => a.email === normalized);
  if (!match || match.password !== password) {
    return { ok: false, error: "Invalid email or password." };
  }
  setSession({ email: normalized, loggedInAt: new Date().toISOString() });
  return { ok: true };
}

export function logout(): void {
  if (!isBrowser()) return;
  localStorage.removeItem(KEYS.session);
}

export function getSession(): SessionRecord | null {
  if (!isBrowser()) return null;
  return safeParse<SessionRecord>(localStorage.getItem(KEYS.session));
}

export function setSession(session: SessionRecord): void {
  if (!isBrowser()) return;
  localStorage.setItem(KEYS.session, JSON.stringify(session));
}

export function getToolAccessMap(): Partial<Record<ToolId, ToolAccess>> {
  if (!isBrowser()) return {};
  return (
    safeParse<Partial<Record<ToolId, ToolAccess>>>(
      localStorage.getItem(KEYS.toolAccess),
    ) ?? {}
  );
}

export function setToolAccess(access: ToolAccess): void {
  if (!isBrowser()) return;
  const map = getToolAccessMap();
  map[access.toolId] = access;
  localStorage.setItem(KEYS.toolAccess, JSON.stringify(map));
}

export function getBilling(): BillingEntry[] {
  if (!isBrowser()) return [];
  return safeParse<BillingEntry[]>(localStorage.getItem(KEYS.billing)) ?? [];
}

export function addBilling(entry: BillingEntry): void {
  if (!isBrowser()) return;
  const current = getBilling();
  localStorage.setItem(KEYS.billing, JSON.stringify([entry, ...current]));
}

export function getPreferences(): UserPreferences {
  if (!isBrowser()) return {};
  return safeParse<UserPreferences>(localStorage.getItem(KEYS.preferences)) ?? {};
}

export function setPreferences(prefs: UserPreferences): void {
  if (!isBrowser()) return;
  localStorage.setItem(KEYS.preferences, JSON.stringify(prefs));
}

export function resetDemoData(): void {
  if (!isBrowser()) return;
  localStorage.removeItem(KEYS.toolAccess);
  localStorage.removeItem(KEYS.billing);
  localStorage.removeItem(KEYS.preferences);
}

export function newUuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  const template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  return template.replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function isLicenseActive(access: ToolAccess | undefined): boolean {
  if (!access?.unlocked) return false;
  if (!access.expiresAt) return true;
  return new Date(access.expiresAt).getTime() > Date.now();
}
