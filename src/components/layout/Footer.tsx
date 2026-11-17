import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Inkline</div>
            <p>
              All-in-one PDF workspace for teams that merge, convert, secure, and sign documents
              without hopping between tools.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <div className="form-stack">
              <Link to="/tools">PDF tools</Link>
              <Link to="/studio">Studio map</Link>
              <Link to="/templates">Templates</Link>
              <Link to="/estimate">Size estimator</Link>
            </div>
          </div>
          <div>
            <h4>Learn</h4>
            <div className="form-stack">
              <Link to="/workflows">Workflows</Link>
              <Link to="/blog">Insights</Link>
              <Link to="/compare">Compare tools</Link>
              <Link to="/favorites">Saved tools</Link>
            </div>
          </div>
          <div>
            <h4>Account</h4>
            <div className="form-stack">
              <Link to="/login">Sign in</Link>
              <Link to="/register">Create account</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Inkline · Demo portfolio SPA</span>
          <span>Mock data only · No files are uploaded</span>
        </div>
      </div>
    </footer>
  )
}
