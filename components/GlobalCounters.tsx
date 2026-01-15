"use client";

import { useEffect, useMemo, useState } from "react";
import { formatCurrencyUSD, formatInt } from "@/lib/format";
import { randomInt } from "@/lib/random";

export default function GlobalCounters() {
  const initial = useMemo(
    () => ({
      totalUsers: 50000 + randomInt(12, 980),
      activeUsers: randomInt(8000, 50000),
      totalEarnings: 24000000 + randomInt(15000, 780000),
    }),
    [],
  );

  const [totalUsers, setTotalUsers] = useState(initial.totalUsers);
  const [activeUsers, setActiveUsers] = useState(initial.activeUsers);
  const [totalEarnings, setTotalEarnings] = useState(initial.totalEarnings);

  useEffect(() => {
    const usersTimer = window.setInterval(() => {
      setTotalUsers((v) => v + randomInt(1, 3));
    }, 1400);

    const activeTimer = window.setInterval(() => {
      setActiveUsers(randomInt(8000, 50000));
    }, 2200);

    const earningsTimer = window.setInterval(() => {
      setTotalEarnings((v) => v + randomInt(900, 4200));
    }, 1200);

    return () => {
      window.clearInterval(usersTimer);
      window.clearInterval(activeTimer);
      window.clearInterval(earningsTimer);
    };
  }, []);

  return (
    <div className="scene-3d grid gap-4 md:grid-cols-3">
      <div className="glass-surface hover-tilt relative overflow-hidden rounded-3xl p-6">
        <div
          aria-hidden
          className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-cyan-400/40 via-white/10 to-fuchsia-400/40"
        />
        <div className="relative pt-3">
          <div className="text-xs uppercase tracking-widest text-zinc-400">
            Total users
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">
            {formatInt(totalUsers)}+
          </div>
        </div>
      </div>

      <div className="glass-surface hover-tilt relative overflow-hidden rounded-3xl p-6">
        <div
          aria-hidden
          className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-cyan-400/40 via-white/10 to-fuchsia-400/40"
        />
        <div className="relative pt-3">
          <div className="text-xs uppercase tracking-widest text-zinc-400">
            Active users
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">
            {formatInt(activeUsers)}
          </div>
        </div>
      </div>

      <div className="glass-surface hover-tilt relative overflow-hidden rounded-3xl p-6">
        <div
          aria-hidden
          className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-cyan-400/40 via-white/10 to-fuchsia-400/40"
        />
        <div className="relative pt-3">
          <div className="text-xs uppercase tracking-widest text-zinc-400">
            Total earnings
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">
            {formatCurrencyUSD(totalEarnings)}+
          </div>
        </div>
      </div>
    </div>
  );
}
