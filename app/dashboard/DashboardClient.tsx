"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDateShort } from "@/lib/format";
import { TOOLS, pricingHref, productHref } from "@/lib/tools";
import {
  addTicket,
  getBilling,
  getPreferences,
  getProfile,
  getSession,
  getTickets,
  getToolAccessMap,
  isLicenseActive,
  logout,
  newUuid,
  setProfile,
  setPreferences,
} from "@/lib/storage";

export default function DashboardClient() {
  const router = useRouter();

  const [refresh, setRefresh] = useState(0);

  const session = getSession();
  const toolAccess = getToolAccessMap();
  const billing = getBilling();
  const tickets = getTickets();
  const prefs = getPreferences();
  const profile = getProfile();

  const [displayName, setDisplayName] = useState(profile.displayName ?? "");
  const [company, setCompany] = useState(profile.company ?? "");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (!session) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="glass-surface neon-outline rounded-3xl p-10">
          <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
          <p className="mt-3 text-sm text-zinc-300">
            Please login to access your dashboard.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/account/login"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Login
            </Link>
            <Link
              href="/account/register"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const filteredTools = !prefs.toolChannel
    ? TOOLS
    : TOOLS.filter((t) => t.channel === prefs.toolChannel);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Customer Dashboard</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-300">
            Purchased software list, download links, activation keys, subscription
            status, payment history, support tickets, tutorials, and profile
            customization.
          </p>
          <div className="mt-3 text-xs text-zinc-400">Demo / Simulation Preview Only</div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
            Logged in as <span className="text-white">{session.email}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              logout();
              setRefresh((v) => v + 1);
              router.push("/");
            }}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Logout
          </button>
          <Link
            href="/admin"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Admin
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
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
          All
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

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-white">Purchased software</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {filteredTools.map((tool) => {
            const access = toolAccess[tool.id];
            const active = isLicenseActive(access);

            return (
              <div
                key={tool.id}
                className="glass-surface relative overflow-hidden rounded-3xl p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white">{tool.name}</div>
                    <div className="mt-1 text-sm text-zinc-300">{tool.tagline}</div>
                    <div className="mt-3 text-xs text-zinc-400">
                      License: {access?.licenseKey ?? "—"}
                    </div>
                    <div className="mt-1 text-xs text-zinc-400">
                      Expires: {access?.expiresAt ? formatDateShort(access.expiresAt) : "—"}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs ${
                        active
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                          : "border-white/10 bg-white/5 text-zinc-300"
                      }`}
                    >
                      {active ? "Active" : "Locked"}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={productHref(tool.id)}
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    View
                  </Link>
                  <Link
                    href={pricingHref(tool.id)}
                    className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
                  >
                    Upgrade
                  </Link>
                  {tool.channel === "computer" ? (
                    <button
                      type="button"
                      className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      Download
                    </button>
                  ) : null}
                </div>

                {!active ? (
                  <div className="pointer-events-none absolute inset-0 bg-black/35" />
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="glass-surface neon-outline rounded-3xl p-8">
          <h2 className="text-lg font-semibold text-white">Payment history</h2>
          <div className="mt-2 text-sm text-zinc-300">Invoices (simulated)</div>

          {billing.length === 0 ? (
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-zinc-300">
              No billing entries yet.
            </div>
          ) : (
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-xs uppercase tracking-widest text-zinc-400">
                  <tr>
                    <th className="px-4 py-3">Date</th>
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
                      <td className="px-4 py-3 text-zinc-200">{b.summary}</td>
                      <td className="px-4 py-3 text-zinc-400">{b.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-6">
            <Link
              href="/pricing"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Buy Software
            </Link>
          </div>
        </div>

        <div className="glass-surface neon-outline rounded-3xl p-8">
          <h2 className="text-lg font-semibold text-white">Support tickets</h2>
          <div className="mt-2 text-sm text-zinc-300">UI demo</div>

          <div className="mt-5 grid gap-3">
            <label className="grid gap-2 text-sm text-zinc-200">
              Subject
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
              />
            </label>
            <label className="grid gap-2 text-sm text-zinc-200">
              Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-28 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
              />
            </label>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                if (!subject.trim() || !message.trim()) return;
                addTicket({
                  id: newUuid(),
                  createdAt: new Date().toISOString(),
                  subject: subject.trim(),
                  message: message.trim(),
                  status: "open",
                });
                setSubject("");
                setMessage("");
                setRefresh((v) => v + 1);
              }}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Create ticket
            </button>
            <button
              type="button"
              onClick={() => setRefresh((v) => v + 1)}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Refresh
            </button>
          </div>

          <div className="mt-6 grid gap-3">
            {tickets.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-zinc-300">
                No tickets yet.
              </div>
            ) : (
              tickets.slice(0, 5).map((t) => (
                <div key={t.id} className="glass-surface rounded-3xl p-5">
                  <div className="text-sm font-semibold text-white">{t.subject}</div>
                  <div className="mt-1 text-xs text-zinc-400">
                    {formatDateShort(t.createdAt)} · {t.status}
                  </div>
                  <div className="mt-3 text-sm leading-6 text-zinc-200">
                    {t.message}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="glass-surface neon-outline rounded-3xl p-8">
          <h2 className="text-lg font-semibold text-white">Tutorials</h2>
          <div className="mt-2 text-sm text-zinc-300">Guides (UI preview)</div>
          <div className="mt-5 grid gap-3">
            <div className="glass-surface rounded-3xl p-6 text-sm text-zinc-200">
              Getting started: product selection and demo navigation.
            </div>
            <div className="glass-surface rounded-3xl p-6 text-sm text-zinc-200">
              Licensing: activation keys and expiration windows.
            </div>
            <div className="glass-surface rounded-3xl p-6 text-sm text-zinc-200">
              Pricing: widget-based checkout and upgrade flow.
            </div>
          </div>
        </div>

        <div className="glass-surface neon-outline rounded-3xl p-8">
          <h2 className="text-lg font-semibold text-white">Profile</h2>
          <div className="mt-2 text-sm text-zinc-300">Profile customization</div>

          <div className="mt-5 grid gap-4">
            <label className="grid gap-2 text-sm text-zinc-200">
              Display name
              <input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
              />
            </label>
            <label className="grid gap-2 text-sm text-zinc-200">
              Company
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
              />
            </label>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                setProfile({ ...getProfile(), displayName, company });
                setRefresh((v) => v + 1);
              }}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Save profile
            </button>
            <Link
              href="/account/select"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Preferences
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
