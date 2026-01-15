"use client";

import { useState } from "react";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:support@aiprofitgen.app?subject=${encodeURIComponent(
    `AIPROFITGEN inquiry from ${name || "visitor"}`,
  )}&body=${encodeURIComponent(`Email: ${email}\n\n${message}`)}`;

  return (
    <div className="grid gap-8">
      <div className="glass-surface neon-outline rounded-3xl p-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Contact</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-200">
          Interactive form + WhatsApp integration + email.
        </p>
        <div className="mt-4 text-xs text-zinc-400">Demo / Simulation Preview Only</div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <form className="glass-surface rounded-3xl p-8">
          <div className="text-sm font-semibold text-white">Message</div>
          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm text-zinc-200">
              Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/25"
              />
            </label>
            <label className="grid gap-2 text-sm text-zinc-200">
              Email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/25"
              />
            </label>
            <label className="grid gap-2 text-sm text-zinc-200">
              Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-40 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/25"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={mailto}
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Email
            </a>
            <a
              href="https://wa.me/?text=I%20want%20to%20learn%20more%20about%20AIPROFITGEN%20%E2%80%94%20Automated%20Money%20Making%20Software"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-sm font-semibold text-emerald-100 hover:bg-emerald-400/15"
            >
              WhatsApp
            </a>
          </div>
        </form>

        <div className="glass-surface rounded-3xl p-8">
          <div className="text-sm font-semibold text-white">Support channels</div>
          <div className="mt-4 grid gap-3 text-sm text-zinc-300">
            <div className="glass-surface rounded-3xl p-6">
              WhatsApp share link opens with a prefilled message.
            </div>
            <div className="glass-surface rounded-3xl p-6">
              Email uses a mailto link generated from the form.
            </div>
            <div className="glass-surface rounded-3xl p-6">
              No backend is used in this demo.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
