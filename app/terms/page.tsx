import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for using the AIPROFITGEN website and software products.",
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h1 className="text-gradient-purple">Terms of Service</h1>
          <p className="section-description">
            Placeholder terms. Review and finalize with legal counsel.
          </p>
        </div>

        <article className="card legal-content">
          <h2>1. Software-Only Positioning</h2>
          <p>
            AIPROFITGEN provides software tools and automation features. We do not provide financial advice, investment advice, or guarantees of any outcome.
          </p>

          <h2>2. User Responsibility</h2>
          <p>
            You are responsible for how you configure, operate, and use the software. You must comply with applicable laws and third-party terms.
          </p>

          <h2>3. No Guarantees</h2>
          <p>
            We make no guarantees regarding performance, earnings, or results. Any examples or visuals are illustrative.
          </p>

          <h2>4. Accounts</h2>
          <p>
            You are responsible for safeguarding your account credentials. Notify us immediately if you suspect unauthorized access.
          </p>

          <h2>5. Acceptable Use</h2>
          <p>
            You agree not to misuse the platform, attempt unauthorized access, or distribute harmful content.
          </p>

          <h2>6. Changes</h2>
          <p>
            We may update these terms from time to time. Continued use of the platform after updates constitutes acceptance.
          </p>
        </article>
      </div>
    </section>
  );
}
