/* eslint-disable @next/next/no-html-link-for-pages */
export default function ContactSuccessPage() {

  return (
    <section className="section">
      <div className="container">
        <div className="card text-center" style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1 className="text-gradient">Message Sent</h1>
          <p className="mt-4">
            Thanks for reaching out. Our team has received your message and will reply as soon as possible.
          </p>
          <div className="mt-4" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/" className="button button-primary">
              Back to Home
            </a>
            <a href="/software/aiprofitgen-x" className="button button-secondary">
              Explore Software
            </a>
          </div>
          <p className="muted small" style={{ marginTop: "1.5rem" }}>
            If you do not receive a response within 1–2 business days, please check your spam folder or contact us again.
          </p>
        </div>
      </div>
    </section>
  );
}
