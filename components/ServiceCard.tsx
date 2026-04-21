import { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import Link from 'next/link'

export default function ServiceCard({ service }: { service: Service }) {
  const title = getMetafieldValue(service.metadata?.service_title) || service.title
  const wing = getMetafieldValue(service.metadata?.wing)
  const desc = getMetafieldValue(service.metadata?.short_description)
  const emoji = getMetafieldValue(service.metadata?.icon_emoji) || '⚖️'
  const cta = getMetafieldValue(service.metadata?.cta_text) || 'Learn More'

  return (
    <Link href={`/services/${service.slug}`} className="block group">
      <div className="glass-card rounded-xl p-8 h-full transition-all">
        <div className="text-4xl mb-4">{emoji}</div>
        {wing && (
          <span className="inline-block bg-electric/10 text-electric px-3 py-1 rounded-full text-xs font-medium mb-3 border border-electric/20">
            {wing}
          </span>
        )}
        <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-gradient-gold transition-colors">
          {title}
        </h3>
        {desc && (
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{desc}</p>
        )}
        <span className="text-gold text-sm font-medium group-hover:text-gold-light">
          {cta} →
        </span>
      </div>
    </Link>
  )
}