import { Link } from 'react-router-dom'
import { useApp } from '../context/AppProviders'
import { tools } from '../data/tools'
import { ToolCard } from '../components/tools/ToolCard'

export function FavoritesPage() {
  const { favorites } = useApp()
  const saved = tools.filter((t) => favorites.includes(t.id))

  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Saved</span>
          <h1>Favorite tools</h1>
          <p>Your pinned PDF tools, stored locally in this browser.</p>
        </div>
        {saved.length === 0 ? (
          <div className="empty">
            No favorites yet. <Link to="/tools">Browse tools</Link>
          </div>
        ) : (
          <div className="grid-cards">
            {saved.map((t) => (
              <ToolCard key={t.id} tool={t} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
