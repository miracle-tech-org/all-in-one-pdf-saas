import type { Workflow } from '../types'

export const workflows: Workflow[] = [
  {
    id: 'w1',
    slug: 'sales-proposal-pipeline',
    name: 'Sales proposal pipeline',
    industry: 'Sales',
    description:
      'Draft in Word, publish to PDF, merge exhibits, and collect signatures in one repeatable flow.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop',
    steps: [
      'Convert Word draft to PDF',
      'Merge pricing appendix and case studies',
      'Apply brand watermark',
      'Send for e-signature',
    ],
    toolIds: ['t4', 't1', 't12', 't9'],
    timeSavedHours: 6,
    teamsUsing: 1280,
    highlights: ['Faster closes', 'Consistent branding', 'Audit-ready signatures'],
  },
  {
    id: 'w2',
    slug: 'legal-intake-packet',
    name: 'Legal intake packet',
    industry: 'Legal',
    description:
      'Split bulky client packs, protect confidential exhibits, and keep searchable working copies.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=800&fit=crop',
    steps: [
      'Split intake PDF by matter section',
      'OCR scanned exhibits',
      'Password-protect confidential pages',
      'Archive a clean working set',
    ],
    toolIds: ['t2', 't8', 't7', 't5'],
    timeSavedHours: 9,
    teamsUsing: 840,
    highlights: ['Matter clarity', 'Secure sharing', 'Searchable archives'],
  },
  {
    id: 'w3',
    slug: 'content-repurpose',
    name: 'Content repurpose desk',
    industry: 'Marketing',
    description:
      'Pull copy from PDFs into Word, polish edits, and ship image exports for campaigns.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop',
    steps: [
      'Convert PDF whitepaper to Word',
      'Edit and annotate updates',
      'Export hero pages as JPG',
      'Compress final share pack',
    ],
    toolIds: ['t3', 't6', 't10', 't5'],
    timeSavedHours: 5,
    teamsUsing: 1560,
    highlights: ['Reusable assets', 'Faster campaigns', 'Smaller share files'],
  },
  {
    id: 'w4',
    slug: 'finance-close-kit',
    name: 'Finance close kit',
    industry: 'Finance',
    description:
      'Compress board packs, watermark drafts, and keep month-end PDFs under email limits.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop',
    steps: [
      'Compress month-end PDF pack',
      'Watermark draft vs final',
      'Merge ledger extracts',
      'Estimate upload size before send',
    ],
    toolIds: ['t5', 't12', 't1'],
    timeSavedHours: 4,
    teamsUsing: 990,
    highlights: ['Inbox-friendly size', 'Draft control', 'Clean merges'],
  },
  {
    id: 'w5',
    slug: 'records-digitize',
    name: 'Records digitize lane',
    industry: 'Operations',
    description:
      'Turn paper scans into searchable PDFs that teams can find, quote, and archive.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop',
    steps: [
      'OCR scanned binders',
      'Rotate misaligned pages',
      'Split by department',
      'Protect restricted records',
    ],
    toolIds: ['t8', 't11', 't2', 't7'],
    timeSavedHours: 12,
    teamsUsing: 720,
    highlights: ['Searchable history', 'Correct orientation', 'Access control'],
  },
]

export function getWorkflowBySlug(slug: string) {
  return workflows.find((w) => w.slug === slug)
}

export function getWorkflowById(id: string) {
  return workflows.find((w) => w.id === id)
}
