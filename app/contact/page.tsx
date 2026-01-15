import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AIPROFITGEN support. Secure fintech-style contact form with Netlify Forms integration.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h1 className="text-gradient-purple">Contact</h1>
          <p className="section-description">
            Reach out to our team. We respond with a professional, trust-first approach.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card card">
            <h2 className="contact-title">Send a Message</h2>
            <p className="muted">
              Use the form below. Messages are handled securely. Please do not include passwords, private keys, or sensitive financial information.
            </p>

            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              action="/contact-success"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} required />
              </div>

              <button className="button button-primary animate-pulse-glow" type="submit">
                Send Message
              </button>

              <p className="muted small form-note">
                Trust notice: Please avoid sending sensitive information.
              </p>
            </form>
          </div>

          <aside className="contact-aside">
            <div className="card">
              <h2 className="contact-title">Support</h2>
              <p className="muted">
                Support email (placeholder): <strong>support@aiprofitgen.com</strong>
              </p>
              <p className="muted">Mon–Fri, 9:00–17:00 (UTC)</p>
            </div>

            <div className="card">
              <h2 className="contact-title">Trust Indicators</h2>
              <ul className="trust-list">
                <li>Secure messaging practices</li>
                <li>Transparent disclaimers</li>
                <li>Professional software-only positioning</li>
                <li>WCAG-aware design and readability</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
