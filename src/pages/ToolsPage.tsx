import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { tools } from '../data/tools'
import { defaultFilters, filterTools } from '../lib/filter'
import type { ToolCategory, ToolFilters } from '../types'
import { ToolCard } from '../components/tools/ToolCard'
import { ToolFiltersBar } from '../components/tools/ToolFilters'

export function ToolsPage() {
  const [params] = useSearchParams()
  const initial: ToolFilters = {
    ...defaultFilters,
    query: params.get('q') ?? '',
    category: (params.get('category') as ToolCategory | null) ?? 'all',
  }
  const [filters, setFilters] = useState<ToolFilters>(initial)

  const results = useMemo(() => filterTools(tools, filters), [filters])

  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Tool catalog</span>
          <h1>All PDF tools</h1>
          <p>Filter by category and access. Favorites and compare persist in localStorage.</p>
        </div>
        <ToolFiltersBar filters={filters} onChange={setFilters} />
        <p className="muted" style={{ marginBottom: '1rem' }}>
          Showing {results.length} of {tools.length} tools
        </p>
        {results.length === 0 ? (
          <div className="empty">No tools match these filters.</div>
        ) : (
          <div className="grid-cards">
            {results.map((t) => (
              <ToolCard key={t.id} tool={t} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
