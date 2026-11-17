import { Link } from 'react-router-dom'
import { getFeaturedTools } from '../data/tools'
import { workflows } from '../data/workflows'
import { templates } from '../data/templates'
import { testimonials } from '../data/testimonials'
import { ToolCard } from '../components/tools/ToolCard'
import { SearchBar } from '../components/search/SearchBar'
import { formatNumber } from '../lib/format'
import { IconArrow, IconStar } from '../components/icons'

export function HomePage() {
  const featured = getFeaturedTools()

  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1800&h=1200&fit=crop"
            alt="Documents and workspace desk"
          />
        </div>
        <div className="container hero-content">
          <div className="hero-brand">Inkline</div>
          <h1>Every PDF job in one calm workspace.</h1>
          <p>
            Merge, convert, compress, OCR, protect, and e-sign without hopping between single-purpose
            tools.
          </p>
          <div className="hero-actions">
            <Link to="/tools" className="btn btn-ghost">
              Browse tools
            </Link>
            <Link to="/studio" className="btn btn-ghost">
              Open studio
            </Link>
          </div>
          <SearchBar dark />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Featured tools</span>
            <h2>The jobs teams run every day</h2>
            <p>Curated PDF workflows for sales, legal, finance, and ops — all mock-ready.</p>
          </div>
          <div className="grid-cards">
            {featured.map((t) => (
              <ToolCard key={t.id} tool={t} />
            ))}
          </div>
          <div style={{ marginTop: '1.75rem' }}>
            <Link to="/tools" className="btn btn-secondary">
              View all tools <IconArrow width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Workflows</span>
            <h2>Know the lane before you convert</h2>
            <p>Industry playbooks that chain tools into repeatable outcomes.</p>
          </div>
          <div className="grid-cards">
            {workflows.slice(0, 3).map((w) => (
              <Link key={w.id} to={`/workflows/${w.slug}`} className="hood-card">
                <img src={w.image} alt={w.name} loading="lazy" />
                <h3>{w.name}</h3>
                <p className="muted">
                  {w.industry} · {formatNumber(w.teamsUsing)} teams · {w.timeSavedHours}h saved
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Templates</span>
            <h2>Start from documents that already work</h2>
            <p>Proposal, NDA, invoice, and board shells ready to merge and sign.</p>
          </div>
          <div className="grid-cards">
            {templates.slice(0, 3).map((tpl) => (
              <Link key={tpl.id} to={`/templates/${tpl.id}`} className="agent-card">
                <img src={tpl.cover} alt={tpl.name} loading="lazy" />
                <h3>{tpl.name}</h3>
                <p className="muted">{tpl.category}</p>
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Customer stories</span>
            <h2>Trusted from draft to signed PDF</h2>
          </div>
          <div className="grid-cards">
            {testimonials.map((t) => (
              <article key={t.id} className="testimonial-card">
                <blockquote>“{t.quote}”</blockquote>
                <div className="person">
                  <img src={t.avatar} alt="" />
                  <div>
                    <strong>{t.name}</strong>
                    <div className="muted">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
