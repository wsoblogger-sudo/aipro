import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the AIPROFITGEN website and software platform.",
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h1 className="text-gradient-purple">Privacy Policy</h1>
          <p className="section-description">
            Placeholder policy. Update with your final privacy practices.
          </p>
        </div>

        <article className="card legal-content">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect account information (such as name and email), usage data, and support communications.
          </p>

          <h2>2. How We Use Information</h2>
          <p>
            We use information to provide and improve the platform, respond to support requests, process transactions, and maintain security.
          </p>

          <h2>3. Cookies</h2>
          <p>
            We may use cookies and similar technologies to improve site functionality and measure performance.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement reasonable security measures. No system is perfectly secure.
          </p>

          <h2>5. Third Parties</h2>
          <p>
            Some features may involve third-party services (such as payment providers). Their handling of data is governed by their own policies.
          </p>

          <h2>6. Updates</h2>
          <p>
            We may update this policy as practices evolve. Material changes will be posted on this page.
          </p>
        </article>
      </div>
    </section>
  );
}
