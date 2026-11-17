import { Link, useParams } from 'react-router-dom'
import { getTemplateById } from '../data/templates'
import { getToolById } from '../data/tools'
import { formatNumber } from '../lib/format'
import { ToolCard } from '../components/tools/ToolCard'
import { IconStar } from '../components/icons'

export function TemplateDetailPage() {
  const { id } = useParams()
  const template = getTemplateById(id ?? '')

  if (!template) {
    return (
      <section className="section-tight">
        <div className="container empty">
          Template not found. <Link to="/templates">Back to templates</Link>
        </div>
      </section>
    )
  }

  const relatedTools = template.relatedToolIds
    .map((tid) => getToolById(tid))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))

  return (
    <section className="section-tight">
      <div className="container">
        <div className="split">
          <div>
            <img
              src={template.cover}
              alt=""
              style={{ width: '100%', borderRadius: 'var(--radius)', aspectRatio: '4/3', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div className="page-hero" style={{ paddingTop: 0 }}>
              <span className="eyebrow">{template.category}</span>
              <h1>{template.name}</h1>
              <p>{template.description}</p>
            </div>
            <div className="stat-strip">
              <div className="stat">
                <strong>{template.pages}</strong>
                <span>Pages</span>
              </div>
              <div className="stat">
                <strong>{formatNumber(template.downloads)}</strong>
                <span>Downloads</span>
              </div>
              <div className="stat">
                <strong>{template.rating}</strong>
                <span>
                  <IconStar width={12} height={12} /> Rating
                </span>
              </div>
              <div className="stat">
                <strong>{template.tags.length}</strong>
                <span>Tags</span>
              </div>
            </div>
            <div className="tag-row" style={{ marginTop: '1.25rem' }}>
              {template.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <button type="button" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Use template (mock)
            </button>
          </div>
        </div>

        {relatedTools.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <div className="section-head">
              <span className="eyebrow">Pair with</span>
              <h2>Recommended tools</h2>
            </div>
            <div className="grid-cards">
              {relatedTools.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
