import { Link } from 'react-router-dom'
import type { PdfTool } from '../../types'
import { formatAccess, formatCategory, formatSeconds, formatUses } from '../../lib/format'
import { IconStar } from '../icons'
import { ToolActions } from './ToolActions'

export function ToolCard({ tool }: { tool: PdfTool }) {
  return (
    <Link to={`/tools/${tool.slug}`} className="tool-card">
      <div className="tool-card-media">
        <img src={tool.image} alt="" loading="lazy" />
        <span className={`badge badge-${tool.access}`}>{formatAccess(tool.access)}</span>
        <ToolActions toolId={tool.id} />
      </div>
      <div className="tool-card-body">
        <p className="muted">{formatCategory(tool.category)}</p>
        <h3>{tool.name}</h3>
        <p className="tool-tagline">{tool.tagline}</p>
        <div className="meta-row">
          <span>
            <IconStar width={14} height={14} /> {tool.rating}
          </span>
          <span>{formatUses(tool.monthlyUses)} / mo</span>
          <span>{formatSeconds(tool.avgTimeSec)}</span>
        </div>
      </div>
    </Link>
  )
}
