"use client";

import { useEffect, useMemo, useState } from "react";
import { formatCurrencyUSD } from "@/lib/format";
import { maskHash, randomHex, randomInt } from "@/lib/random";

type FeedItem = {
  id: string;
  message: string;
  hash: string;
  createdAt: number;
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
    createdAt: Date.now(),
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
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold tracking-wide text-white">
          Live activity feed (simulated)
        </h2>
        <div className="text-xs text-zinc-400">Demo / Simulation Preview Only</div>
      </div>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <div className="text-sm text-zinc-100">{item.message}</div>
            <div className="text-xs text-zinc-400">tx: {maskHash(item.hash)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
