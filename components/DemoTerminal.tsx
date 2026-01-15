"use client";

import { useEffect, useState } from "react";

const LOGS = [
  "Initializing AI module",
  "Syncing data",
  "Validating license",
  "Loading strategy models",
  "Generating simulated signals",
  "Simulation complete",
];

export default function DemoTerminal() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const timer = window.setInterval(() => {
      setLines((current) => [...current, LOGS[i] ?? ""]);
      i += 1;
      if (i >= LOGS.length) window.clearInterval(timer);
    }, 700);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-white">Demo terminal</h3>
        <div className="text-xs text-zinc-400">Demo / Simulation Preview Only</div>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-xs text-zinc-200">
        {lines.map((line, idx) => (
          <div key={`${idx}-${line}`}>{`> ${line}`}</div>
        ))}
        {lines.length < LOGS.length ? (
          <div className="text-zinc-500">&nbsp;</div>
        ) : null}
      </div>
    </div>
  );
}
