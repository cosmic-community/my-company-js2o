import { CaseStudy } from '@/types'
import CaseStudyCard from '@/components/CaseStudyCard'
import Link from 'next/link'

export default function CaseStudiesSection({ caseStudies }: { caseStudies: CaseStudy[] }) {
  if (!caseStudies || caseStudies.length === 0) return null

  return (
    <section className="section-padding bg-midnight-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Case <span className="text-gradient-gold">Studies</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real results. Real clients. Real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(cs => (
            <CaseStudyCard key={cs.id} caseStudy={cs} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/case-studies" className="btn-electric inline-block">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}