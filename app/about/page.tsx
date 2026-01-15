import type { Metadata } from "next";
import Image from "next/image";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "About — AIPROFITGEN",
  description:
    "Company story, mission, and team presentation for an AI-centric software platform experience. Demo / Simulation Preview Only.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <section className="scene-3d grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="glass-surface neon-outline hover-tilt rounded-3xl p-10">
          <h1 className="text-4xl font-semibold tracking-tight text-white">About</h1>
          <p className="mt-4 text-sm leading-7 text-zinc-200">
            Company story, mission, and team.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="glass-surface rounded-3xl p-6">
              <div className="text-sm font-semibold text-white">Story</div>
              <div className="mt-2 text-sm leading-6 text-zinc-300">
                AIPROFITGEN is presented as a premium AI-centric product experience.
              </div>
            </div>
            <div className="glass-surface rounded-3xl p-6">
              <div className="text-sm font-semibold text-white">Mission</div>
              <div className="mt-2 text-sm leading-6 text-zinc-300">
                Build clean, futuristic interfaces with clear demo labeling and trust-first UX.
              </div>
            </div>
            <div className="glass-surface rounded-3xl p-6">
              <div className="text-sm font-semibold text-white">Team</div>
              <div className="mt-2 text-sm leading-6 text-zinc-300">
                A compact product team focused on UI, motion, and platform clarity.
              </div>
            </div>
            <div className="glass-surface rounded-3xl p-6">
              <div className="text-sm font-semibold text-white">Trust</div>
              <div className="mt-2 text-sm leading-6 text-zinc-300">
                Transparent simulations, consistent CTAs, and structured policy pages.
              </div>
            </div>
          </div>
        </div>

        <div className="glass-surface neon-outline hover-tilt rounded-3xl p-6">
          <div className="device-frame relative overflow-hidden rounded-3xl p-6">
            <div className="text-xs uppercase tracking-widest text-zinc-400">
              Interface showcase
            </div>
            <Image
              src="/og.svg"
              alt="Automated Income"
              width={900}
              height={472}
              className="mt-4 w-full rounded-2xl border border-white/10 bg-black/30 p-6"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
