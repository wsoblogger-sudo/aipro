"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import DemoTerminal from "@/components/DemoTerminal";
import EarningsGraph from "@/components/EarningsGraph";
import { formatDateShort } from "@/lib/format";
import { TOOLS, type ToolDefinition } from "@/lib/tools";
import {
  getBilling,
  getPreferences,
  getSession,
  getToolAccessMap,
  isLicenseActive,
  logout,
  setPreferences,
} from "@/lib/storage";

function ToolStatusBadge({ tool, active }: { tool: ToolDefinition; active: boolean }) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2 py-1 text-xs ${
        active
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
          : "border-white/10 bg-white/5 text-zinc-300"
      }`}
    >
      {active ? "Unlocked" : "Locked"} · {tool.channel === "computer" ? "Computer" : "Online"}
    </div>
  );
}

export default function DashboardClient() {
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
  const toolAccess = useMemo(() => getToolAccessMap(), [refresh]);
  const billing = useMemo(() => getBilling(), [refresh]);
  const prefs = useMemo(() => getPreferences(), [refresh]);

  const filteredTools = useMemo(() => {
    if (!prefs.toolChannel) return TOOLS;
    return TOOLS.filter((t) => t.channel === prefs.toolChannel);
  }, [prefs.toolChannel]);

  if (!ready) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-14 text-zinc-200">
        Loading dashboard…
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Dark AI Dashboard</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-300">
            Locked/unlocked tool cards, demo terminal, fake earnings graphs, unified
            billing history, and license manager.
          </p>
          <div className="mt-3 text-xs text-zinc-400">
            Demo / Simulation Preview Only
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
            Logged in as <span className="text-white">{session?.email}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              logout();
              setRefresh((v) => v + 1);
              router.push("/");
            }}
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Logout
          </button>
          <Link
            href="/admin"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Admin (UI only)
          </Link>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => {
            setPreferences({ toolChannel: undefined });
            setRefresh((v) => v + 1);
          }}
          className={`rounded-full border px-3 py-1.5 text-sm ${
            !prefs.toolChannel
              ? "border-white/25 bg-white/10 text-white"
              : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
          }`}
        >
          All Tools
        </button>
        <button
          type="button"
          onClick={() => {
            setPreferences({ toolChannel: "computer" });
            setRefresh((v) => v + 1);
          }}
          className={`rounded-full border px-3 py-1.5 text-sm ${
            prefs.toolChannel === "computer"
              ? "border-cyan-400/40 bg-cyan-400/10 text-white"
              : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
          }`}
        >
          Computer Software
        </button>
        <button
          type="button"
          onClick={() => {
            setPreferences({ toolChannel: "online" });
            setRefresh((v) => v + 1);
          }}
          className={`rounded-full border px-3 py-1.5 text-sm ${
            prefs.toolChannel === "online"
              ? "border-fuchsia-400/40 bg-fuchsia-400/10 text-white"
              : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
          }`}
        >
          Online Tool
        </button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filteredTools.map((tool) => {
          const access = toolAccess[tool.id];
          const active = isLicenseActive(access);
          const expired = access?.unlocked && !active;

          return (
            <div
              key={tool.id}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-sm font-semibold tracking-wide text-white">
                      {tool.name}
                    </h2>
                    <ToolStatusBadge tool={tool} active={active} />
                    {expired ? (
                      <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-xs text-amber-200">
                        Expired
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    {tool.tagline}
                  </p>
                </div>
                <Image
                  src={tool.imageSrc}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-xl border border-white/10 bg-black/30 p-2"
                />
              </div>

              <div className="mt-4 grid gap-2 text-xs text-zinc-400">
                <div>
                  License key: {access?.licenseKey ? access.licenseKey : "—"}
                </div>
                <div>
                  Expires: {access?.expiresAt ? formatDateShort(access.expiresAt) : "—"}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={tool.href}
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View Live Demo
                </Link>
                <Link
                  href={tool.pricing === "widget" ? tool.href : tool.href}
                  className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
                >
                  Upgrade Tool Access
                </Link>
              </div>

              {!active ? (
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white">
                      Locked dashboard card. Unlock after payment success simulation.
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <EarningsGraph seed={1337} />
        <DemoTerminal />
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">
        <h2 className="text-lg font-semibold text-white">License manager</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Manage your active licenses and expiration windows.
        </p>

        <div className="mt-6 grid gap-3">
          {TOOLS.map((tool) => {
            const access = toolAccess[tool.id];
            const active = isLicenseActive(access);
            return (
              <div
                key={tool.id}
                className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="text-sm font-semibold text-white">{tool.name}</div>
                  <div className="mt-1 text-xs text-zinc-400">
                    {active
                      ? `Active until ${access?.expiresAt ? formatDateShort(access.expiresAt) : "—"}`
                      : "No active license"}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={tool.href}
                    className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    View Live Demo
                  </Link>
                  <Link
                    href={tool.href}
                    className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
                  >
                    Unlock AI Software
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">
        <h2 className="text-lg font-semibold text-white">Billing history</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Unified billing history view (simulated).
        </p>

        {billing.length === 0 ? (
          <div className="mt-5 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-300">
            No billing entries yet. Complete a payment success simulation from any
            pricing widget.
          </div>
        ) : (
          <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase tracking-widest text-zinc-400">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Tool</th>
                  <th className="px-4 py-3">Summary</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {billing.map((b) => (
                  <tr key={b.id} className="border-t border-white/10">
                    <td className="px-4 py-3 text-zinc-200">
                      {formatDateShort(b.createdAt)}
                    </td>
                    <td className="px-4 py-3 text-white">{getToolName(b.toolId)}</td>
                    <td className="px-4 py-3 text-zinc-200">{b.summary}</td>
                    <td className="px-4 py-3 text-zinc-400">{b.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setRefresh((v) => v + 1)}
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Refresh
          </button>
          <Link
            href="/pricing"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Upgrade Tool Access
          </Link>
        </div>
      </div>
    </div>
  );
}

function getToolName(toolId: ToolDefinition["id"]): string {
  return TOOLS.find((t) => t.id === toolId)?.name ?? toolId;
}
