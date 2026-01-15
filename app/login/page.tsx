/* eslint-disable @next/next/no-html-link-for-pages */
export default function LoginPage() {

  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1 className="text-gradient">Login</h1>
          <p className="mt-4 muted">
            Placeholder login page. Connect this to your authentication provider or SaaS backend.
          </p>
          <div className="mt-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a className="button button-primary" href="/create-account">
              Create Account
            </a>
            <a className="button button-secondary" href="/">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
