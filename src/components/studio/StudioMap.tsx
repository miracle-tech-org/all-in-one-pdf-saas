import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { tools } from '../../data/tools'
import type { ToolCategory } from '../../types'
import { formatAccess, formatCategory, formatUses } from '../../lib/format'

const positions: Record<string, { left: string; top: string }> = {
  t1: { left: '18%', top: '28%' },
  t2: { left: '34%', top: '62%' },
  t3: { left: '52%', top: '24%' },
  t4: { left: '68%', top: '48%' },
  t5: { left: '22%', top: '72%' },
  t6: { left: '78%', top: '22%' },
  t7: { left: '86%', top: '68%' },
  t8: { left: '46%', top: '78%' },
  t9: { left: '60%', top: '58%' },
  t10: { left: '40%', top: '40%' },
  t11: { left: '12%', top: '48%' },
  t12: { left: '74%', top: '78%' },
}

export function StudioMap() {
  const [category, setCategory] = useState<ToolCategory | 'all'>('all')
  const [activeId, setActiveId] = useState(tools[0]?.id ?? '')

  const visible = useMemo(
    () => tools.filter((t) => category === 'all' || t.category === category),
    [category],
  )

  const active = visible.find((t) => t.id === activeId) ?? visible[0]

  return (
    <div className="map-layout">
      <div className="panel form-stack">
        <div className="field">
          <label htmlFor="studio-cat">Filter category</label>
          <select
            id="studio-cat"
            value={category}
            onChange={(e) => {
              const next = e.target.value as ToolCategory | 'all'
              setCategory(next)
              const first = tools.find((t) => next === 'all' || t.category === next)
              if (first) setActiveId(first.id)
            }}
          >
            <option value="all">All tools</option>
            <option value="organize">Organize</option>
            <option value="convert">Convert</option>
            <option value="edit">Edit</option>
            <option value="secure">Secure</option>
            <option value="optimize">Optimize</option>
            <option value="sign">Sign</option>
          </select>
        </div>
        <div className="studio-list">
          {visible.map((tool) => (
            <button
              key={tool.id}
              type="button"
              className={`studio-list-item ${active?.id === tool.id ? 'active' : ''}`}
              onClick={() => setActiveId(tool.id)}
            >
              <strong>{tool.name}</strong>
              <span className="muted">
                {formatCategory(tool.category)} · {formatUses(tool.monthlyUses)} / mo
              </span>
            </button>
          ))}
        </div>
        {active && (
          <div className="panel" style={{ padding: '1rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>
              {formatAccess(active.access)}
            </p>
            <h3 style={{ marginBottom: '0.4rem' }}>{active.name}</h3>
            <p className="muted" style={{ marginBottom: '0.9rem' }}>
              {active.tagline}
            </p>
            <Link to={`/tools/${active.slug}`} className="btn btn-primary btn-sm">
              Open tool
            </Link>
          </div>
        )}
      </div>

      <div className="map-canvas studio-canvas" aria-label="Tool studio map">
        {visible.map((tool) => {
          const pos = positions[tool.id] ?? { left: '50%', top: '50%' }
          return (
            <button
              key={tool.id}
              type="button"
              className={`map-pin ${active?.id === tool.id ? 'active' : ''}`}
              style={{ left: pos.left, top: pos.top }}
              onClick={() => setActiveId(tool.id)}
            >
              {tool.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
