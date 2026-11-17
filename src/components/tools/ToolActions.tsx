import { useApp } from '../../context/AppProviders'
import { IconCompare, IconHeart, IconHeartFilled } from '../icons'

export function ToolActions({ toolId }: { toolId: string }) {
  const { favorites, compare, toggleFavorite, toggleCompare } = useApp()
  const fav = favorites.includes(toolId)
  const inCompare = compare.includes(toolId)

  return (
    <div className="card-actions">
      <button
        type="button"
        className={`icon-btn ${fav ? 'active' : ''}`}
        aria-label={fav ? 'Remove favorite' : 'Save tool'}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggleFavorite(toolId)
        }}
      >
        {fav ? <IconHeartFilled /> : <IconHeart />}
      </button>
      <button
        type="button"
        className={`icon-btn ${inCompare ? 'active' : ''}`}
        aria-label={inCompare ? 'Remove from compare' : 'Add to compare'}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggleCompare(toolId)
        }}
      >
        <IconCompare />
      </button>
    </div>
  )
}
