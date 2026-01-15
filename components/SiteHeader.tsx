"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { TOOLS } from "@/lib/tools";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const products = useMemo(() => TOOLS, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.45)]" />
          <div className="flex flex-col leading-tight">
            <div className="text-sm font-semibold tracking-wide text-white">
              AIPROFITGEN
            </div>
            <div className="text-xs text-zinc-400">
              Automated Money Making Software
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm text-zinc-200 md:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 font-semibold text-white hover:bg-white/10"
            >
              Products
            </button>
            {open ? (
              <div
                className="absolute left-0 top-[calc(100%+10px)] w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 shadow-[0_35px_90px_rgba(0,0,0,0.6)] backdrop-blur"
                onMouseLeave={() => setOpen(false)}
              >
                <div className="grid gap-2 p-3 sm:grid-cols-2">
                  {products.map((tool) => (
                    <Link
                      key={tool.id}
                      href={`/products/${tool.id}`}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                    >
                      <div className="text-sm font-semibold text-white">
                        {tool.name}
                      </div>
                      <div className="mt-1 text-xs leading-5 text-zinc-400">
                        {tool.tagline}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-white/10 p-3">
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/products"
                      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
                    >
                      Products Overview
                    </Link>
                    <Link
                      href="/pricing"
                      className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      Pricing
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link href="/dashboard" className="hover:text-white">
            Dashboard
          </Link>
          <Link
            href="/account/login"
            className="rounded-xl bg-white px-3 py-2 font-semibold text-black hover:bg-zinc-200"
          >
            Login
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Link
            href="/dashboard"
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
