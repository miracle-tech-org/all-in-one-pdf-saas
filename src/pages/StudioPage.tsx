import { StudioMap } from '../components/studio/StudioMap'

export function StudioPage() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Studio</span>
          <h1>Visual tool explorer</h1>
          <p>
            Browse the Inkline toolkit as a spatial map — filter by category and jump straight into a
            workspace.
          </p>
        </div>
        <StudioMap />
      </div>
    </section>
  )
}
