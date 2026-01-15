import Image from "next/image";
import Link from "next/link";
import type { ToolDefinition } from "@/lib/tools";

export default function ToolCard({ tool }: { tool: ToolDefinition }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
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

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={tool.href}
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
        >
          View Live Demo
        </Link>
        <Link
          href="/dashboard"
          className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
        >
          Access Dashboard
        </Link>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-2xl" />
        <div className="absolute -bottom-20 left-1/4 h-40 w-40 rounded-full bg-cyan-500/20 blur-2xl" />
      </div>
    </div>
  );
}
