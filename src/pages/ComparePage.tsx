import { Link } from 'react-router-dom'
import { useApp } from '../context/AppProviders'
import { tools } from '../data/tools'
import { formatAccess, formatCategory, formatSeconds, formatUses } from '../lib/format'

export function ComparePage() {
  const { compare, clearCompare, toggleCompare } = useApp()
  const selected = tools.filter((t) => compare.includes(t.id))

  if (selected.length === 0) {
    return (
      <section className="section-tight">
        <div className="container">
          <div className="page-hero">
            <span className="eyebrow">Compare</span>
            <h1>Compare tools</h1>
            <p>Add up to four tools from the catalog to compare side by side.</p>
          </div>
          <div className="empty">
            Nothing to compare. <Link to="/tools">Add tools</Link>
          </div>
        </div>
      </section>
    )
  }

  const rows: { label: string; value: (id: string) => string }[] = [
    { label: 'Category', value: (id) => formatCategory(tools.find((t) => t.id === id)!.category) },
    { label: 'Access', value: (id) => formatAccess(tools.find((t) => t.id === id)!.access) },
    { label: 'Rating', value: (id) => String(tools.find((t) => t.id === id)!.rating) },
    {
      label: 'Monthly uses',
      value: (id) => formatUses(tools.find((t) => t.id === id)!.monthlyUses),
    },
    {
      label: 'Avg time',
      value: (id) => formatSeconds(tools.find((t) => t.id === id)!.avgTimeSec),
    },
    {
      label: 'Inputs',
      value: (id) => tools.find((t) => t.id === id)!.inputFormats.join(', '),
    },
    {
      label: 'Outputs',
      value: (id) => tools.find((t) => t.id === id)!.outputFormats.join(', '),
    },
  ]

  return (
    <section className="section-tight">
      <div className="container">
        <div
          className="page-hero"
          style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}
        >
          <div>
            <span className="eyebrow">Compare</span>
            <h1>Side-by-side tools</h1>
            <p>Up to four tools. Remove any column or clear the set.</p>
          </div>
          <button type="button" className="btn btn-secondary btn-sm" onClick={clearCompare}>
            Clear all
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Spec</th>
                {selected.map((t) => (
                  <th key={t.id}>
                    <div className="form-stack" style={{ gap: '0.5rem' }}>
                      <Link to={`/tools/${t.slug}`}>{t.name}</Link>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => toggleCompare(t.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tagline</td>
                {selected.map((t) => (
                  <td key={t.id}>{t.tagline}</td>
                ))}
              </tr>
              {rows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  {selected.map((t) => (
                    <td key={t.id}>{row.value(t.id)}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td>Top features</td>
                {selected.map((t) => (
                  <td key={t.id}>
                    <ul className="list-reset">
                      {t.features.slice(0, 3).map((f) => (
                        <li key={f}>• {f}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
