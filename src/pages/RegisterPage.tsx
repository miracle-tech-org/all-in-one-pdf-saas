import { useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppProviders'

export function RegisterPage() {
  const { user, register } = useApp()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  if (user) return <Navigate to="/dashboard" replace />

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    register(name.trim(), email.trim())
    navigate('/dashboard')
  }

  return (
    <section className="section-tight">
      <div className="container">
        <form className="panel form-stack auth-card" onSubmit={onSubmit}>
          <div>
            <span className="eyebrow">Account</span>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>Create account</h1>
            <p className="muted">Mock registration — session stored in localStorage.</p>
          </div>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="email">Work email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create account
          </button>
          <p className="muted">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </section>
  )
}
