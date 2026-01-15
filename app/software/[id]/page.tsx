/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOFTWARE, softwareById, type SoftwareId } from "@/app/lib/software";

type Props = {
  params: { id: SoftwareId };
};

export function generateStaticParams() {
  return SOFTWARE.map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const software = softwareById(params.id);

  if (!software) {
    return { title: "Software Not Found" };
  }

  return {
    title: software.name,
    description: software.description,
  };
}

export default function SoftwarePage({ params }: Props) {
  const software = softwareById(params.id);

  if (!software) {
    notFound();
  }

  return (
    <>
      <section className="software-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div
                className={`software-icon-large ${
                  software.accent === "purple" ? "neon-glow-purple" : "neon-glow-cyan"
                }`}
              >
                {software.iconText}
              </div>
              <h1 className="software-page-title">{software.name}</h1>
              <p className="software-page-tagline">{software.tagline}</p>
              <div className="hero-actions">
                <a href="#pricing" className="button button-primary animate-pulse-glow">
                  Buy Software
                </a>
                <a href="/create-account" className="button button-secondary">
                  Create Account
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="mockup-container glass-strong neon-glow-purple animate-float">
                <div className="mockup-header">
                  <div className="mockup-dots" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="mockup-title">{software.name} Dashboard</div>
                </div>
                <div className="mockup-content">
                  <div className="mockup-chart" aria-hidden="true"></div>
                  <div className="mockup-stats" aria-hidden="true">
                    <div className="mockup-stat"></div>
                    <div className="mockup-stat"></div>
                    <div className="mockup-stat"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">Key Features</h2>
            <p className="section-description">
              Professional-grade automation tools built for reliability and control.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="feature-card card">
              <div className="feature-icon neon-glow-purple" aria-hidden="true">
                ⚡
              </div>
              <h3 className="feature-title">AI Automation</h3>
              <p className="feature-description">
                Intelligent workflow automation powered by advanced AI logic and
                data-driven decision trees.
              </p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon neon-glow-cyan" aria-hidden="true">
                🛡️
              </div>
              <h3 className="feature-title">Risk-Managed Logic</h3>
              <p className="feature-description">
                Built-in safety checks and configurable limits to help protect against
                unexpected outcomes.
              </p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon neon-glow-cyan" aria-hidden="true">
                📊
              </div>
              <h3 className="feature-title">Performance Optimization</h3>
              <p className="feature-description">
                Real-time analytics and performance tracking to help you monitor and
                improve automation efficiency.
              </p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon neon-glow-purple" aria-hidden="true">
                🎯
              </div>
              <h3 className="feature-title">Hands-Free Operation</h3>
              <p className="feature-description">
                Set your parameters once and let the software handle repetitive tasks
                without constant oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-radial">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">Video Showcase</h2>
            <p className="section-description">
              See {software.name} in action with real-world demonstrations.
            </p>
          </div>
          <div className="video-container glass-strong animate-border-flow">
            <div className="video-placeholder">
              <div className="video-play-button neon-glow-purple" aria-hidden="true">
                ▶
              </div>
              <p className="muted">Video demonstration coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">Interface Gallery</h2>
            <p className="section-description">Explore the premium UI and dashboard views.</p>
          </div>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="gallery-item card hover-lift transition-glow">
                <div className="gallery-placeholder glass">
                  <span className="muted">Screenshot {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-radial" id="pricing">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">Pricing Plans</h2>
            <p className="section-description">
              Transparent pricing with no hidden fees. Choose the tier that fits your needs.
            </p>
            <div className="pricing-toggle-wrapper">
              <span className="pricing-label">Monthly</span>
              <label className="toggle">
                <input type="checkbox" className="pricing-toggle" />
                <span className="toggle-slider"></span>
              </label>
              <span className="pricing-label">
                Yearly <span className="discount-badge">Save 20%</span>
              </span>
            </div>
          </div>

          <div className="pricing-section grid grid-cols-3">
            <div className="pricing-card card">
              <div className="pricing-tier">Basic</div>
              <div className="pricing-amount">
                $<span className="price-amount" data-monthly="97" data-yearly="77">97</span>
                <span className="pricing-period">/month</span>
              </div>
              <ul className="pricing-features">
                <li>✓ Core automation features</li>
                <li>✓ Standard support</li>
                <li>✓ Performance analytics</li>
                <li>✓ Up to 5 automations</li>
              </ul>
              <a href="/create-account?plan=basic" className="button button-secondary">
                Choose Basic
              </a>
            </div>

            <div className="pricing-card card pricing-featured neon-glow-purple">
              <div className="featured-badge">Most Popular</div>
              <div className="pricing-tier">Pro</div>
              <div className="pricing-amount">
                $<span className="price-amount" data-monthly="197" data-yearly="157">197</span>
                <span className="pricing-period">/month</span>
              </div>
              <ul className="pricing-features">
                <li>✓ All Basic features</li>
                <li>✓ Priority support</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Up to 25 automations</li>
                <li>✓ Custom configurations</li>
              </ul>
              <a href="/create-account?plan=pro" className="button button-primary">
                Choose Pro
              </a>
            </div>

            <div className="pricing-card card">
              <div className="pricing-tier">Enterprise</div>
              <div className="pricing-amount">
                $<span className="price-amount" data-monthly="497" data-yearly="397">497</span>
                <span className="pricing-period">/month</span>
              </div>
              <ul className="pricing-features">
                <li>✓ All Pro features</li>
                <li>✓ Dedicated support</li>
                <li>✓ White-label options</li>
                <li>✓ Unlimited automations</li>
                <li>✓ Custom integrations</li>
                <li>✓ API access</li>
              </ul>
              <a href="/create-account?plan=enterprise" className="button button-secondary">
                Choose Enterprise
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">Proof & Trust</h2>
            <p className="section-description">
              Informational counters and visual-only metrics (no guarantees).
            </p>
          </div>

          <div className="stats-grid grid grid-cols-3">
            <div className="stat-card card text-center">
              <div className="stat-value text-gradient" data-counter="8472">0</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-card card text-center">
              <div className="stat-value text-gradient" data-counter="524893">0</div>
              <div className="stat-label">Total Automations</div>
            </div>
            <div className="stat-card card text-center">
              <div className="stat-value text-gradient" data-counter="97">0</div>
              <div className="stat-label">Success Rate %</div>
            </div>
          </div>

          <div className="grid grid-cols-3" style={{ marginTop: "2rem" }}>
            <div className="proof-card card">
              <div className="proof-type">Wallet Transaction</div>
              <div className="proof-hash">0x91c0e2...b1f8aa</div>
              <div className="proof-detail">Confirmed</div>
            </div>
            <div className="proof-card card">
              <div className="proof-type">Wallet Transaction</div>
              <div className="proof-hash">0x33a91c...d2e7c4</div>
              <div className="proof-detail">Confirmed</div>
            </div>
            <div className="proof-card card">
              <div className="proof-type">Wallet Transaction</div>
              <div className="proof-hash">0x5e4a12...92bc10</div>
              <div className="proof-detail">Confirmed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-radial">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">Testimonials</h2>
            <p className="section-description">What {software.name} users are saying.</p>
          </div>
          <div className="grid grid-cols-3">
            <div className="testimonial-card card">
              <p className="testimonial-quote">
                "Professional-grade software with a clean interface. The automation logic is transparent and well-documented."
              </p>
              <div className="testimonial-author">
                <strong>James P.</strong>
                <span className="muted">{software.name} user · 5 months</span>
              </div>
            </div>
            <div className="testimonial-card card">
              <p className="testimonial-quote">
                "Excellent risk management features. I feel in control of my automation workflows at all times."
              </p>
              <div className="testimonial-author">
                <strong>Linda M.</strong>
                <span className="muted">{software.name} user · 7 months</span>
              </div>
            </div>
            <div className="testimonial-card card">
              <p className="testimonial-quote">
                "The performance analytics are detailed and the UI is genuinely fintech-grade."
              </p>
              <div className="testimonial-author">
                <strong>Robert K.</strong>
                <span className="muted">{software.name} user · 3 months</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section glass-strong">
        <div className="container text-center">
          <h2 className="cta-title text-gradient">Ready to Start?</h2>
          <p className="cta-description">
            Configure automation responsibly. Review logic, monitor activity, and stay in control.
          </p>
          <div className="cta-actions">
            <a href="#pricing" className="button button-primary animate-pulse-glow">
              Buy Software
            </a>
            <a href="/create-account" className="button button-secondary">
              Create Account
            </a>
          </div>
          <p className="disclaimer muted small">
            No guarantees. Software-based automation. User responsible for results.
          </p>
        </div>
      </section>
    </>
  );
}
