import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Blog / Knowledge Base — AIPROFITGEN",
  description:
    "Searchable AI-centric knowledge base with interactive FAQ accordion, premium UX, and product education. Demo / Simulation Preview Only.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <BlogClient />
    </div>
  );
}
