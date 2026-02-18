"use client";

import { useEffect, useMemo, useState } from "react";

type Plan = { id: string; name: string; category: "web" | "software"; priceUsd: number; durationDays: number };
type UserPlan = { id: string; planId: string; status: string };
type Tool = { id: string; name: string; category: string };
type DashboardData = {
  dashboardConfig?: { announcements?: string[]; enabledFeatures?: { showWebPlans?: boolean; showSoftwarePlans?: boolean; showCashflow?: boolean } };
  webPlans?: Plan[];
  softwarePlans?: Plan[];
  userPlans?: UserPlan[];
  tools?: Tool[];
  error?: string;
};

export default function DashboardClient() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [licenseKey, setLicenseKey] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/auth/me");
    const payload = (await res.json()) as DashboardData;
    setData(payload);
    setLoading(false);
  }

  useEffect(() => {
    let mounted = true;
    (async () => {
      const res = await fetch("/api/auth/me");
      const payload = (await res.json()) as DashboardData;
      if (mounted) {
        setData(payload);
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const planStatusMap = useMemo(() => {
    const map = new Map<string, UserPlan[]>();
    (data?.userPlans ?? []).forEach((up: UserPlan) => {
      map.set(up.planId, [...(map.get(up.planId) ?? []), up]);
    });
    return map;
  }, [data]);

  async function purchase(planId: string) {
    await fetch("/api/purchase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planId }),
    });
    await load();
  }

  async function activate() {
    await fetch("/api/license/activate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ licenseKey, planId: selectedPlan }),
    });
    setLicenseKey("");
    await load();
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  }

  if (loading) return <main className="p-6">Loading dashboard...</main>;
  if (data?.error) return <main className="p-6">Unauthorized</main>;

  const webPlans = data?.webPlans ?? [];
  const softwarePlans = data?.softwarePlans ?? [];
  const tools = data?.tools ?? [];

  return (
    <main className="mx-auto min-h-screen max-w-6xl p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User Dashboard</h1>
        <button onClick={logout} className="rounded border px-3 py-2 text-sm">Logout</button>
      </div>

      {(data?.dashboardConfig?.announcements ?? []).map((a: string) => (
        <p key={a} className="mt-3 rounded bg-blue-50 p-2 text-sm text-blue-700">{a}</p>
      ))}

      {data?.dashboardConfig?.enabledFeatures?.showWebPlans !== false && (<section className="mt-6"><h2 className="text-xl font-semibold">Web Plans</h2><div className="mt-3 grid gap-3 md:grid-cols-2">{webPlans.map((plan) => (<div key={plan.id} className="rounded border p-4"><p className="font-semibold">{plan.name}</p><p className="text-sm text-zinc-600">${plan.priceUsd} / {plan.durationDays} days</p><p className="mt-1 text-xs">Status: {(planStatusMap.get(plan.id)?.[0]?.status ?? "not purchased")}</p><button onClick={() => purchase(plan.id)} className="mt-3 rounded bg-black px-3 py-2 text-xs text-white">Purchase</button></div>))}</div></section>)}

      {data?.dashboardConfig?.enabledFeatures?.showSoftwarePlans !== false && (<section className="mt-8"><h2 className="text-xl font-semibold">Software Plans</h2><div className="mt-3 grid gap-3 md:grid-cols-2">{softwarePlans.map((plan) => (<div key={plan.id} className="rounded border p-4"><p className="font-semibold">{plan.name}</p><p className="text-sm text-zinc-600">${plan.priceUsd} / {plan.durationDays} days</p><p className="mt-1 text-xs">Status: {(planStatusMap.get(plan.id)?.[0]?.status ?? "not purchased")}</p><button onClick={() => purchase(plan.id)} className="mt-3 rounded bg-black px-3 py-2 text-xs text-white">Purchase</button></div>))}</div><div className="mt-4 rounded border border-amber-200 bg-amber-50 p-4"><p className="font-semibold">Activate Software License Key</p><p className="text-xs text-zinc-600">License key is one-time and tied to one user and one plan.</p><div className="mt-2 flex flex-col gap-2 md:flex-row"><select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} className="rounded border p-2 text-sm"><option value="">Select software plan</option>{softwarePlans.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select><input value={licenseKey} onChange={(e) => setLicenseKey(e.target.value)} placeholder="XXXX-XXXX-XXXX-XXXX" className="rounded border p-2 text-sm" /><button onClick={activate} className="rounded bg-amber-600 px-3 py-2 text-xs text-white">Activate key</button></div></div></section>)}

      {data?.dashboardConfig?.enabledFeatures?.showCashflow !== false && (<section className="mt-8"><h2 className="text-xl font-semibold">Cashflow (6 Tools)</h2><div className="mt-3 grid gap-3 md:grid-cols-2">{tools.filter((tool) => tool.category === "cashflow").map((tool) => (<div key={tool.id} className="rounded border p-4"><p className="font-semibold">{tool.name}</p><p className="text-xs text-zinc-500">Access granted by your active plan permissions.</p></div>))}</div></section>)}
    </main>
  );
}
