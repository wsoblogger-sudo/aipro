"use client";

import { useEffect, useMemo, useState } from "react";
import { formatCurrencyUSD } from "@/lib/format";
import { maskHash, randomHex, randomInt } from "@/lib/random";

type FeedItem = {
  id: string;
  message: string;
  hash: string;
};

const COINS = ["BTC", "LTC", "ETH", "USDT"] as const;

function newFeedItem(): FeedItem {
  const coin = COINS[randomInt(0, COINS.length - 1)];
  const earned = randomInt(120, 950);
  const hash = `0x${randomHex(20)}`;
  return {
    id: `${Date.now()}-${Math.random()}`,
    message: `Cashflow ${coin} user earned ${formatCurrencyUSD(earned)} just now`,
    hash,
  };
}

export default function LiveActivityFeed() {
  const initial = useMemo(() => Array.from({ length: 6 }, () => newFeedItem()), []);
  const [items, setItems] = useState<FeedItem[]>(initial);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setItems((current) => [newFeedItem(), ...current].slice(0, 12));
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="glass-surface neon-outline hover-tilt relative overflow-hidden rounded-3xl p-6">
      <div aria-hidden className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/12 blur-3xl" />
      <div aria-hidden className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold tracking-wide text-white">
          Live activity feed (simulated)
        </h2>
        <div className="text-xs text-zinc-400">Demo / Simulation Preview Only</div>
      </div>

      <ul className="relative mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.id} className="glass-surface flex flex-col gap-1 rounded-2xl px-4 py-3">
            <div className="text-sm text-zinc-100">{item.message}</div>
            <div className="text-xs text-zinc-400">tx: {maskHash(item.hash)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
