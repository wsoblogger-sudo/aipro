"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ExitIntent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = window.localStorage.getItem("ui.exitIntent.v1");
    if (seen) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        window.localStorage.setItem("ui.exitIntent.v1", "1");
      }
    };

    window.addEventListener("mouseleave", onMouseLeave);
    return () => window.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-6 backdrop-blur">
      <div className="glass-surface neon-outline w-full max-w-lg rounded-3xl p-8">
        <div className="text-sm font-semibold text-white">
          Limited-time access (UI preview)
        </div>
        <div className="mt-2 text-sm leading-6 text-zinc-200">
          Explore pricing widgets and unlock the dashboard preview.
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/pricing"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Buy Software
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
