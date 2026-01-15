export type ToolId =
  | "cashflow-tools"
  | "usdtrex-pro"
  | "ethercraft-pro"
  | "aiprofitgen-x"
  | "arbitrage-trading-robot"
  | "banking-botnet";

export type ToolChannel = "computer" | "online";
export type ToolPricing = "widget" | "manual";

export type ToolVideo = {
  title: string;
  youtubeId: string;
};

export type ToolDefinition = {
  id: ToolId;
  name: string;
  tagline: string;
  channel: ToolChannel;
  pricing: ToolPricing;
  href: string;
  imageSrc: string;
  widgetScriptSrc?: string;
  videos?: ToolVideo[];
};

export const CASHFLOW_VIDEOS: ToolVideo[] = [
  { title: "BTC", youtubeId: "nTS6EBxHGYY" },
  { title: "LTC", youtubeId: "qNbyjr2_wEE" },
  { title: "ETH", youtubeId: "nJ5RkY9CS2E" },
  { title: "USDT", youtubeId: "LgfvlYdHnas" },
];

export const TOOLS: ToolDefinition[] = [
  {
    id: "cashflow-tools",
    name: "CASHFLOW TOOLS",
    tagline: "Unlock automated crypto cashflow signals, simulations, and live previews.",
    channel: "online",
    pricing: "widget",
    href: "/pricing/cashflow-tools",
    imageSrc: "/tools/cashflow-tools.svg",
    widgetScriptSrc:
      "https://widget.coinremitter.com/pricing/js/ijgrPfMEhG/checkout.js",
    videos: CASHFLOW_VIDEOS,
  },
  {
    id: "usdtrex-pro",
    name: "USDTRex Pro",
    tagline: "Premium USDT-focused automation preview with unified billing + license manager.",
    channel: "online",
    pricing: "widget",
    href: "/pricing/usdtrex-pro",
    imageSrc: "/tools/usdtrex-pro.svg",
    widgetScriptSrc:
      "https://widget.coinremitter.com/pricing/js/ZlalijkdCr/checkout.js",
  },
  {
    id: "ethercraft-pro",
    name: "Ethercraft Pro",
    tagline: "ETH strategy preview dashboard with dark AI UI and demo terminal simulation.",
    channel: "online",
    pricing: "widget",
    href: "/pricing/ethercraft-pro",
    imageSrc: "/tools/ethercraft-pro.svg",
    widgetScriptSrc:
      "https://widget.coinremitter.com/pricing/js/Ux9Y4bgDpl/checkout.js",
  },
  {
    id: "aiprofitgen-x",
    name: "AIPROFITGEN X",
    tagline: "AI-assisted profit simulation suite with upgrade paths and license tracking.",
    channel: "online",
    pricing: "widget",
    href: "/pricing/aiprofitgen-x",
    imageSrc: "/tools/aiprofitgen-x.svg",
    widgetScriptSrc:
      "https://widget.coinremitter.com/pricing/js/y7tUDVJW0p/checkout.js",
  },
  {
    id: "arbitrage-trading-robot",
    name: "ARBITRAGE TRADING ROBOT",
    tagline: "High-speed arbitrage automation plan details (manual plans).",
    channel: "computer",
    pricing: "manual",
    href: "/plans/arbitrage-trading-robot",
    imageSrc: "/tools/arbitrage-trading-robot.svg",
  },
  {
    id: "banking-botnet",
    name: "BANKING BOTNET",
    tagline: "Manual plan lineup (text-only) with admin UI control (no backend).",
    channel: "online",
    pricing: "manual",
    href: "/plans/banking-botnet",
    imageSrc: "/tools/banking-botnet.svg",
  },
];

export function getTool(id: ToolId): ToolDefinition {
  const tool = TOOLS.find((t) => t.id === id);
  if (!tool) throw new Error(`Unknown tool: ${id}`);
  return tool;
}
