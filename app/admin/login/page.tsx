"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function submit(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error ?? "Admin login failed");
    router.push("/admin/panel");
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center p-6">
      <form onSubmit={submit} className="w-full rounded border p-5">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <label className="mt-4 block text-sm">Username</label>
        <input className="mt-1 w-full rounded border p-2" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label className="mt-3 block text-sm">Password</label>
        <input className="mt-1 w-full rounded border p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <button className="mt-4 w-full rounded bg-black p-2 text-white">Login as admin</button>
      </form>
    </main>
  );
}
