import type { BlogPost } from '../types'

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'compress-without-losing-legibility',
    title: 'Compress PDFs without losing legibility',
    excerpt:
      'A practical guide to balanced compression settings for contracts, decks, and image-heavy reports.',
    content:
      'Most teams over-compress once and under-compress forever. Start with a balanced preset, then downsample only full-bleed images. Keep vector text untouched, subset fonts, and preview at 100% zoom before you ship. For board decks, aim under 8MB when emailing and under 25MB for shared drives. Inkline’s size estimator helps you model page count, image density, and target quality before you click export.',
    author: 'Maya Chen',
    date: '2026-09-12',
    cover: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop',
    tags: ['compress', 'quality', 'workflow'],
  },
  {
    id: 'b2',
    slug: 'ocr-for-scanned-contracts',
    title: 'OCR that actually helps legal review',
    excerpt:
      'How searchable layers change intake speed when clients send phone photos of signed pages.',
    content:
      'Scanned contracts block search, redline, and clause comparison. Run OCR early in intake, keep the original image layer for evidence, and store a searchable PDF for review. Multi-language OCR matters for international counterparties. Pair OCR with split tools so each exhibit becomes its own navigable file instead of one 200-page brick.',
    author: 'Jordan Blake',
    date: '2026-08-28',
    cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop',
    tags: ['ocr', 'legal', 'intake'],
  },
  {
    id: 'b3',
    slug: 'esign-checklist-for-teams',
    title: 'An e-sign checklist your ops team will keep',
    excerpt:
      'Field placement, signer order, and completion certificates — without the chaos.',
    content:
      'Define signer roles before you place fields. Use typed signatures for speed and drawn signatures when counterparties require them. Always attach a completion certificate. Watermark drafts as DRAFT until countersignature lands. Inkline’s mock eSign flow demonstrates the product surface teams expect from a modern PDF workspace.',
    author: 'Priya Nair',
    date: '2026-08-04',
    cover: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop',
    tags: ['esign', 'ops', 'checklist'],
  },
  {
    id: 'b4',
    slug: 'merge-order-matters',
    title: 'Why merge order is a product decision',
    excerpt:
      'Cover first, pricing last, appendix in between — and how bookmarks keep readers oriented.',
    content:
      'A merged PDF is a narrative. Put the cover and executive summary first, supporting evidence in the middle, and commercial terms last when you want decisions after context. Preserve bookmarks from source files so stakeholders can jump without scrolling. Drag-and-drop reorder is not a nicety — it is how proposals stay persuasive.',
    author: 'Alex Rivera',
    date: '2026-07-19',
    cover: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=800&fit=crop',
    tags: ['merge', 'sales', 'ux'],
  },
]

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
