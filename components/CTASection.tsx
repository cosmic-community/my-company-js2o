export default function CTASection() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric rounded-full blur-[100px]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Partner With <span className="text-gradient-gold">GooglePeak</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our 100+ site network or get expert legal consultation. We serve international business owners, overseas Pakistanis, and digital real estate investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/923363747047?text=I%27m%20interested%20in%20partnering%20with%20GooglePeak"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Start Consultation
              </a>
              <a
                href="https://wa.me/923363747047?text=I%20want%20to%20join%20your%20partner%20network"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}