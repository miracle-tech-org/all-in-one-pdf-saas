import type { ToolAccess, ToolCategory } from '../types'

export function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value)
}

export function formatUses(value: number) {
  if (value >= 1000) return `${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}k`
  return formatNumber(value)
}

export function formatSeconds(sec: number) {
  if (sec < 60) return `~${sec}s`
  return `~${Math.round(sec / 60)}m`
}

export function formatFileSize(kb: number) {
  if (kb >= 1024) return `${(kb / 1024).toFixed(1)} MB`
  return `${formatNumber(Math.round(kb))} KB`
}

export function formatCategory(category: ToolCategory | string) {
  return category.charAt(0).toUpperCase() + category.slice(1)
}

export function formatAccess(access: ToolAccess | string) {
  const map: Record<string, string> = {
    free: 'Free',
    pro: 'Pro',
    team: 'Team',
  }
  return map[access] ?? access
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatShortDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}
