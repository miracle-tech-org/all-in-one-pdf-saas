import { Link, useParams } from 'react-router-dom'
import { getPostBySlug } from '../data/blog'
import { formatDate } from '../lib/format'

export function BlogDetailPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug ?? '')

  if (!post) {
    return (
      <section className="section-tight">
        <div className="container empty">
          Article not found. <Link to="/blog">Back to insights</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section-tight">
      <div className="container" style={{ maxWidth: '780px' }}>
        <div className="page-hero">
          <span className="eyebrow">{formatDate(post.date)}</span>
          <h1>{post.title}</h1>
          <p>
            By {post.author}
          </p>
        </div>
        <img
          src={post.cover}
          alt=""
          style={{ width: '100%', borderRadius: 'var(--radius)', marginBottom: '1.75rem', aspectRatio: '16/9', objectFit: 'cover' }}
        />
        <div className="prose">
          {post.content.split('\n').map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
        <div className="tag-row" style={{ marginTop: '1.5rem' }}>
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Link to="/blog" className="btn btn-secondary">
            All insights
          </Link>
        </div>
      </div>
    </section>
  )
}
