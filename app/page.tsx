/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { SOFTWARE } from "./lib/software";

export const metadata: Metadata = {
  title: "Automated AI-Powered Income Systems",
  description:
    "One ecosystem. Multiple automated profit engines. Explore professional AI fintech automation tools designed for trust, control, and clarity.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="bg-gradient-radial hero-radial" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title text-gradient animate-slide-up">
              Automated AI-Powered Income Systems
            </h1>
            <p className="hero-subtitle animate-slide-up">
              One ecosystem. Multiple automated profit engines.
            </p>
            <div className="hero-actions animate-slide-up">
              <a
                href="#software"
                className="button button-primary animate-pulse-glow"
              >
                Explore Software
              </a>
              <a href="/create-account" className="button button-secondary">
                Create Account
              </a>
            </div>
            <button
              className="scroll-indicator"
              type="button"
              aria-label="Scroll down"
            >
              <div className="scroll-arrow" aria-hidden="true">
                ↓
              </div>
            </button>
          </div>
        </div>
      </section>

      <section id="software" className="section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">Software Ecosystem</h2>
            <p className="section-description">
              Professional AI automation tools designed for clarity, control, and
              responsible operations.
            </p>
          </div>

          <div className="grid grid-cols-3">
            {SOFTWARE.map((software, idx) => (
              <a
                key={software.id}
                href={`/software/${software.id}`}
                className="software-card card hover-lift transition-glow"
              >
                <div
                  className={`software-icon ${
                    software.accent === "purple"
                      ? "neon-glow-purple"
                      : "neon-glow-cyan"
                  }`}
                >
                  {software.iconText}
                </div>
                <h3 className="software-title">{software.name}</h3>
                <p className="software-description">{software.description}</p>
                <div
                  className="fake-counter"
                  data-counter={String(7200 + idx * 1800)}
                >
                  0
                </div>
                <span className="counter-label">Active automations</span>
                <span className="button button-secondary mt-4">View Software</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-radial">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">How It Works</h2>
            <p className="section-description">Three simple steps to automation.</p>
          </div>

          <div className="how-it-works-grid">
            <div className="step-card card">
              <div className="step-number neon-glow-purple">1</div>
              <h3 className="step-title">Choose Software</h3>
              <p className="step-description">
                Browse our suite of AI automation tools and select the one that
                fits your workflow needs.
              </p>
            </div>
            <div className="step-arrow" aria-hidden="true">
              →
            </div>
            <div className="step-card card">
              <div className="step-number neon-glow-cyan">2</div>
              <h3 className="step-title">Subscribe to Plan</h3>
              <p className="step-description">
                Pick a pricing tier that matches your scale. Transparent options,
                no hidden fees.
              </p>
            </div>
            <div className="step-arrow" aria-hidden="true">
              →
            </div>
            <div className="step-card card">
              <div className="step-number neon-glow-purple">3</div>
              <h3 className="step-title">Activate Automation</h3>
              <p className="step-description">
                Configure settings, review logic, and let the software handle
                repetitive tasks automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">Earnings Visualization</h2>
            <p className="section-description">
              Visual-only examples and simulated charts to illustrate real-time
              growth monitoring.
            </p>
          </div>

          <div className="earnings-visual-grid">
            <div className="card">
              <h3 className="viz-title">Real-time growth</h3>
              <div className="chart-mock" aria-hidden="true">
                <div className="chart-line"></div>
              </div>
              <div className="viz-stats">
                <div className="viz-stat">
                  <div className="viz-value text-gradient" data-counter="2847">
                    0
                  </div>
                  <div className="muted small">Signals processed</div>
                </div>
                <div className="viz-stat">
                  <div className="viz-value text-gradient" data-counter="97">
                    0
                  </div>
                  <div className="muted small">System health %</div>
                </div>
              </div>
            </div>

            <div className="stats-grid grid grid-cols-2">
              <div className="stat-card card text-center">
                <div className="stat-value text-gradient" data-counter="47832">
                  0
                </div>
                <div className="stat-label">Total Users</div>
              </div>
              <div className="stat-card card text-center">
                <div className="stat-value text-gradient" data-counter="2847621">
                  0
                </div>
                <div className="stat-label">Automations Run</div>
              </div>
              <div className="stat-card card text-center">
                <div className="stat-value text-gradient" data-counter="1523">
                  0
                </div>
                <div className="stat-label">Active Daily Tasks</div>
              </div>
              <div className="stat-card card text-center">
                <div className="stat-value text-gradient" data-counter="63">
                  0
                </div>
                <div className="stat-label">Avg. Response (ms)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-radial">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">Trust & Proof</h2>
            <p className="section-description">
              Professional presentation of user outcomes and system activity.
            </p>
          </div>
          <div className="grid grid-cols-3">
            <div className="proof-card card">
              <div className="proof-type">Wallet Transaction</div>
              <div className="proof-hash">0x7f3a8c...d92e4b</div>
              <div className="proof-detail">USDT · Confirmed</div>
            </div>
            <div className="proof-card card">
              <div className="proof-type">User Outcome</div>
              <div className="proof-amount">$4,827</div>
              <div className="proof-detail">30-day period · Software-assisted</div>
            </div>
            <div className="proof-card card">
              <div className="proof-type">Performance Metric</div>
              <div className="proof-metric">94.3%</div>
              <div className="proof-detail">Automation success rate</div>
            </div>
            <div className="proof-card card">
              <div className="proof-type">Wallet Transaction</div>
              <div className="proof-hash">0x2b9f1d...a3c7e6</div>
              <div className="proof-detail">ETH · Confirmed</div>
            </div>
            <div className="proof-card card">
              <div className="proof-type">User Outcome</div>
              <div className="proof-amount">$12,450</div>
              <div className="proof-detail">90-day period · Software-assisted</div>
            </div>
            <div className="proof-card card">
              <div className="proof-type">System Uptime</div>
              <div className="proof-metric">99.7%</div>
              <div className="proof-detail">Last 90 days</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-purple">User Testimonials</h2>
            <p className="section-description">
              What users say about AIPROFITGEN automation tools.
            </p>
          </div>
          <div className="grid grid-cols-3">
            <div className="testimonial-card card">
              <p className="testimonial-quote">
                "The automation quality is professional-grade. Clear dashboards,
                transparent logic, and solid execution tracking."
              </p>
              <div className="testimonial-author">
                <strong>Michael R.</strong>
                <span className="muted">USDTRex Pro user · 6 months</span>
              </div>
            </div>
            <div className="testimonial-card card">
              <p className="testimonial-quote">
                "I appreciate the responsible approach. No hype, just well-built
                software with good documentation and risk disclaimers."
              </p>
              <div className="testimonial-author">
                <strong>Sarah K.</strong>
                <span className="muted">Ethercraft Pro user · 4 months</span>
              </div>
            </div>
            <div className="testimonial-card card">
              <p className="testimonial-quote">
                "Solid fintech UX. Feels like using a real SaaS platform, not a
                gimmick. The tools do what they promise."
              </p>
              <div className="testimonial-author">
                <strong>David L.</strong>
                <span className="muted">AiProfitgen X user · 8 months</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section glass-strong">
        <div className="container text-center">
          <h2 className="cta-title text-gradient">Start Your Automated Income Today</h2>
          <p className="cta-description">
            Professional AI automation tools designed to save time and scale
            operations responsibly.
          </p>
          <div className="cta-actions">
            <a
              href="#software"
              className="button button-primary animate-pulse-glow"
            >
              Buy Software
            </a>
            <a href="/create-account" className="button button-secondary">
              Create Account
            </a>
          </div>
          <p className="disclaimer muted small">
            No guarantees of outcomes. Software-based automation tools. Users
            responsible for decisions and results.
          </p>
        </div>
      </section>
    </>
  );
}
