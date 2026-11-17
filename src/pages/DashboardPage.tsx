import { Link, Navigate } from 'react-router-dom'
import { useApp } from '../context/AppProviders'
import { tools } from '../data/tools'
import { recentFiles } from '../data/files'
import { ToolCard } from '../components/tools/ToolCard'
import { formatFileSize, formatShortDate } from '../lib/format'
import { getToolById } from '../data/tools'

export function DashboardPage() {
  const { user, favorites, compare, logout } = useApp()

  if (!user) return <Navigate to="/login" replace />

  const saved = tools.filter((t) => favorites.includes(t.id)).slice(0, 3)

  return (
    <section className="section-tight">
      <div className="container">
        <div
          className="page-hero"
          style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}
        >
          <div>
            <span className="eyebrow">Workspace</span>
            <h1>Hello, {user.name}</h1>
            <p>Track favorites, comparisons, and recent mock files from your dashboard.</p>
          </div>
          <button type="button" className="btn btn-secondary btn-sm" onClick={logout}>
            Sign out
          </button>
        </div>

        <div className="stat-strip">
          <div className="stat">
            <strong>{favorites.length}</strong>
            <span>Saved tools</span>
          </div>
          <div className="stat">
            <strong>{compare.length}</strong>
            <span>In compare</span>
          </div>
          <div className="stat">
            <strong>{recentFiles.length}</strong>
            <span>Recent files (mock)</span>
          </div>
          <div className="stat">
            <strong>Pro</strong>
            <span>Plan (mock)</span>
          </div>
        </div>

        <div className="split" style={{ marginTop: '2rem' }}>
          <div>
            <h2 style={{ marginBottom: '1rem' }}>Recent files</h2>
            <div className="file-table panel">
              {recentFiles.map((file) => {
                const tool = getToolById(file.toolId)
                return (
                  <div key={file.id} className="file-row">
                    <div>
                      <strong>{file.name}</strong>
                      <div className="muted">
                        {tool?.name ?? 'Tool'} · {file.pages} pages · {formatFileSize(file.sizeKb)}
                      </div>
                    </div>
                    <div className="file-meta">
                      <span className={`status-pill status-${file.status}`}>{file.status}</span>
                      <span className="muted">{formatShortDate(file.createdAt)}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            <h2 style={{ margin: '2rem 0 1rem' }}>Recently saved tools</h2>
            {saved.length === 0 ? (
              <div className="empty">
                No favorites yet. <Link to="/tools">Browse tools</Link>
              </div>
            ) : (
              <div
                className="grid-cards"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
              >
                {saved.map((t) => (
                  <ToolCard key={t.id} tool={t} />
                ))}
              </div>
            )}
          </div>
          <aside className="panel form-stack">
            <h3>Quick links</h3>
            <Link to="/favorites">View all favorites</Link>
            <Link to="/compare">Open comparison</Link>
            <Link to="/studio">Studio map</Link>
            <Link to="/estimate">Size estimator</Link>
            <Link to="/contact">Talk to sales</Link>
            <div style={{ marginTop: '0.5rem' }}>
              <p className="muted">Signed in as {user.email}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
