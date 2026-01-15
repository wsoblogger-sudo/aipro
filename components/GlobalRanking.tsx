"use client";

import { useEffect, useMemo, useState } from "react";
import { formatCurrencyUSD } from "@/lib/format";
import { maskHash, randomHex, randomInt } from "@/lib/random";

type RankRow = {
  id: string;
  user: string;
  earned: number;
  hash: string;
};

function newRow(i: number): RankRow {
  const hash = `0x${randomHex(20)}`;
  return {
    id: `${i}-${hash}`,
    user: `user_${maskHash(hash)}`,
    earned: randomInt(12000, 95000),
    hash,
  };
}

export default function GlobalRanking() {
  const initial = useMemo(() => Array.from({ length: 10 }, (_, i) => newRow(i)), []);
  const [rows, setRows] = useState<RankRow[]>(initial);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRows((current) => {
        const next = [...current];
        next.sort(() => Math.random() - 0.5);
        return next;
      });
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold tracking-wide text-white">
          Global ranking (simulated)
        </h2>
        <div className="text-xs text-zinc-400">random reorder</div>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-xs uppercase tracking-widest text-zinc-400">
            <tr>
              <th className="px-4 py-3">Rank</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Earned</th>
              <th className="px-4 py-3">Hash</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={row.id} className="border-t border-white/10">
                <td className="px-4 py-3 text-zinc-200">#{idx + 1}</td>
                <td className="px-4 py-3 text-white">{row.user}</td>
                <td className="px-4 py-3 text-zinc-200">
                  {formatCurrencyUSD(row.earned)}
                </td>
                <td className="px-4 py-3 text-zinc-400">{maskHash(row.hash)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
