import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { generateId, generateLicenseKey } from "./security";
import { PlanSystemDB } from "./types";

const dbPath = path.join(process.cwd(), "data", "plan-system.json");

const seed: PlanSystemDB = {
  users: [],
  plans: [
    {
      id: "plan_web_starter",
      name: "Web Starter",
      category: "web",
      priceUsd: 29,
      durationDays: 30,
      enabled: true,
      toolIds: ["tool_cashflow_1", "tool_cashflow_2", "tool_web_analytics"],
    },
    {
      id: "plan_web_pro",
      name: "Web Pro",
      category: "web",
      priceUsd: 79,
      durationDays: 30,
      enabled: true,
      toolIds: [
        "tool_cashflow_1",
        "tool_cashflow_2",
        "tool_cashflow_3",
        "tool_cashflow_4",
        "tool_web_analytics",
      ],
    },
    {
      id: "plan_software_growth",
      name: "Software Growth",
      category: "software",
      priceUsd: 149,
      durationDays: 30,
      enabled: true,
      toolIds: ["tool_cashflow_1", "tool_cashflow_2", "tool_cashflow_3", "tool_software_builder"],
    },
    {
      id: "plan_software_scale",
      name: "Software Scale",
      category: "software",
      priceUsd: 249,
      durationDays: 30,
      enabled: true,
      toolIds: [
        "tool_cashflow_1",
        "tool_cashflow_2",
        "tool_cashflow_3",
        "tool_cashflow_4",
        "tool_cashflow_5",
        "tool_cashflow_6",
        "tool_software_builder",
      ],
    },
  ],
  tools: [
    { id: "tool_cashflow_1", name: "Cashflow Forecast", slug: "cashflow-forecast", category: "cashflow", enabled: true },
    { id: "tool_cashflow_2", name: "Cashflow Optimizer", slug: "cashflow-optimizer", category: "cashflow", enabled: true },
    { id: "tool_cashflow_3", name: "Cashflow Trend Scanner", slug: "cashflow-trend-scanner", category: "cashflow", enabled: true },
    { id: "tool_cashflow_4", name: "Cashflow Risk Guard", slug: "cashflow-risk-guard", category: "cashflow", enabled: true },
    { id: "tool_cashflow_5", name: "Cashflow Scenario Lab", slug: "cashflow-scenario-lab", category: "cashflow", enabled: true },
    { id: "tool_cashflow_6", name: "Cashflow Recovery Coach", slug: "cashflow-recovery-coach", category: "cashflow", enabled: true },
    { id: "tool_web_analytics", name: "Web Analytics Hub", slug: "web-analytics-hub", category: "web", enabled: true },
    { id: "tool_software_builder", name: "Software Builder Suite", slug: "software-builder-suite", category: "software", enabled: true },
  ],
  userPlans: [],
  licenseKeys: [
    {
      id: generateId("lkey"),
      key: generateLicenseKey(),
      planId: "plan_software_growth",
      disabled: false,
      createdAt: new Date().toISOString(),
    },
  ],
  activationHistory: [],
  dashboardConfig: {
    announcements: ["Welcome to Aiprofitgen control dashboard."],
    enabledFeatures: {
      showWebPlans: true,
      showSoftwarePlans: true,
      showCashflow: true,
    },
  },
};

function ensureDatabaseFile(): void {
  if (!existsSync(path.dirname(dbPath))) {
    mkdirSync(path.dirname(dbPath), { recursive: true });
  }
  if (!existsSync(dbPath)) {
    writeFileSync(dbPath, JSON.stringify(seed, null, 2));
  }
}

export function readDB(): PlanSystemDB {
  ensureDatabaseFile();
  const raw = readFileSync(dbPath, "utf-8");
  const db = JSON.parse(raw) as PlanSystemDB;

  return db;
}

export function writeDB(db: PlanSystemDB): void {
  writeFileSync(dbPath, JSON.stringify(db, null, 2));
}
