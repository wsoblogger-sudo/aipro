export type PlanCategory = "web" | "software";

export type ToolCategory = "cashflow" | "web" | "software";

export interface Tool {
  id: string;
  name: string;
  slug: string;
  category: ToolCategory;
  enabled: boolean;
}

export interface Plan {
  id: string;
  name: string;
  category: PlanCategory;
  priceUsd: number;
  durationDays: number;
  enabled: boolean;
  toolIds: string[];
}

export interface UserPlan {
  id: string;
  userId: string;
  planId: string;
  status: "purchased" | "active" | "expired" | "revoked";
  purchasedAt: string;
  activatedAt?: string;
  expiresAt?: string;
}

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LicenseKey {
  id: string;
  key: string;
  planId: string;
  disabled: boolean;
  assignedUserId?: string;
  activatedByUserId?: string;
  activatedAt?: string;
  expiresAt?: string;
  createdAt: string;
}

export interface ActivationHistory {
  id: string;
  userId: string;
  planId: string;
  licenseKeyId: string;
  action: "activated" | "revoked" | "disabled";
  timestamp: string;
}

export interface DashboardConfig {
  announcements: string[];
  enabledFeatures: {
    showWebPlans: boolean;
    showSoftwarePlans: boolean;
    showCashflow: boolean;
  };
}

export interface PlanSystemDB {
  users: User[];
  plans: Plan[];
  tools: Tool[];
  userPlans: UserPlan[];
  licenseKeys: LicenseKey[];
  activationHistory: ActivationHistory[];
  dashboardConfig: DashboardConfig;
}

export interface SessionPayload {
  userId: string;
  role: "user" | "admin";
}
