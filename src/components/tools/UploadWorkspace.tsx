import { useState } from 'react'
import type { PdfTool } from '../../types'
import { IconUpload } from '../icons'

export function UploadWorkspace({ tool }: { tool: PdfTool }) {
  const [fileName, setFileName] = useState('')
  const [done, setDone] = useState(false)

  return (
    <div className="panel form-stack">
      <h3>Mock workspace</h3>
      <p className="muted">
        Demo only — files stay in your browser memory and are never uploaded.
      </p>
      <label className="upload-drop">
        <IconUpload width={28} height={28} />
        <strong>{fileName || `Drop files for ${tool.name}`}</strong>
        <span className="muted">
          Accepts {tool.inputFormats.join(', ')} → outputs {tool.outputFormats.join(', ')}
        </span>
        <input
          type="file"
          accept={tool.inputFormats.map((f) => `.${f.toLowerCase()}`).join(',')}
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) {
              setFileName(file.name)
              setDone(false)
            }
          }}
        />
      </label>
      <button
        type="button"
        className="btn btn-primary"
        disabled={!fileName}
        onClick={() => setDone(true)}
      >
        Run {tool.name} (mock)
      </button>
      {done && (
        <div className="success-note">
          Mock complete. In production, Inkline would return a downloadable{' '}
          {tool.outputFormats[0]} in about {tool.avgTimeSec}s.
        </div>
      )}
    </div>
  )
}
