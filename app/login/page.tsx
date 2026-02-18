"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) return setError(data.error ?? "Login failed");
    router.push("/dashboard");
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center p-6">
      <form onSubmit={onSubmit} className="w-full rounded border border-zinc-200 p-5">
        <h1 className="text-2xl font-bold">User Login</h1>
        <label className="mt-4 block text-sm">Email</label>
        <input className="mt-1 w-full rounded border p-2" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="mt-3 block text-sm">Password</label>
        <input className="mt-1 w-full rounded border p-2" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <button disabled={loading} className="mt-4 w-full rounded bg-black p-2 text-white">{loading ? "Signing in..." : "Login"}</button>
        <p className="mt-3 text-sm text-zinc-600">
          No account? <Link href="/register" className="underline">Register</Link>
        </p>
      </form>
    </main>
  );
}
