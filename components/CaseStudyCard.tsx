import { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import Link from 'next/link'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const title = getMetafieldValue(caseStudy.metadata?.case_title) || caseStudy.title
  const client = getMetafieldValue(caseStudy.metadata?.client)
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const challenge = getMetafieldValue(caseStudy.metadata?.challenge)
  const image = caseStudy.metadata?.cover_image

  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="block group">
      <div className="glass-card rounded-xl overflow-hidden h-full transition-all">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-dark flex items-center justify-center text-5xl">
            📁
          </div>
        )}
        <div className="p-6">
          {industry && (
            <span className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium mb-3 border border-gold/20">
              {industry}
            </span>
          )}
          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-gradient-gold transition-colors">
            {title}
          </h3>
          {client && <p className="text-gray-500 text-sm mb-3">Client: {client}</p>}
          {challenge && (
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{challenge}</p>
          )}
          <span className="text-gold text-sm font-medium mt-4 inline-block">
            Read Case Study →
          </span>
        </div>
      </div>
    </Link>
  )
}