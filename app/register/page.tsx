"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) return setError(data.error ?? "Registration failed");
    router.push("/dashboard");
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center p-6">
      <form onSubmit={onSubmit} className="w-full rounded border border-zinc-200 p-5">
        <h1 className="text-2xl font-bold">Register</h1>
        <p className="mt-1 text-sm text-zinc-600">Create your Aiprofitgen account.</p>
        <label className="mt-4 block text-sm">Email</label>
        <input className="mt-1 w-full rounded border p-2" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="mt-3 block text-sm">Password</label>
        <input className="mt-1 w-full rounded border p-2" type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <button disabled={loading} className="mt-4 w-full rounded bg-black p-2 text-white">
          {loading ? "Creating..." : "Create account"}
        </button>
      </form>
    </main>
  );
}
