"use client";

import { useEffect, useState } from "react";

type AdminData = {
  users: Array<{ id: string; email: string; active: boolean }>;
  plans: Array<{ id: string; name: string; category: string; priceUsd: number; durationDays: number; enabled: boolean }>;
  tools: Array<{ id: string; name: string; category: string; enabled: boolean }>;
  licenseKeys: Array<{ id: string; key: string; planId: string; activatedByUserId?: string; disabled: boolean }>;
  dashboardConfig: { enabledFeatures: { showWebPlans: boolean; showSoftwarePlans: boolean; showCashflow: boolean }; announcements: string[] };
};

export default function AdminPanelClient() {
  const [state, setState] = useState<AdminData | null>(null);
  const [announcementText, setAnnouncementText] = useState("");

  async function load() {
    const [users, plans, tools, keys, dashboard] = await Promise.all([
      fetch("/api/admin/users").then((r) => r.json()),
      fetch("/api/admin/plans").then((r) => r.json()),
      fetch("/api/admin/tools").then((r) => r.json()),
      fetch("/api/admin/license-keys").then((r) => r.json()),
      fetch("/api/admin/dashboard").then((r) => r.json()),
    ]);
    const nextState: AdminData = {
      users: users.users ?? [],
      plans: plans.plans ?? [],
      tools: tools.tools ?? [],
      licenseKeys: keys.licenseKeys ?? [],
      dashboardConfig: dashboard.dashboardConfig,
    };
    setState(nextState);
    setAnnouncementText((nextState.dashboardConfig?.announcements ?? []).join("\n"));
  }

  useEffect(() => {
    let mounted = true;
    (async () => {
      const [users, plans, tools, keys, dashboard] = await Promise.all([
        fetch("/api/admin/users").then((r) => r.json()),
        fetch("/api/admin/plans").then((r) => r.json()),
        fetch("/api/admin/tools").then((r) => r.json()),
        fetch("/api/admin/license-keys").then((r) => r.json()),
        fetch("/api/admin/dashboard").then((r) => r.json()),
      ]);
      const nextState: AdminData = {
        users: users.users ?? [],
        plans: plans.plans ?? [],
        tools: tools.tools ?? [],
        licenseKeys: keys.licenseKeys ?? [],
        dashboardConfig: dashboard.dashboardConfig,
      };
      if (mounted) {
        setState(nextState);
        setAnnouncementText((nextState.dashboardConfig?.announcements ?? []).join("\n"));
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  if (!state) return <main className="p-6">Loading admin panel...</main>;

  return (
    <main className="mx-auto min-h-screen max-w-7xl p-6">
      <div className="flex items-center justify-between"><h1 className="text-3xl font-bold">Admin Panel</h1><button onClick={logout} className="rounded border px-3 py-2 text-sm">Logout</button></div>

      <section className="mt-6 rounded border p-4"><h2 className="font-semibold">User Management</h2>{state.users.map((u) => (<div key={u.id} className="mt-2 rounded border p-2 text-sm"><div className="flex items-center justify-between"><span>{u.email}</span><div className="flex gap-2"><button onClick={async () => { await fetch('/api/admin/users', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: u.id, action: 'setActive', value: !u.active }) }); await load(); }} className="rounded border px-2 py-1">{u.active ? "Deactivate" : "Activate"}</button><button onClick={async () => { await fetch('/api/admin/users', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: u.id, action: 'resetPassword', value: 'Temp@12345' }) }); }} className="rounded border px-2 py-1">Reset password</button><button onClick={async () => { await fetch('/api/admin/users', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: u.id }) }); await load(); }} className="rounded border px-2 py-1">Delete</button></div></div><div className="mt-2 flex gap-2"><select id={`assign-${u.id}`} className="rounded border px-2 py-1"><option value="">Assign plan</option>{state.plans.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select><button onClick={async () => { const value = (document.getElementById(`assign-${u.id}`) as HTMLSelectElement)?.value; if (!value) return; await fetch('/api/admin/plans', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ kind: 'assign', userId: u.id, planId: value }) }); await load(); }} className="rounded border px-2 py-1">Assign</button></div></div>))}</section>

      <section className="mt-6 rounded border p-4"><h2 className="font-semibold">Plan Management</h2>{state.plans.map((p) => (<div key={p.id} className="mt-2 flex items-center justify-between rounded border p-2 text-sm"><span>{p.name} ({p.category}) - ${p.priceUsd} - {p.durationDays} days</span><div className="flex gap-2"><button onClick={async () => { await fetch('/api/admin/plans', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ planId: p.id, updates: { enabled: !p.enabled } }) }); await load(); }} className="rounded border px-2 py-1">{p.enabled ? "Disable" : "Enable"}</button>{p.category === "software" && <button onClick={async () => { await fetch('/api/admin/license-keys', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ planId: p.id }) }); await load(); }} className="rounded bg-black px-2 py-1 text-white">Generate Key</button>}</div></div>))}</section>

      <section className="mt-6 rounded border p-4"><h2 className="font-semibold">Tool Management (Cashflow tools controlled individually)</h2>{state.tools.map((t) => (<div key={t.id} className="mt-2 flex items-center justify-between rounded border p-2 text-sm"><span>{t.name} [{t.category}]</span><button onClick={async () => { await fetch('/api/admin/tools', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ toolId: t.id, enabled: !t.enabled }) }); await load(); }} className="rounded border px-2 py-1">{t.enabled ? "Disable" : "Enable"}</button></div>))}</section>

      <section className="mt-6 rounded border p-4"><h2 className="font-semibold">License Key Management</h2>{state.licenseKeys.map((k) => (<div key={k.id} className="mt-2 rounded border p-2 text-xs"><p><strong>Key:</strong> {k.key}</p><p><strong>Plan:</strong> {k.planId}</p><p><strong>Activated By:</strong> {k.activatedByUserId ?? "Not used"}</p><button onClick={async () => { await fetch('/api/admin/license-keys', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ keyId: k.id, disabled: !k.disabled }) }); await load(); }} className="mt-1 rounded border px-2 py-1">{k.disabled ? "Enable" : "Disable"}</button></div>))}</section>

      <section className="mt-6 rounded border p-4"><h2 className="font-semibold">Dashboard Control</h2><div className="mt-2 flex flex-col gap-2 text-sm">{[["showWebPlans", "Show web plans"],["showSoftwarePlans", "Show software plans"],["showCashflow", "Show cashflow section"]].map(([key, label]) => (<label key={key} className="flex items-center gap-2"><input type="checkbox" checked={Boolean(state.dashboardConfig.enabledFeatures[key as keyof typeof state.dashboardConfig.enabledFeatures])} onChange={async (e) => { await fetch('/api/admin/dashboard', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ enabledFeatures: { [key]: e.target.checked } }) }); await load(); }} />{label}</label>))}</div><textarea className="mt-3 h-24 w-full rounded border p-2 text-xs" value={announcementText} onChange={(e) => setAnnouncementText(e.target.value)} /><button onClick={async () => { await fetch('/api/admin/dashboard', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ announcements: announcementText.split('\n').filter(Boolean) }) }); await load(); }} className="mt-2 rounded border px-2 py-1 text-sm">Save announcements</button></section>
    </main>
  );
}
