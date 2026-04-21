import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import TeamSection from '@/components/TeamSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import { getServices, getTeamMembers, getCaseStudies, getFeaturedTestimonials, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const [services, team, caseStudies, featuredTestimonials, allTestimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getFeaturedTestimonials(),
    getTestimonials(),
  ])

  const testimonialsToShow = featuredTestimonials.length > 0 ? featuredTestimonials : allTestimonials.slice(0, 3)

  return (
    <>
      <Hero />
      <ServicesGrid services={services} />
      <TeamSection team={team.slice(0, 6)} />
      <CaseStudiesSection caseStudies={caseStudies.slice(0, 3)} />
      <TestimonialsSection testimonials={testimonialsToShow} />
      <CTASection />
    </>
  )
}