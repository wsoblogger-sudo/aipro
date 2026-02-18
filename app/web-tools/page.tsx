import Link from "next/link";

const webTools = [
  "Cashflow Forecast",
  "Cashflow Optimizer",
  "Cashflow Trend Scanner",
  "Cashflow Risk Guard",
  "Cashflow Scenario Lab",
  "Cashflow Recovery Coach",
];

export default function WebToolsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Aiprofitgen Web Tools</h1>
      <p className="mt-2 text-sm text-zinc-600">Click any tool to register and unlock your dashboard.</p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {webTools.map((tool) => (
          <Link key={tool} href="/register" className="rounded border border-zinc-200 p-4 hover:bg-zinc-50">
            <p className="font-semibold">{tool}</p>
            <p className="text-xs text-zinc-500">Requires registration (email + password)</p>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <Link href="/login" className="rounded bg-black px-3 py-2 text-sm text-white">
          User Login
        </Link>
        <Link href="/admin/login" className="rounded border border-black px-3 py-2 text-sm">
          Admin Panel Login
        </Link>
      </div>
    </main>
  );
}
