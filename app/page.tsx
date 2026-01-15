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
    <div className="w-full">
      <section className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden border-b border-white/10">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="parallax-slow absolute -top-40 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="parallax-mid absolute -bottom-56 left-1/4 h-[680px] w-[680px] rounded-full bg-cyan-500/14 blur-3xl" />
          <div className="parallax-fast absolute inset-0 opacity-40">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                maskImage:
                  "radial-gradient(900px 520px at 50% 15%, black 40%, transparent 70%)",
              }}
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="scene-3d grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="glass-surface neon-outline hover-tilt relative rounded-3xl p-8 md:p-10">
              <div aria-hidden className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-white/10 bg-white/5 blur-[0.5px]" />
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
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
                  className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-shadow hover:bg-zinc-200 hover:shadow-[0_24px_55px_rgba(0,0,0,0.5)]"
                >
                  Unlock AI Software
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-colors hover:bg-white/10"
                >
                  Access Dashboard
                </Link>
                <Link
                  href="/account/register"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-colors hover:bg-white/10"
                >
                  Create Account
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="glass-surface neon-outline hover-tilt relative overflow-hidden rounded-3xl p-6">
                <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                <Image
                  src="/og.svg"
                  alt="Automated Income"
                  width={720}
                  height={378}
                  className="relative w-full rounded-2xl border border-white/10 bg-black/30 p-6"
                />
              </div>

              <div
                aria-hidden
                className="parallax-fast absolute -right-10 top-10 h-24 w-24 rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_55px_rgba(0,0,0,0.45)]"
              />
              <div
                aria-hidden
                className="parallax-mid absolute -bottom-10 left-10 h-20 w-20 rounded-full border border-white/10 bg-white/5 shadow-[0_18px_55px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>

          <div className="mt-10 md:mt-14">
            <GlobalCounters />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <section className="mt-4">
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

          <div className="scene-3d mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

          <div className="scene-3d -mx-6 mt-6 overflow-x-auto px-6 pb-6">
            <div className="flex min-w-full gap-5 snap-x snap-mandatory">
              {CASHFLOW_VIDEOS.map((v) => (
                <div
                  key={v.youtubeId}
                  className="device-frame hover-tilt relative w-[min(520px,88vw)] shrink-0 snap-center overflow-hidden rounded-3xl"
                >
                  <div className="border-b border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white">
                    {v.title}
                  </div>
                  <div className="relative p-4">
                    <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${v.youtubeId}`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div
                      aria-hidden
                      className="parallax-fast absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <LiveActivityFeed />
          <GlobalRanking />
        </section>

        <section className="glass-surface neon-outline hover-tilt mt-12 rounded-3xl p-8">
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
    </div>
  );
}
