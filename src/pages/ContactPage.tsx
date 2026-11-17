import { useState, type FormEvent } from 'react'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Contact</span>
          <h1>Talk with Inkline</h1>
          <p>Ask about team plans, SSO, or high-volume PDF processing. This form is mock-only.</p>
        </div>

        {sent ? (
          <div className="panel form-card">
            <h2 style={{ marginBottom: '0.5rem' }}>Message sent</h2>
            <p className="muted">Thanks — in a real product this would reach the sales inbox.</p>
          </div>
        ) : (
          <form className="panel form-stack form-card" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" required placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Work email</label>
              <input id="email" type="email" required placeholder="you@company.com" />
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input id="company" placeholder="Company name" />
            </div>
            <div className="field">
              <label htmlFor="topic">Topic</label>
              <select id="topic" defaultValue="team">
                <option value="team">Team plan</option>
                <option value="api">API / automation</option>
                <option value="security">Security review</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" required placeholder="Tell us what you need…" />
            </div>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
