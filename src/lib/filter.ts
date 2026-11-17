import type { PdfTool, ToolFilters } from '../types'

export const defaultFilters: ToolFilters = {
  query: '',
  category: 'all',
  access: 'all',
  sort: 'popular',
}

export function filterTools(tools: PdfTool[], filters: ToolFilters) {
  let result = [...tools]

  if (filters.query.trim()) {
    const q = filters.query.toLowerCase()
    result = result.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.features.some((f) => f.toLowerCase().includes(q)),
    )
  }

  if (filters.category !== 'all') {
    result = result.filter((t) => t.category === filters.category)
  }

  if (filters.access !== 'all') {
    result = result.filter((t) => t.access === filters.access)
  }

  switch (filters.sort) {
    case 'rating':
      result.sort((a, b) => b.rating - a.rating)
      break
    case 'fastest':
      result.sort((a, b) => a.avgTimeSec - b.avgTimeSec)
      break
    case 'name':
      result.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'popular':
    default:
      result.sort((a, b) => b.monthlyUses - a.monthlyUses)
      break
  }

  return result
}

export function uniqueCategories(tools: PdfTool[]) {
  return [...new Set(tools.map((t) => t.category))]
}
