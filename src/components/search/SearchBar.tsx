import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { ToolCategory } from '../../types'
import { IconSearch } from '../icons'

export function SearchBar({ dark = false }: { dark?: boolean }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<ToolCategory | 'all'>('all')

  return (
    <form
      className={`search-bar ${dark ? 'search-bar-dark' : ''}`}
      onSubmit={(e) => {
        e.preventDefault()
        const params = new URLSearchParams()
        if (query.trim()) params.set('q', query.trim())
        if (category !== 'all') params.set('category', category)
        navigate(`/tools?${params.toString()}`)
      }}
    >
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search PDF tools…"
        aria-label="Search tools"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as ToolCategory | 'all')}
        aria-label="Category"
      >
        <option value="all">All categories</option>
        <option value="organize">Organize</option>
        <option value="convert">Convert</option>
        <option value="edit">Edit</option>
        <option value="secure">Secure</option>
        <option value="optimize">Optimize</option>
        <option value="sign">Sign</option>
      </select>
      <button type="submit" className="btn btn-primary">
        <IconSearch width={18} height={18} /> Search
      </button>
    </form>
  )
}
