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
      "The pricing experience is smooth and the license manager view is clear. Great UX for a demo platform.",
    toolId: "usdtrex-pro",
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
    title: "Automated income workflows: structuring a preview dashboard",
    summary:
      "A framework for presenting AI tools with clear demos, licensing UI, and a corporate product experience.",
    tags: ["ai", "dashboard", "ux"],
    body:
      "This knowledge base content is a demo entry. It focuses on layout, clarity, and the importance of labeling simulations.",
  },
  {
    id: "a2",
    title: "Pricing UX patterns: widget-first checkout flows",
    summary:
      "How to keep pricing simple while retaining trust signals and conversion-focused CTAs.",
    tags: ["pricing", "conversion"],
    body:
      "This knowledge base content is a demo entry. It highlights clear plan structure and reduced friction.",
  },
  {
    id: "a3",
    title: "License manager UI: expiration, gating, admin controls",
    summary:
      "How to communicate access states with locked cards, expiration warnings, and a unified billing view.",
    tags: ["licenses", "admin"],
    body:
      "This knowledge base content is a demo entry. It demonstrates UI representations without backend services.",
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
      "Demo / Simulation Preview Only. This project is a UI demo and does not execute real trades or generate real earnings.",
  },
  {
    id: "f2",
    question: "How does licensing work here?",
    answer:
      "Licenses are generated in the UI and stored in localStorage to simulate keys, expiration, and access gating.",
  },
  {
    id: "f3",
    question: "Are Stripe and PayPal supported?",
    answer:
      "This build focuses on UI/UX and can represent payment options visually. Crypto checkout widgets can be embedded.",
  },
];
