import type { ToolId } from "./tools";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  toolId?: ToolId;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Jordan M.",
    role: "Product Analyst",
    rating: 5,
    quote:
      "The interface preview feels premium. The dashboard flow, licensing UI, and simulated activity feed look enterprise-ready.",
    toolId: "aiprofitgen-x",
  },
  {
    id: "t2",
    name: "Ava S.",
    role: "Operations Lead",
    rating: 5,
    quote:
      "Fast navigation, clean sections, and the 3D glass aesthetic makes it feel like a serious AI platform.",
    toolId: "cashflow-tools",
  },
  {
    id: "t3",
    name: "Kai R.",
    role: "Growth Manager",
    rating: 4,
    quote:
      "The pricing widget experience is seamless and the license manager view is clear. Great UX for a demo experience.",
    toolId: "usdtrex-pro",
  },
  {
    id: "t4",
    name: "Sophia L.",
    role: "Support Specialist",
    rating: 5,
    quote:
      "The admin UI toggles make the preview workflow easy to understand. Everything stays labeled as a simulation.",
  },
];

export type Article = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  body: string;
};

export const ARTICLES: Article[] = [
  {
    id: "a1",
    title: "Automated income workflows: how to structure a preview dashboard",
    summary:
      "A simple framework for presenting AI tools with clear demos, licensing UI, and a professional product experience.",
    tags: ["ai", "dashboard", "ux"],
    body:
      "This knowledge base article is a demo entry. It focuses on layout, clarity, and the importance of labeling simulations clearly.",
  },
  {
    id: "a2",
    title: "Pricing pages that convert: widget-first checkout UX patterns",
    summary:
      "How to keep pricing simple while retaining trust signals and clear CTAs.",
    tags: ["pricing", "conversion"],
    body:
      "This knowledge base article is a demo entry. It highlights consistent CTAs, clear plan structure, and reduced friction.",
  },
  {
    id: "a3",
    title: "License managers: expiration UI, access gating, and admin controls",
    summary:
      "How to communicate access states with locked cards, expiration warnings, and a unified billing view.",
    tags: ["licenses", "admin", "security"],
    body:
      "This knowledge base article is a demo entry. It shows how UI can represent access tiers without requiring backend systems.",
  },
];

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const FAQS: FAQ[] = [
  {
    id: "f1",
    question: "Is this a live trading system?",
    answer:
      "Demo / Simulation Preview Only. This project is frontend-only and does not execute real trades or generate real earnings.",
  },
  {
    id: "f2",
    question: "How does licensing work here?",
    answer:
      "Licenses are generated in the UI and stored in localStorage to simulate key + expiration workflows.",
  },
  {
    id: "f3",
    question: "Can I connect Stripe or PayPal?",
    answer:
      "This static build focuses on UI/UX. Payment options can be represented visually, while crypto widget checkout can be embedded.",
  },
];
