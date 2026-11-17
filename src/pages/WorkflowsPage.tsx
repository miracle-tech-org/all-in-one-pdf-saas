import { Link } from 'react-router-dom'
import { workflows } from '../data/workflows'
import { formatNumber } from '../lib/format'

export function WorkflowsPage() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Workflows</span>
          <h1>Industry playbooks</h1>
          <p>Chained tool recipes for sales, legal, marketing, finance, and operations teams.</p>
        </div>
        <div className="grid-cards">
          {workflows.map((w) => (
            <Link key={w.id} to={`/workflows/${w.slug}`} className="hood-card">
              <img src={w.image} alt={w.name} loading="lazy" />
              <h3>{w.name}</h3>
              <p className="muted">
                {w.industry} · {formatNumber(w.teamsUsing)} teams · Saves ~{w.timeSavedHours}h
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
