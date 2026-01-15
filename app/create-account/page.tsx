/* eslint-disable @next/next/no-html-link-for-pages */
export default function CreateAccountPage() {

  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1 className="text-gradient">Create Account</h1>
          <p className="mt-4">
            Placeholder account creation page. You can integrate your preferred authentication system here.
          </p>
          <div className="mt-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a className="button button-primary" href="/software/aiprofitgen-x">
              Explore Software
            </a>
            <a className="button button-secondary" href="/contact">
              Contact Support
            </a>
          </div>
          <p className="muted small" style={{ marginTop: "1.5rem" }}>
            Compliance note: Please ensure identity and payment flows meet your legal requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
