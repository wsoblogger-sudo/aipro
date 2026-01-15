"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.scrollY > 650;
  });

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 650);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm font-semibold text-white shadow-[0_24px_60px_rgba(0,0,0,0.55)] backdrop-blur hover:bg-black/70"
    >
      Back to top
    </button>
  );
}
