import { useState } from 'react'

export function InquiryForm({ toolName }: { toolName: string }) {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="panel">
        <h3>Request received</h3>
        <p className="muted">
          Thanks — this is a mock form. In production, sales would follow up about {toolName}.
        </p>
      </div>
    )
  }

  return (
    <form
      className="panel form-stack"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <h3>Ask about {toolName}</h3>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" required placeholder="Your name" />
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input id="email" type="email" required placeholder="you@company.com" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" required placeholder="Team size, volume, integrations…" />
      </div>
      <button type="submit" className="btn btn-primary">
        Send mock request
      </button>
    </form>
  )
}
