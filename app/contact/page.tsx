import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Contact — AIProfitGen",
  description:
    "Contact AIProfitGen via interactive form, WhatsApp, and email. Demo / Simulation Preview Only.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <ContactClient />
    </div>
  );
}
