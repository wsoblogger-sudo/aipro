"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "@/lib/storage";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      className="glass-surface neon-outline rounded-3xl p-8"
      onSubmit={(e) => {
        e.preventDefault();
        const res = login(email, password);
        if (!res.ok) {
          setError(res.error ?? "Login failed");
          return;
        }
        router.push("/dashboard");
      }}
    >
      <h1 className="text-3xl font-semibold text-white">Login</h1>
      <p className="mt-3 text-sm text-zinc-300">Secure demo login (localStorage).</p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm text-zinc-200">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
            placeholder="you@domain.com"
            autoComplete="email"
          />
        </label>

        <label className="grid gap-2 text-sm text-zinc-200">
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
            type="password"
            autoComplete="current-password"
          />
        </label>
      </div>

      {error ? (
        <div className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200"
        >
          Access Dashboard
        </button>
        <Link
          href="/account/register"
          className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
        >
          Create Account
        </Link>
      </div>
    </form>
  );
}
