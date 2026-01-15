import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description:
    "Join the AIPROFITGEN affiliate program and earn commissions promoting professional AI automation tools.",
};

export default function AffiliatePage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h1 className="text-gradient-purple">Affiliate Program</h1>
            <p className="section-description">
              Promote professional AI automation tools and earn competitive commissions.
            </p>
          </div>

          <div className="affiliate-visual">
            <div className="mockup-container glass-strong neon-glow-purple">
              <div className="affiliate-dashboard">
                <div className="dashboard-stat">
                  <div className="stat-label">Total Earnings</div>
                  <div className="stat-value text-gradient">$12,847</div>
                </div>
                <div className="dashboard-stat">
                  <div className="stat-label">Active Referrals</div>
                  <div className="stat-value text-gradient">47</div>
                </div>
                <div className="dashboard-stat">
                  <div className="stat-label">Conversion Rate</div>
                  <div className="stat-value text-gradient">8.3%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 mb-12">
            <div className="card text-center">
              <div className="commission-tier text-gradient-purple">Tier 1</div>
              <div className="commission-rate">25%</div>
              <p className="muted">First-time purchases</p>
            </div>
            <div className="card text-center neon-glow-purple">
              <div className="commission-tier text-gradient-purple">Tier 2</div>
              <div className="commission-rate">30%</div>
              <p className="muted">10+ referrals/month</p>
            </div>
            <div className="card text-center">
              <div className="commission-tier text-gradient-purple">Tier 3</div>
              <div className="commission-rate">35%</div>
              <p className="muted">50+ referrals/month</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-radial">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">How to Join</h2>
            <p className="section-description">Simple, transparent, and designed for growth.</p>
          </div>

          <div className="grid grid-cols-3">
            <div className="step-card card">
              <div className="step-number neon-glow-purple">1</div>
              <h3 className="step-title">Sign Up Free</h3>
              <p className="step-description">
                Create your affiliate account and get instant access to your unique referral links.
              </p>
            </div>
            <div className="step-card card">
              <div className="step-number neon-glow-cyan">2</div>
              <h3 className="step-title">Share & Promote</h3>
              <p className="step-description">
                Share your links through your channels. Misleading claims are not allowed.
              </p>
            </div>
            <div className="step-card card">
              <div className="step-number neon-glow-purple">3</div>
              <h3 className="step-title">Earn Commissions</h3>
              <p className="step-description">
                Receive commissions for purchases made through your referral links, subject to policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">Affiliate FAQ</h2>
          </div>

          <div className="faq-grid">
            <details className="faq-item card">
              <summary className="faq-question">How do I get paid?</summary>
              <p className="faq-answer">
                Commissions are paid monthly via supported payout methods. Minimum payout threshold may apply.
              </p>
            </details>
            <details className="faq-item card">
              <summary className="faq-question">What is the cookie duration?</summary>
              <p className="faq-answer">
                Cookie duration can vary by campaign. Current duration will be shown in your affiliate dashboard.
              </p>
            </details>
            <details className="faq-item card">
              <summary className="faq-question">Can I promote on social media?</summary>
              <p className="faq-answer">
                Yes, as long as you follow our guidelines and the platform terms. No misleading claims.
              </p>
            </details>
            <details className="faq-item card">
              <summary className="faq-question">Is there recurring commission?</summary>
              <p className="faq-answer">
                Commission rules depend on the plan and campaign. Details are shown in your affiliate portal.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="section cta-section glass-strong">
        <div className="container text-center">
          <h2 className="cta-title text-gradient">Join the Affiliate Program</h2>
          <p className="cta-description">
            Start earning commissions by promoting professional AI automation tools.
          </p>
          <div className="cta-actions">
            <a href="/create-account?type=affiliate" className="button button-primary animate-pulse-glow">
              Join Affiliate Program
            </a>
            <a href="/contact" className="button button-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
