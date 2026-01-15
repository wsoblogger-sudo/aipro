import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GlobalCounters from "@/components/GlobalCounters";
import GlobalRanking from "@/components/GlobalRanking";
import LiveActivityFeed from "@/components/LiveActivityFeed";
import ToolCard from "@/components/ToolCard";
import { createSeoMetadata } from "@/lib/seo";
import { CASHFLOW_VIDEOS, TOOLS } from "@/lib/tools";

export const metadata: Metadata = createSeoMetadata({
  title: "Crypto Money Making — Automated Income AI Trading Software",
  description:
    "Start automated income with AI trading software previews, pricing widgets, simulated dashboards, live activity feed, global ranking, and license tracking. Make money online with crypto.",
  path: "/",
});

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-black/30 to-black/50 p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-white">
              Start Automated Income
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-200">
              Crypto money making hub with pricing widgets, simulated dashboards,
              live activity feed, and locked tool access you can unlock after
              payment success simulation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
              >
                Unlock AI Software
              </Link>
              <Link
                href="/dashboard"
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Access Dashboard
              </Link>
              <Link
                href="/account/register"
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Create Account
              </Link>
            </div>
          </div>

          <Image
            src="/og.svg"
            alt="Automated Income"
            width={288}
            height={151}
            className="hidden w-72 rounded-2xl border border-white/10 bg-black/30 p-4 md:block"
          />
        </div>

        <div className="mt-10">
          <GlobalCounters />
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">All software cards</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Explore every tool, pricing integration, and manual plan page.
            </p>
          </div>
          <Link
            href="/pricing"
            className="text-sm font-semibold text-white underline underline-offset-4 hover:text-zinc-200"
          >
            Upgrade Tool Access
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white">Embedded videos</h2>
        <p className="mt-2 text-sm text-zinc-300">
          BTC / LTC / ETH / USDT previews (YouTube embeds).
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {CASHFLOW_VIDEOS.map((v) => (
            <div
              key={v.youtubeId}
              className="overflow-hidden rounded-2xl border border-white/10 bg-black/30"
            >
              <div className="border-b border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
                {v.title}
              </div>
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <LiveActivityFeed />
        <GlobalRanking />
      </section>

      <section className="mt-12 rounded-2xl border border-white/10 bg-black/30 p-8">
        <h2 className="text-2xl font-semibold text-white">CTA Copy</h2>
        <div className="mt-4 grid gap-2 text-sm text-zinc-200">
          <div>Start Automated Income</div>
          <div>Unlock AI Software</div>
          <div>Access Dashboard</div>
          <div>Upgrade Tool Access</div>
          <div>View Live Demo</div>
        </div>
      </section>
    </div>
  );
}
