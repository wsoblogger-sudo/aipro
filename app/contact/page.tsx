import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Contact — AIPROFITGEN",
  description:
    "Contact AIPROFITGEN via interactive form, WhatsApp share link, and email. Trust-first demo / simulation experience.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <ContactClient />
    </div>
  );
}
