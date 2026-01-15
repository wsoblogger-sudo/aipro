import type { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Login — Access Dashboard | Automated Income Suite",
  description:
    "Login to unlock AI trading software previews, automated income simulations, and a dark dashboard with licenses + billing history. Crypto money making SEO optimized.",
  path: "/account/login",
});

export default function LoginPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="max-w-xl">
        <LoginForm />
      </div>
    </div>
  );
}
