"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/content";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="glass-surface neon-outline rounded-3xl p-6">
      <div className="text-sm font-semibold tracking-wide text-white">FAQ</div>
      <div className="mt-4 grid gap-3">
        {faqs.map((faq) => {
          const isOpen = open === faq.id;
          return (
            <div
              key={faq.id}
              className="glass-surface overflow-hidden rounded-2xl"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : faq.id)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <div className="text-sm font-semibold text-white">
                  {faq.question}
                </div>
                <div className="text-xs text-zinc-400">{isOpen ? "−" : "+"}</div>
              </button>
              {isOpen ? (
                <div className="border-t border-white/10 px-4 py-3 text-sm leading-6 text-zinc-200">
                  {faq.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
