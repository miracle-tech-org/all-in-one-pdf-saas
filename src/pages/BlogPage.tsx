import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import { formatDate } from '../lib/format'

export function BlogPage() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Insights</span>
          <h1>PDF playbooks & product notes</h1>
          <p>Compression, OCR, e-sign, and merge guidance for document-heavy teams.</p>
        </div>
        <div className="grid-cards">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="blog-card">
              <img src={post.cover} alt="" loading="lazy" />
              <p className="muted">
                {formatDate(post.date)} · {post.author}
              </p>
              <h3>{post.title}</h3>
              <p className="muted">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
