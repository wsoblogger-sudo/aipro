import Image from "next/image";
import Link from "next/link";
import type { ToolDefinition } from "@/lib/tools";

export default function ToolCard({ tool }: { tool: ToolDefinition }) {
  return (
    <div className="glass-surface hover-tilt group relative overflow-hidden rounded-3xl p-6">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-fuchsia-500/18 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-cyan-500/18 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold tracking-wide text-white">
            {tool.name}
          </h3>
          <p className="text-sm leading-6 text-zinc-300">{tool.tagline}</p>
        </div>
        <Image
          src={tool.imageSrc}
          alt={tool.name}
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 rounded-xl border border-white/10 bg-black/30 p-2"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full border border-white/10 bg-black/30 px-2 py-1 text-zinc-200">
          {tool.channel === "computer" ? "Computer Software" : "Online Tool"}
        </span>
        <span className="rounded-full border border-white/10 bg-black/30 px-2 py-1 text-zinc-200">
          {tool.pricing === "widget" ? "Pricing Widget" : "Manual Plans"}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={tool.href}
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black shadow-[0_18px_40px_rgba(0,0,0,0.32)] transition-shadow hover:bg-zinc-200 hover:shadow-[0_24px_55px_rgba(0,0,0,0.5)]"
        >
          View Live Demo
        </Link>
        <Link
          href="/dashboard"
          className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-colors hover:bg-white/10"
        >
          Access Dashboard
        </Link>
      </div>
    </div>
  );
}
