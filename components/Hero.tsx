export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-electric rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-sm font-medium">Premium Legal & Digital Consultancy</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
            40 Years of Legal Legacy,
            <br />
            <span className="text-gradient-gold">Digitally Integrated.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Serving international business owners, overseas Pakistanis, and digital real estate investors through our Legal Tech and Digital Estate wings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/923363747047?text=I%27m%20interested%20in%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-center"
            >
              Consult Now →
            </a>
            <a href="/services" className="btn-electric text-center">
              Explore Services
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">40+</div>
              <div className="text-sm text-gray-400 mt-1">Years Legacy</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">100+</div>
              <div className="text-sm text-gray-400 mt-1">Site Network</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">Global</div>
              <div className="text-sm text-gray-400 mt-1">Client Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}