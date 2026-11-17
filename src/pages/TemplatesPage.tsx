import { Link } from 'react-router-dom'
import { templates } from '../data/templates'
import { formatNumber } from '../lib/format'
import { IconStar } from '../components/icons'

export function TemplatesPage() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Template library</span>
          <h1>Document templates</h1>
          <p>Start from proposal, legal, finance, and ops shells — then merge, protect, or sign.</p>
        </div>
        <div className="grid-cards">
          {templates.map((tpl) => (
            <Link key={tpl.id} to={`/templates/${tpl.id}`} className="agent-card">
              <img src={tpl.cover} alt={tpl.name} loading="lazy" />
              <h3>{tpl.name}</h3>
              <p className="muted">
                {tpl.category} · {tpl.pages} pages
              </p>
              <div className="meta-row">
                <span>
                  <IconStar width={14} height={14} /> {tpl.rating}
                </span>
                <span>{formatNumber(tpl.downloads)} downloads</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
