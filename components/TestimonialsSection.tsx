import { Testimonial } from '@/types'
import TestimonialCard from '@/components/TestimonialCard'

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials || testimonials.length === 0) return null

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            What Clients <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Trusted by international business owners worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}