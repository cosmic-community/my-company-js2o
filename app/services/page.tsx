import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Our Services | GooglePeak',
  description: 'Premium Legal Tech and Digital Estate services for international clients.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive legal and digital solutions backed by 40 years of expertise
          </p>
        </div>

        {services.length === 0 ? (
          <p className="text-center text-gray-400">No services available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}