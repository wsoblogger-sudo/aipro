import type { Metadata } from "next";
import RegisterForm from "@/components/auth/RegisterForm";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Create Account — Start Automated Income",
  description:
    "Create a mock account to unlock AI trading software dashboards, crypto money making previews, automated income simulations, and license tracking. Frontend-only access.",
  path: "/account/register",
});

export default function RegisterPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="max-w-xl">
        <RegisterForm />
      </div>
    </div>
  );
}
