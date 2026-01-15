import type { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Login — AIProfitGen",
  description:
    "Login to access the customer dashboard, licenses, payment history, and support tickets. Demo / Simulation Preview Only.",
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
