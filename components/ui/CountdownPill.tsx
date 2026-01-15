"use client";

import { useEffect, useState } from "react";

function two(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

export default function CountdownPill() {
  const [left, setLeft] = useState(45 * 60 * 1000);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLeft((v) => {
        const next = Math.max(0, v - 1000);
        return next;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const total = Math.floor(left / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-zinc-200 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
      <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-widest text-zinc-100">
        Limited
      </span>
      <span className="font-mono">{two(m)}:{two(s)}</span>
    </div>
  );
}
