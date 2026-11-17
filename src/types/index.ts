export type ToolCategory =
  | 'organize'
  | 'convert'
  | 'edit'
  | 'secure'
  | 'optimize'
  | 'sign'

export type ToolAccess = 'free' | 'pro' | 'team'

export interface PdfTool {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  category: ToolCategory
  access: ToolAccess
  icon: string
  features: string[]
  inputFormats: string[]
  outputFormats: string[]
  avgTimeSec: number
  monthlyUses: number
  rating: number
  image: string
  featured?: boolean
  workflowId?: string
}

export interface Template {
  id: string
  name: string
  category: string
  description: string
  pages: number
  downloads: number
  rating: number
  cover: string
  tags: string[]
  relatedToolIds: string[]
}

export interface Workflow {
  id: string
  slug: string
  name: string
  industry: string
  description: string
  image: string
  steps: string[]
  toolIds: string[]
  timeSavedHours: number
  teamsUsing: number
  highlights: string[]
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  cover: string
  tags: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatar: string
  rating: number
}

export interface RecentFile {
  id: string
  name: string
  toolId: string
  sizeKb: number
  pages: number
  status: 'ready' | 'processing' | 'failed'
  createdAt: string
}

export interface ToolFilters {
  query: string
  category: ToolCategory | 'all'
  access: ToolAccess | 'all'
  sort: 'popular' | 'rating' | 'fastest' | 'name'
}

export interface User {
  id: string
  name: string
  email: string
}
