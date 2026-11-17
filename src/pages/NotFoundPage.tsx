import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="section-tight">
      <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <span className="eyebrow">404</span>
        <h1 style={{ marginBottom: '0.75rem' }}>Page not found</h1>
        <p className="muted" style={{ marginBottom: '1.5rem' }}>
          That route is not part of the Inkline demo.
        </p>
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
      </div>
    </section>
  )
}
