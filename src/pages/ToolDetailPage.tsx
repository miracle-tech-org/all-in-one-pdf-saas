import { Link, useParams } from 'react-router-dom'
import { getRelatedTools, getToolBySlug } from '../data/tools'
import { getWorkflowById } from '../data/workflows'
import { formatAccess, formatCategory, formatSeconds, formatUses } from '../lib/format'
import { ToolActions } from '../components/tools/ToolActions'
import { ToolCard } from '../components/tools/ToolCard'
import { UploadWorkspace } from '../components/tools/UploadWorkspace'
import { InquiryForm } from '../components/tools/InquiryForm'
import { IconStar } from '../components/icons'

export function ToolDetailPage() {
  const { slug } = useParams()
  const tool = getToolBySlug(slug ?? '')

  if (!tool) {
    return (
      <section className="section-tight">
        <div className="container empty">Tool not found. <Link to="/tools">Back to tools</Link></div>
      </section>
    )
  }

  const related = getRelatedTools(tool)
  const workflow = tool.workflowId ? getWorkflowById(tool.workflowId) : undefined

  return (
    <section className="section-tight">
      <div className="container">
        <div className="split">
          <div>
            <div className="tool-hero-media">
              <img src={tool.image} alt="" />
              <span className={`badge badge-${tool.access}`}>{formatAccess(tool.access)}</span>
              <ToolActions toolId={tool.id} />
            </div>
            <div className="page-hero" style={{ paddingTop: '1.5rem' }}>
              <span className="eyebrow">{formatCategory(tool.category)}</span>
              <h1>{tool.name}</h1>
              <p>{tool.description}</p>
            </div>
            <div className="stat-strip">
              <div className="stat">
                <strong>{tool.rating}</strong>
                <span>
                  <IconStar width={12} height={12} /> Rating
                </span>
              </div>
              <div className="stat">
                <strong>{formatUses(tool.monthlyUses)}</strong>
                <span>Uses / month</span>
              </div>
              <div className="stat">
                <strong>{formatSeconds(tool.avgTimeSec)}</strong>
                <span>Avg runtime</span>
              </div>
              <div className="stat">
                <strong>{formatAccess(tool.access)}</strong>
                <span>Plan access</span>
              </div>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <h2 style={{ marginBottom: '1rem' }}>Features</h2>
              <ul className="list-reset feature-list">
                {tool.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: '1.5rem' }} className="tag-row">
              {tool.inputFormats.map((f) => (
                <span key={`in-${f}`} className="tag">
                  In: {f}
                </span>
              ))}
              {tool.outputFormats.map((f) => (
                <span key={`out-${f}`} className="tag">
                  Out: {f}
                </span>
              ))}
            </div>
            {workflow && (
              <p style={{ marginTop: '1.25rem' }} className="muted">
                Used in workflow{' '}
                <Link to={`/workflows/${workflow.slug}`}>{workflow.name}</Link>
              </p>
            )}
          </div>
          <aside className="form-stack">
            <UploadWorkspace tool={tool} />
            <InquiryForm toolName={tool.name} />
          </aside>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <div className="section-head">
              <span className="eyebrow">Related</span>
              <h2>Similar tools</h2>
            </div>
            <div className="grid-cards">
              {related.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
