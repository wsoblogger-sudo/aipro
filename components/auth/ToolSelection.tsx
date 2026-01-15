"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getPreferences, getSession, setPreferences } from "@/lib/storage";

export default function ToolSelection() {
  const router = useRouter();
  const [selected, setSelected] = useState<"computer" | "online">("online");

  useEffect(() => {
    const session = getSession();
    if (!session) {
      router.push("/account/login");
      return;
    }

    const prefs = getPreferences();
    if (prefs.toolChannel) {
      const timer = window.setTimeout(() => {
        setSelected(prefs.toolChannel!);
      }, 0);
      return () => window.clearTimeout(timer);
    }
  }, [router]);

  return (
    <div className="glass-surface neon-outline rounded-3xl p-8">
      <h1 className="text-3xl font-semibold text-white">Tool selection</h1>
      <p className="mt-3 text-sm text-zinc-300">
        Choose what you want to focus on first.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <button
          type="button"
          onClick={() => setSelected("computer")}
          className={`rounded-2xl border px-4 py-4 text-left transition-colors ${
            selected === "computer"
              ? "border-cyan-400/40 bg-cyan-400/10"
              : "border-white/10 bg-white/5 hover:bg-white/10"
          }`}
        >
          <div className="text-sm font-semibold text-white">Computer Software</div>
          <div className="mt-1 text-sm text-zinc-300">
            Desktop tools, installers, and performance-focused automation previews.
          </div>
        </button>

        <button
          type="button"
          onClick={() => setSelected("online")}
          className={`rounded-2xl border px-4 py-4 text-left transition-colors ${
            selected === "online"
              ? "border-fuchsia-400/40 bg-fuchsia-400/10"
              : "border-white/10 bg-white/5 hover:bg-white/10"
          }`}
        >
          <div className="text-sm font-semibold text-white">Online Tool</div>
          <div className="mt-1 text-sm text-zinc-300">
            Browser dashboards, widgets, and instant tool access.
          </div>
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            setPreferences({ toolChannel: selected });
            router.push("/dashboard");
          }}
          className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
        >
          Continue
        </button>

        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
