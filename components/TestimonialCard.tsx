import { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const name = getMetafieldValue(testimonial.metadata?.client_name) || testimonial.title
  const role = getMetafieldValue(testimonial.metadata?.client_role)
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const photo = testimonial.metadata?.client_photo
  const rating = testimonial.metadata?.rating ?? 5

  const ratingNum = typeof rating === 'number' ? rating : parseInt(String(rating)) || 5

  return (
    <div className="glass-card rounded-xl p-8 h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < ratingNum ? 'text-gold' : 'text-gray-600'}>★</span>
        ))}
      </div>

      {quote && (
        <blockquote className="text-gray-300 leading-relaxed mb-6 flex-grow italic">
          "{quote}"
        </blockquote>
      )}

      <div className="flex items-center gap-4 pt-4 border-t border-gold/10">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-charcoal-light flex items-center justify-center">
            👤
          </div>
        )}
        <div>
          <div className="text-white font-semibold text-sm">{name}</div>
          {role && <div className="text-gray-500 text-xs">{role}</div>}
        </div>
      </div>
    </div>
  )
}