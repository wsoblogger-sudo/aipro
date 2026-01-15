"use client";

import { useEffect, useMemo, useState } from "react";
import type { Testimonial } from "@/lib/content";

function Stars({ rating }: { rating: number }) {
  const out = [];
  for (let i = 0; i < 5; i += 1) {
    out.push(
      <span key={i} className={i < rating ? "text-yellow-300" : "text-white/15"}>
        ★
      </span>,
    );
  }
  return <div className="text-sm leading-none">{out}</div>;
}

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const list = useMemo(() => testimonials, [testimonials]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((v) => (v + 1) % list.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [list.length]);

  return (
    <div className="scene-3d glass-surface neon-outline relative overflow-hidden rounded-3xl p-6">
      <div aria-hidden className="absolute -right-24 top-6 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold tracking-wide text-white">
          Testimonials (simulated)
        </h2>
        <div className="flex gap-2">
          {list.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => setActive(idx)}
              className={`h-2.5 w-2.5 rounded-full border transition-colors ${
                idx === active
                  ? "border-white/50 bg-white/50"
                  : "border-white/20 bg-white/10 hover:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative mt-5 grid gap-4 lg:grid-cols-3">
        {list.map((t, idx) => {
          const isActive = idx === active;
          return (
            <div
              key={t.id}
              className={`glass-surface hover-tilt relative rounded-3xl p-5 transition-opacity ${
                isActive ? "opacity-100" : "opacity-70 blur-[0.4px]"
              }`}
              style={{ transform: isActive ? "translateZ(38px)" : "translateZ(0px)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="mt-1 text-xs text-zinc-400">{t.role}</div>
                </div>
                <Stars rating={t.rating} />
              </div>
              <div className="mt-4 text-sm leading-6 text-zinc-200">“{t.quote}”</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
