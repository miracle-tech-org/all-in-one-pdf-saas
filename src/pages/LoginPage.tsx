import { useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppProviders'

export function LoginPage() {
  const { user, login } = useApp()
  const navigate = useNavigate()
  const [name, setName] = useState('Alex Rivera')
  const [email, setEmail] = useState('alex@inkline.demo')

  if (user) return <Navigate to="/dashboard" replace />

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    login(name.trim(), email.trim())
    navigate('/dashboard')
  }

  return (
    <section className="section-tight">
      <div className="container">
        <form className="panel form-stack auth-card" onSubmit={onSubmit}>
          <div>
            <span className="eyebrow">Account</span>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>Sign in</h1>
            <p className="muted">Mock auth — any name and email will work.</p>
          </div>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          <p className="muted">
            New here? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </section>
  )
}
