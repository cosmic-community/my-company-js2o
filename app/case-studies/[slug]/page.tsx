// app/case-studies/[slug]/page.tsx
import { getCaseStudy } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = await getCaseStudy(slug)

  if (!cs) notFound()

  const title = getMetafieldValue(cs.metadata?.case_title) || cs.title
  const client = getMetafieldValue(cs.metadata?.client)
  const industry = getMetafieldValue(cs.metadata?.industry)
  const challenge = getMetafieldValue(cs.metadata?.challenge)
  const solution = getMetafieldValue(cs.metadata?.solution)
  const results = getMetafieldValue(cs.metadata?.results)
  const image = cs.metadata?.cover_image
  const date = getMetafieldValue(cs.metadata?.completion_date)
  const relatedService = cs.metadata?.related_service

  return (
    <div className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/case-studies" className="text-gold hover:text-gold-light mb-8 inline-block">
          ← Back to Case Studies
        </Link>

        <div className="mb-8">
          {industry && (
            <span className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-medium mb-4 border border-gold/30">
              {industry}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-400">
            {client && <span><strong className="text-white">Client:</strong> {client}</span>}
            {date && <span><strong className="text-white">Completed:</strong> {new Date(date).toLocaleDateString()}</span>}
          </div>
        </div>

        {image && (
          <img
            src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-96 object-cover rounded-xl mb-12"
          />
        )}

        <div className="space-y-8">
          {challenge && (
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-display font-bold text-gold mb-4">The Challenge</h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{challenge}</p>
            </div>
          )}
          {solution && (
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-display font-bold text-electric mb-4">Our Solution</h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{solution}</p>
            </div>
          )}
          {results && (
            <div className="glass-card rounded-xl p-8 border-gold/40">
              <h2 className="text-2xl font-display font-bold text-gradient-gold mb-4">Results</h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{results}</p>
            </div>
          )}
        </div>

        {relatedService && (
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Interested in similar results?</p>
            <Link href={`/services/${relatedService.slug}`} className="btn-gold inline-block">
              Explore {relatedService.title}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}