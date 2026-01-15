"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/storage";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      className="rounded-2xl border border-white/10 bg-black/30 p-6"
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
      <h1 className="text-xl font-semibold text-white">Login</h1>
      <p className="mt-2 text-sm text-zinc-300">
        Frontend-only (localStorage) account access.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm text-zinc-200">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:border-white/25"
            placeholder="you@domain.com"
            autoComplete="email"
          />
        </label>

        <label className="grid gap-2 text-sm text-zinc-200">
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:border-white/25"
            type="password"
            autoComplete="current-password"
          />
        </label>
      </div>

      {error ? (
        <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
        >
          Access Dashboard
        </button>

        <button
          type="button"
          className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          onClick={() => router.push("/account/register")}
        >
          Create Account
        </button>
      </div>
    </form>
  );
}
