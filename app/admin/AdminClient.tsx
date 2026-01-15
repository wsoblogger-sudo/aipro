"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TOOLS } from "@/lib/tools";
import {
  getAccounts,
  getSession,
  getToolAccessMap,
  newUuid,
  resetDemoData,
  setToolAccess,
} from "@/lib/storage";

export default function AdminClient() {
  const router = useRouter();
  const [refresh, setRefresh] = useState(0);

  const session = getSession();
  const access = getToolAccessMap();
  const accounts = getAccounts();

  if (!session) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="glass-surface neon-outline rounded-3xl p-10">
          <h1 className="text-3xl font-semibold text-white">Admin</h1>
          <p className="mt-3 text-sm text-zinc-300">
            Login required. This is an admin UI preview.
          </p>
          <div className="mt-6">
            <Link
              href="/account/login"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Admin Dashboard</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-300">
            Manage users, subscriptions/licenses, and demo data. UI-only.
          </p>
          <div className="mt-3 text-xs text-zinc-400">Demo / Simulation Preview Only</div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Customer Dashboard
          </Link>
          <button
            type="button"
            onClick={() => {
              resetDemoData();
              setRefresh((v) => v + 1);
              router.push("/");
            }}
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Reset demo data
          </button>
        </div>
      </div>

      <section className="mt-10 glass-surface neon-outline rounded-3xl p-8">
        <h2 className="text-lg font-semibold text-white">Users</h2>
        <p className="mt-2 text-sm text-zinc-300">Registered accounts (localStorage)</p>
        <div className="mt-5 grid gap-3">
          {accounts.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-zinc-300">
              No accounts yet.
            </div>
          ) : (
            accounts.slice(0, 8).map((a) => (
              <div key={a.email} className="glass-surface rounded-3xl p-5">
                <div className="text-sm font-semibold text-white">{a.email}</div>
                <div className="mt-1 text-xs text-zinc-400">Created: {a.createdAt}</div>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="mt-10 grid gap-4">
        {TOOLS.map((tool) => {
          const current = access[tool.id];
          const unlocked = Boolean(current?.unlocked);

          return (
            <div key={tool.id} className="glass-surface neon-outline rounded-3xl p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">{tool.name}</div>
                  <div className="mt-1 text-sm text-zinc-300">{tool.tagline}</div>
                  <div className="mt-2 text-xs text-zinc-400">
                    Current: {unlocked ? "Unlocked" : "Locked"}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (unlocked) {
                        setToolAccess({ toolId: tool.id, unlocked: false });
                      } else {
                        const now = new Date();
                        const expires = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
                        setToolAccess({
                          toolId: tool.id,
                          unlocked: true,
                          licenseKey: newUuid(),
                          purchasedAt: now.toISOString(),
                          expiresAt: expires.toISOString(),
                          source: "admin",
                        });
                      }
                      setRefresh((v) => v + 1);
                    }}
                    className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
                  >
                    Toggle access
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const now = new Date();
                      setToolAccess({
                        toolId: tool.id,
                        unlocked: true,
                        licenseKey: current?.licenseKey ?? newUuid(),
                        purchasedAt: current?.purchasedAt ?? now.toISOString(),
                        expiresAt: new Date(now.getTime() - 1000).toISOString(),
                        source: current?.source ?? "admin",
                      });
                      setRefresh((v) => v + 1);
                    }}
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Expire license
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
