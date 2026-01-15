import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about the AIPROFITGEN software suite, subscriptions, payments, and affiliate program.",
};

const FAQ = [
  {
    category: "General",
    items: [
      {
        q: "What is AIPROFITGEN?",
        a: "AIPROFITGEN is a premium AI fintech software ecosystem focused on automation tools, dashboards, and workflow systems. It is software-first and designed for users who value clarity and control.",
      },
      {
        q: "Do you guarantee profits or outcomes?",
        a: "No. We do not guarantee profits or specific outcomes. These are software-based automation tools. Users remain responsible for decisions, configuration choices, and results.",
      },
      {
        q: "Is the platform beginner-friendly?",
        a: "Yes. We provide structured onboarding and documentation. Advanced settings are available for experienced users, but the interface is designed to be approachable.",
      },
    ],
  },
  {
    category: "Software",
    items: [
      {
        q: "Can I use multiple tools in the suite?",
        a: "Yes. You can subscribe to one or multiple products depending on your needs. Some users start with one tool and add others as they scale.",
      },
      {
        q: "What does 'AI automation' mean here?",
        a: "AI automation refers to software features that help configure, monitor, and optimize workflows using data-driven logic. It does not remove user responsibility or guarantee results.",
      },
      {
        q: "Do I need to keep the software running all day?",
        a: "That depends on the product and your configuration. Many automations are designed to run continuously, but you can pause, review, and adjust settings at any time.",
      },
    ],
  },
  {
    category: "Affiliate",
    items: [
      {
        q: "How does the affiliate program work?",
        a: "Affiliates receive tracking links and a dashboard. Commissions are earned when a user purchases through an affiliate link, subject to program policies.",
      },
      {
        q: "Are there restrictions on promotion?",
        a: "Yes. Affiliates must follow our guidelines and all platform terms. Misleading claims, unrealistic promises, and prohibited marketing practices are not allowed.",
      },
    ],
  },
  {
    category: "Payments",
    items: [
      {
        q: "What payment methods are supported?",
        a: "Payment methods may include cards, bank transfer, and/or cryptocurrency depending on region and availability. Final methods are shown at checkout.",
      },
      {
        q: "Can I cancel my subscription?",
        a: "Yes. You can cancel through your account settings. Access continues through the end of your billing period unless otherwise stated in your plan terms.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h1 className="text-gradient-purple">FAQ</h1>
          <p className="section-description">
            Clear answers in a trust-first tone. Search and browse by category.
          </p>
        </div>

        <div className="faq-search-wrap">
          <label className="faq-search-label" htmlFor="faq-search">
            Search questions
          </label>
          <input
            id="faq-search"
            className="faq-search-input"
            type="search"
            placeholder="Search FAQ..."
            autoComplete="off"
          />
        </div>

        <div className="faq-categories">
          {FAQ.map((cat) => (
            <div key={cat.category} className="faq-category">
              <h2 className="faq-category-title text-gradient">{cat.category}</h2>
              <div className="faq-list">
                {cat.items.map((item) => (
                  <details
                    key={item.q}
                    className="faq-item card"
                    data-faq-item
                    data-faq-text={(item.q + " " + item.a).toLowerCase()}
                  >
                    <summary className="faq-question">{item.q}</summary>
                    <p className="faq-answer">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
