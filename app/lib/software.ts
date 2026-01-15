export type SoftwareId =
  | "cashflow-tools"
  | "usdtrex-pro"
  | "ethercraft-pro"
  | "banking-botnet"
  | "arbitrage-robot"
  | "aiprofitgen-x";

export type SoftwareInfo = {
  id: SoftwareId;
  name: string;
  tagline: string;
  description: string;
  accent: "purple" | "cyan";
  iconText: string;
};

export const SOFTWARE: SoftwareInfo[] = [
  {
    id: "cashflow-tools",
    name: "Cashflow Tools",
    tagline: "Forecast, track, and optimize operational cashflow using AI-assisted workflows.",
    description:
      "Smart dashboards and automation helpers for tracking inputs, outputs, and planning scenarios with clarity.",
    accent: "cyan",
    iconText: "CF",
  },
  {
    id: "usdtrex-pro",
    name: "USDTRex Pro",
    tagline:
      "AI-assisted automation tooling for stablecoin workflow simulation and execution planning.",
    description:
      "Configure logic, monitor execution, and review performance signals inside a premium fintech-grade UI.",
    accent: "purple",
    iconText: "US",
  },
  {
    id: "ethercraft-pro",
    name: "Ethercraft Pro",
    tagline:
      "An advanced automation cockpit for ETH-focused workflow strategies and performance review.",
    description:
      "Built for control, transparency, and responsible automation with risk-aware configuration options.",
    accent: "cyan",
    iconText: "ET",
  },
  {
    id: "banking-botnet",
    name: "Banking BotNet",
    tagline:
      "Automate routine banking-style workflows with a modular bot orchestration layer.",
    description:
      "Organize tasks, approvals, and reporting in a structured system designed for repeatable operations.",
    accent: "purple",
    iconText: "BN",
  },
  {
    id: "arbitrage-robot",
    name: "Arbitrage Trading Robot",
    tagline:
      "Professional automation tooling for spread monitoring and execution logic simulation.",
    description:
      "Includes configurable rules, monitoring views, and safety checks for hands-free operation planning.",
    accent: "cyan",
    iconText: "AR",
  },
  {
    id: "aiprofitgen-x",
    name: "AiProfitgen X",
    tagline:
      "A unified AI workflow engine that connects multiple automation modules into one console.",
    description:
      "Centralize configuration, observe signals, and manage automation across the AIPROFITGEN ecosystem.",
    accent: "purple",
    iconText: "AX",
  },
];

export const softwareById = (id: SoftwareId) =>
  SOFTWARE.find((s) => s.id === id);
