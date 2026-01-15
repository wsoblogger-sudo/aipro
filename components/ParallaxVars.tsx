"use client";

import { useEffect } from "react";

export default function ParallaxVars() {
  useEffect(() => {
    const root = document.documentElement;

    let raf = 0;
    let mx = 0.5;
    let my = 0.5;
    let scrollY = window.scrollY;

    const commit = () => {
      raf = 0;
      root.style.setProperty("--mx", mx.toFixed(4));
      root.style.setProperty("--my", my.toFixed(4));
      root.style.setProperty("--scrollY", `${scrollY}px`);
    };

    const schedule = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(commit);
    };

    const onPointerMove = (e: PointerEvent) => {
      mx = Math.min(1, Math.max(0, e.clientX / window.innerWidth));
      my = Math.min(1, Math.max(0, e.clientY / window.innerHeight));
      schedule();
    };

    const onScroll = () => {
      scrollY = window.scrollY;
      schedule();
    };

    schedule();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
