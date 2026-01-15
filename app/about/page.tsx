/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AIPROFITGEN's mission, AI automation philosophy, and trust-first approach to fintech software.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h1 className="text-gradient-purple">About AIPROFITGEN</h1>
            <p className="section-description">
              Premium AI fintech software built for professional automation workflows.
            </p>
          </div>

          <div className="about-grid">
            <div className="card">
              <h2 className="about-title">Mission</h2>
              <p>
                AIPROFITGEN exists to build high-quality automation software that helps users operate data-driven workflows with clarity, safety, and control.
              </p>
            </div>
            <div className="card">
              <h2 className="about-title">AI + Automation Philosophy</h2>
              <p>
                We believe AI should augment decision-making rather than replace it. Our tools emphasize explainable logic, monitoring views, and guardrails.
              </p>
            </div>
            <div className="card">
              <h2 className="about-title">Corporate Credibility</h2>
              <p>
                We design the platform with a fintech-grade approach: accessible UI, strong visual hierarchy, and a trust-first tone.
              </p>
            </div>
            <div className="card">
              <h2 className="about-title">Core Values</h2>
              <ul className="values">
                <li>Transparency over hype</li>
                <li>Automation with guardrails</li>
                <li>Professional design and readability</li>
                <li>Security-minded product thinking</li>
                <li>User responsibility and clear disclaimers</li>
              </ul>
            </div>
          </div>

          <div className="team card">
            <h2 className="about-title">Leadership (Placeholder)</h2>
            <p className="muted">
              This section can be updated with real team members, roles, and bios.
            </p>
            <div className="team-grid">
              <div className="team-member glass">
                <div className="avatar" aria-hidden="true"></div>
                <div>
                  <strong>Executive Lead</strong>
                  <div className="muted">Fintech Operations</div>
                </div>
              </div>
              <div className="team-member glass">
                <div className="avatar" aria-hidden="true"></div>
                <div>
                  <strong>Product Lead</strong>
                  <div className="muted">Automation UX</div>
                </div>
              </div>
              <div className="team-member glass">
                <div className="avatar" aria-hidden="true"></div>
                <div>
                  <strong>Engineering Lead</strong>
                  <div className="muted">AI Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section glass-strong">
        <div className="container text-center">
          <h2 className="cta-title text-gradient">Explore the Suite</h2>
          <p className="cta-description">
            Discover professional AI automation tools designed with a premium fintech aesthetic.
          </p>
          <div className="cta-actions">
            <a href="/#software" className="button button-primary animate-pulse-glow">
              Explore Software
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
