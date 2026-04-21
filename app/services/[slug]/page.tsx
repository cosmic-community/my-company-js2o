// app/services/[slug]/page.tsx
import { getService } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) notFound()

  const title = getMetafieldValue(service.metadata?.service_title) || service.title
  const wing = getMetafieldValue(service.metadata?.wing)
  const fullDesc = getMetafieldValue(service.metadata?.full_description)
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const emoji = getMetafieldValue(service.metadata?.icon_emoji) || '⚖️'
  const image = service.metadata?.featured_image
  const features = service.metadata?.key_features

  const featuresList: string[] = Array.isArray(features) 
    ? features 
    : typeof features === 'string' 
      ? features.split('\n').filter(Boolean) 
      : []

  return (
    <div className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="text-gold hover:text-gold-light mb-8 inline-block">
          ← Back to Services
        </Link>

        <div className="mb-8">
          {wing && (
            <span className="inline-block bg-electric/10 text-electric px-4 py-1 rounded-full text-sm font-medium mb-4 border border-electric/30">
              {wing}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            <span className="text-4xl mr-3">{emoji}</span>
            {title}
          </h1>
          {shortDesc && <p className="text-xl text-gray-400">{shortDesc}</p>}
        </div>

        {image && (
          <img
            src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-96 object-cover rounded-xl mb-12"
          />
        )}

        {fullDesc && (
          <div className="prose prose-invert max-w-none mb-12">
            <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {fullDesc}
            </div>
          </div>
        )}

        {featuresList.length > 0 && (
          <div className="glass-card rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Key Features</h2>
            <ul className="space-y-3">
              {featuresList.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <span className="text-gold mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-center glass-card rounded-xl p-10">
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-400 mb-6">Consult with our experts today</p>
          <a
            href="https://wa.me/923363747047?text=I'm%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block"
          >
            Consult Now →
          </a>
        </div>
      </div>
    </div>
  )
}