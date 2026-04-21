import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata = {
  title: 'Testimonials | GooglePeak',
  description: 'What our clients say about working with GooglePeak.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Client <span className="text-gradient-gold">Testimonials</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Trusted by international business owners and overseas Pakistanis
          </p>
        </div>

        {testimonials.length === 0 ? (
          <p className="text-center text-gray-400">No testimonials yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}