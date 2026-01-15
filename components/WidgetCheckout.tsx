"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { ToolId } from "@/lib/tools";
import { getTool } from "@/lib/tools";
import {
  addBilling,
  getSession,
  getToolAccessMap,
  isLicenseActive,
  newUuid,
  setToolAccess,
} from "@/lib/storage";

export default function WidgetCheckout({ toolId }: { toolId: ToolId }) {
  const tool = useMemo(() => getTool(toolId), [toolId]);
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const widgetMountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!tool.widgetScriptSrc) return;
    const mount = widgetMountRef.current;
    if (!mount) return;

    mount.innerHTML = "";

    const script = document.createElement("script");
    script.src = tool.widgetScriptSrc;
    script.async = false;
    mount.appendChild(script);

    return () => {
      mount.innerHTML = "";
    };
  }, [tool.widgetScriptSrc]);

  const canAccess = isLicenseActive(getToolAccessMap()[toolId]);

  function simulateSuccess() {
    const session = getSession();
    if (!session) {
      router.push("/account/login");
      return;
    }

    const now = new Date();
    const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    const licenseKey = newUuid();

    setToolAccess({
      toolId,
      unlocked: true,
      licenseKey,
      purchasedAt: now.toISOString(),
      expiresAt: expiresAt.toISOString(),
      source: "widget",
    });

    addBilling({
      id: newUuid(),
      createdAt: now.toISOString(),
      toolId,
      summary: `${tool.name} — payment success simulation`,
      status: "simulated",
    });

    setStatus("success");
    router.push("/dashboard");
  }

  return (
    <section className="glass-surface neon-outline rounded-3xl p-6">
      <h2 className="text-lg font-semibold text-white">Pricing (Widget)</h2>
      <p className="mt-2 text-sm leading-6 text-zinc-300">
        Use the embedded checkout widget below. After payment completes, you can
        unlock dashboard access.
      </p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
        {tool.widgetScriptSrc ? (
          <div>
            <div className="text-xs uppercase tracking-widest text-zinc-400">
              Widget script
            </div>
            <div className="mt-3 text-xs text-zinc-300">
              <code className="break-all">{`<script src=\"${tool.widgetScriptSrc}\"></script>`}</code>
            </div>
            <div
              ref={widgetMountRef}
              className="mt-5 rounded-xl border border-white/10 bg-black/50 p-4"
            />
          </div>
        ) : (
          <div className="text-sm text-zinc-300">No widget configured.</div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={simulateSuccess}
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
        >
          Buy Software
        </button>

        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
        >
          Create Account
        </button>
      </div>

      <div className="mt-4 text-xs text-zinc-400">
        {canAccess
          ? "License active. Tool unlocked in your dashboard."
          : "Locked until payment success simulation completes."}
      </div>

      {status === "success" ? (
        <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Payment success simulated. License created and tool unlocked.
        </div>
      ) : null}
    </section>
  );
}
