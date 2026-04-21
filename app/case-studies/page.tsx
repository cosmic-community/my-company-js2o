import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Case Studies | GooglePeak',
  description: 'Real results from our legal and digital estate work.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Case <span className="text-gradient-gold">Studies</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Proven results across legal, tax, and digital estate services
          </p>
        </div>

        {caseStudies.length === 0 ? (
          <p className="text-center text-gray-400">No case studies available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map(cs => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}