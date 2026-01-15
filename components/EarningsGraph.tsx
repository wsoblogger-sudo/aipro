"use client";

import { useMemo } from "react";
import { seededRandom } from "@/lib/random";

function points(seed: number): string {
  const rand = seededRandom(seed);
  const w = 320;
  const h = 120;
  const n = 24;
  let out = "";
  for (let i = 0; i < n; i += 1) {
    const x = (i / (n - 1)) * w;
    const y = h - rand() * (h - 10) - 5;
    out += `${x.toFixed(1)},${y.toFixed(1)} `;
  }
  return out.trim();
}

export default function EarningsGraph({ seed }: { seed: number }) {
  const polyline = useMemo(() => points(seed), [seed]);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="text-sm font-semibold text-white">Earnings graph (fake)</div>
      <div className="mt-2 text-xs text-zinc-400">Demo / Simulation Preview Only</div>
      <svg
        viewBox="0 0 320 120"
        className="mt-4 h-32 w-full overflow-visible"
        role="img"
        aria-label="Simulated earnings chart"
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="1" stopColor="#a78bfa" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <polyline
          points={polyline}
          fill="none"
          stroke="url(#g)"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
