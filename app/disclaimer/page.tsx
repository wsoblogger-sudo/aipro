import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer / Risk Notice",
  description: "Risk notice and disclaimer for using AIPROFITGEN software-based automation tools.",
};

export default function DisclaimerPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h1 className="text-gradient-purple">Disclaimer / Risk Notice</h1>
          <p className="section-description">
            Soft informational tone. No guarantees. Software-based automation tools only.
          </p>
        </div>

        <article className="card legal-content">
          <h2>No Guarantees of Profit</h2>
          <p>
            AIPROFITGEN does not guarantee profits, earnings, or specific outcomes. Any visuals, counters, or examples are illustrative and may use simulated data.
          </p>

          <h2>Software-Based Automation</h2>
          <p>
            Our products are software tools that help automate workflows. Automation can involve risk, including unexpected outcomes due to configuration, market conditions, third-party services, or technical limitations.
          </p>

          <h2>User Responsibility</h2>
          <p>
            You are responsible for understanding how the software works, reviewing logic and settings, and ensuring your use complies with applicable laws and third-party terms.
          </p>

          <h2>No Financial Advice</h2>
          <p>
            Content provided by AIPROFITGEN is for informational purposes only and does not constitute financial, legal, or tax advice.
          </p>

          <h2>Compliance</h2>
          <p>
            You must comply with local laws and regulations. If you are uncertain about legal or compliance requirements, consult a qualified professional.
          </p>
        </article>
      </div>
    </section>
  );
}
