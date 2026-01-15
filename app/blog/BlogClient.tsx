"use client";

import { useMemo, useState } from "react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { ARTICLES, FAQS } from "@/lib/content";

export default function BlogClient() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ARTICLES;
    return ARTICLES.filter((a) => {
      const hay = `${a.title} ${a.summary} ${a.tags.join(" ")} ${a.body}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  return (
    <div className="grid gap-8">
      <div className="glass-surface neon-outline rounded-3xl p-8">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Blog / Knowledge Base
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-200">
          Searchable articles and interactive FAQ accordion.
        </p>
        <div className="mt-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/25"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {results.map((a) => (
          <article key={a.id} className="glass-surface hover-tilt rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">{a.title}</div>
            <div className="mt-2 text-sm leading-6 text-zinc-300">{a.summary}</div>
            <div className="mt-4 text-xs text-zinc-400">{a.tags.join(" · ")}</div>
            <div className="mt-5 text-sm leading-6 text-zinc-200">{a.body}</div>
          </article>
        ))}
      </div>

      <FAQAccordion faqs={FAQS} />

      <div className="glass-surface rounded-3xl p-8">
        <div className="text-sm font-semibold text-white">Comment / Q&A</div>
        <div className="mt-2 text-sm text-zinc-300">UI preview only</div>
        <div className="mt-5 grid gap-3">
          <div className="glass-surface rounded-3xl p-6 text-sm text-zinc-200">
            This section is a demo placeholder for a future comment system.
          </div>
        </div>
      </div>
    </div>
  );
}
