import { Estimator } from '../components/estimate/Estimator'

export function EstimatePage() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Estimator</span>
          <h1>PDF size & page estimator</h1>
          <p>
            Model export size from page count, image density, and quality — the finance twin of a
            mortgage calculator for document teams.
          </p>
        </div>
        <Estimator />
      </div>
    </section>
  )
}
