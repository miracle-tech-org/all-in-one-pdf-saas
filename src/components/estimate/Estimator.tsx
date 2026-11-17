import { useMemo, useState } from 'react'
import { formatFileSize } from '../../lib/format'

export function Estimator() {
  const [pages, setPages] = useState(24)
  const [imagesPerPage, setImagesPerPage] = useState(1.5)
  const [dpi, setDpi] = useState(150)
  const [quality, setQuality] = useState<'balanced' | 'high' | 'max'>('balanced')

  const estimate = useMemo(() => {
    const textKb = pages * 18
    const imageFactor = quality === 'max' ? 1.35 : quality === 'high' ? 1 : 0.62
    const dpiFactor = dpi / 150
    const imageKb = pages * imagesPerPage * 220 * imageFactor * dpiFactor
    const totalKb = textKb + imageKb
    const compressedKb = totalKb * (quality === 'balanced' ? 0.55 : quality === 'high' ? 0.72 : 0.9)
    return { totalKb, compressedKb }
  }, [pages, imagesPerPage, dpi, quality])

  return (
    <div className="calc-grid">
      <div className="panel form-stack">
        <div className="field">
          <label htmlFor="pages">Page count</label>
          <input
            id="pages"
            type="number"
            min={1}
            max={500}
            value={pages}
            onChange={(e) => setPages(Number(e.target.value) || 1)}
          />
        </div>
        <div className="field">
          <label htmlFor="images">Avg images per page</label>
          <input
            id="images"
            type="number"
            min={0}
            max={10}
            step={0.5}
            value={imagesPerPage}
            onChange={(e) => setImagesPerPage(Number(e.target.value) || 0)}
          />
        </div>
        <div className="field">
          <label htmlFor="dpi">Image DPI</label>
          <input
            id="dpi"
            type="number"
            min={72}
            max={300}
            step={10}
            value={dpi}
            onChange={(e) => setDpi(Number(e.target.value) || 72)}
          />
        </div>
        <div className="field">
          <label htmlFor="quality">Quality target</label>
          <select
            id="quality"
            value={quality}
            onChange={(e) => setQuality(e.target.value as typeof quality)}
          >
            <option value="balanced">Balanced (email-friendly)</option>
            <option value="high">High (print-adjacent)</option>
            <option value="max">Max (archive)</option>
          </select>
        </div>
      </div>

      <div className="calc-result">
        <span>Estimated export size</span>
        <strong>{formatFileSize(estimate.compressedKb)}</strong>
        <p>
          Uncompressed baseline ~{formatFileSize(estimate.totalKb)}. Use Compress PDF when you need
          inbox-safe packs.
        </p>
      </div>
    </div>
  )
}
