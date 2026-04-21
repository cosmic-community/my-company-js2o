import { Service } from '@/types'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export default function ServicesGrid({ services }: { services: Service[] }) {
  if (!services || services.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-midnight-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Our <span className="text-gradient-gold">Service Wings</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Two distinct wings. One powerful mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {services.length > 6 && (
          <div className="text-center mt-10">
            <Link href="/services" className="btn-electric inline-block">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}