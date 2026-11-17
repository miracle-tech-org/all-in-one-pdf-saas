import type { ToolFilters as Filters } from '../../types'
import { uniqueCategories } from '../../lib/filter'
import { tools } from '../../data/tools'
import { formatCategory } from '../../lib/format'

interface Props {
  filters: Filters
  onChange: (next: Filters) => void
}

export function ToolFiltersBar({ filters, onChange }: Props) {
  const categories = uniqueCategories(tools)

  return (
    <div className="filters">
      <div className="field" style={{ gridColumn: 'span 2' }}>
        <label htmlFor="q">Search</label>
        <input
          id="q"
          value={filters.query}
          placeholder="Merge, OCR, eSign…"
          onChange={(e) => onChange({ ...filters, query: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={filters.category}
          onChange={(e) =>
            onChange({ ...filters, category: e.target.value as Filters['category'] })
          }
        >
          <option value="all">All</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {formatCategory(c)}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="access">Access</label>
        <select
          id="access"
          value={filters.access}
          onChange={(e) => onChange({ ...filters, access: e.target.value as Filters['access'] })}
        >
          <option value="all">All</option>
          <option value="free">Free</option>
          <option value="pro">Pro</option>
          <option value="team">Team</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="sort">Sort</label>
        <select
          id="sort"
          value={filters.sort}
          onChange={(e) => onChange({ ...filters, sort: e.target.value as Filters['sort'] })}
        >
          <option value="popular">Most used</option>
          <option value="rating">Highest rated</option>
          <option value="fastest">Fastest</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  )
}
