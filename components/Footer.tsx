import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-midnight-900 border-t border-gold/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚖️</span>
              <span className="text-xl font-display font-bold text-white">
                Google<span className="text-gradient-gold">Peak</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              40 Years of Legal Legacy, Digitally Integrated.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-gold">Legal Tech</Link></li>
              <li><Link href="/services" className="hover:text-gold">Digital Estate</Link></li>
              <li><Link href="/services" className="hover:text-gold">Tax Strategy</Link></li>
              <li><Link href="/services" className="hover:text-gold">Family Law</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/team" className="hover:text-gold">Leadership</Link></li>
              <li><Link href="/case-studies" className="hover:text-gold">Case Studies</Link></li>
              <li><Link href="/testimonials" className="hover:text-gold">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Karachi: 0336 37 47 047</li>
              <li>Lahore: 0333 112 7830</li>
              <li>Islamabad: 0333 112 7837</li>
              <li>
                <a href="https://wa.me/923363747047" target="_blank" rel="noopener noreferrer" className="text-electric hover:text-electric-light">
                  WhatsApp →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GooglePeak. Part of Qanoon Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}