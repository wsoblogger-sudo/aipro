import type { Metadata } from "next";
import RegisterForm from "@/components/auth/RegisterForm";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Create Account — AIProfitGen",
  description:
    "Create an account to unlock the dashboard preview, licenses, and product access. Demo / Simulation Preview Only.",
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
