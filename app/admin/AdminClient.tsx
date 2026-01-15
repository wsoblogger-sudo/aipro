"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { TOOLS } from "@/lib/tools";
import {
  getSession,
  getToolAccessMap,
  newUuid,
  resetDemoData,
  setToolAccess,
} from "@/lib/storage";

export default function AdminClient() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const session = getSession();
    if (!session) {
      router.push("/account/login");
      return;
    }

    const timer = window.setTimeout(() => setReady(true), 0);
    return () => window.clearTimeout(timer);
  }, [router]);

  const session = useMemo(() => getSession(), [refresh]);
  const access = useMemo(() => getToolAccessMap(), [refresh]);

  if (!ready) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-14 text-zinc-200">
        Loading admin…
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Admin (UI only)</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-300">
            Toggle tool access, expire licenses, and reset demo data. No backend.
          </p>
          <div className="mt-3 text-xs text-zinc-400">
            Logged in as {session?.email}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Back to Dashboard
          </Link>
          <button
            type="button"
            onClick={() => {
              resetDemoData();
              setRefresh((v) => v + 1);
            }}
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Reset demo data
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-4">
        {TOOLS.map((tool) => {
          const current = access[tool.id];
          const unlocked = Boolean(current?.unlocked);

          return (
            <div
              key={tool.id}
              className="rounded-2xl border border-white/10 bg-black/30 p-6"
            >
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
                    className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
                  >
                    Toggle tool access
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
                    className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Expire license
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
