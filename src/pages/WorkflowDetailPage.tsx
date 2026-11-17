import { Link, useParams } from 'react-router-dom'
import { getWorkflowBySlug } from '../data/workflows'
import { getToolById } from '../data/tools'
import { formatNumber } from '../lib/format'
import { ToolCard } from '../components/tools/ToolCard'

export function WorkflowDetailPage() {
  const { slug } = useParams()
  const workflow = getWorkflowBySlug(slug ?? '')

  if (!workflow) {
    return (
      <section className="section-tight">
        <div className="container empty">
          Workflow not found. <Link to="/workflows">Back to workflows</Link>
        </div>
      </section>
    )
  }

  const linkedTools = workflow.toolIds
    .map((id) => getToolById(id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))

  return (
    <section className="section-tight">
      <div className="container">
        <div className="split">
          <div>
            <img
              src={workflow.image}
              alt=""
              style={{ width: '100%', borderRadius: 'var(--radius)', aspectRatio: '16/10', objectFit: 'cover' }}
            />
            <div className="page-hero" style={{ paddingTop: '1.5rem' }}>
              <span className="eyebrow">{workflow.industry}</span>
              <h1>{workflow.name}</h1>
              <p>{workflow.description}</p>
            </div>
            <div className="stat-strip">
              <div className="stat">
                <strong>{workflow.timeSavedHours}h</strong>
                <span>Time saved / week</span>
              </div>
              <div className="stat">
                <strong>{formatNumber(workflow.teamsUsing)}</strong>
                <span>Teams using</span>
              </div>
              <div className="stat">
                <strong>{workflow.steps.length}</strong>
                <span>Steps</span>
              </div>
              <div className="stat">
                <strong>{linkedTools.length}</strong>
                <span>Tools</span>
              </div>
            </div>
          </div>
          <aside className="panel form-stack">
            <h3>Steps</h3>
            <ol className="step-list">
              {workflow.steps.map((step, i) => (
                <li key={step}>
                  <strong>Step {i + 1}</strong>
                  <span className="muted">{step}</span>
                </li>
              ))}
            </ol>
            <div className="tag-row">
              {workflow.highlights.map((h) => (
                <span key={h} className="tag">
                  {h}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <div className="section-head">
            <span className="eyebrow">Toolkit</span>
            <h2>Tools in this workflow</h2>
          </div>
          <div className="grid-cards">
            {linkedTools.map((t) => (
              <ToolCard key={t.id} tool={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
