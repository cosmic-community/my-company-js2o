// app/team/[slug]/page.tsx
import { getTeamMember } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = await getTeamMember(slug)

  if (!member) notFound()

  const name = getMetafieldValue(member.metadata?.full_name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const credentials = getMetafieldValue(member.metadata?.credentials)
  const bio = getMetafieldValue(member.metadata?.bio)
  const portrait = member.metadata?.portrait
  const linkedin = getMetafieldValue(member.metadata?.linkedin_url)
  const email = getMetafieldValue(member.metadata?.email)
  const specs = member.metadata?.specializations

  const specsList: string[] = Array.isArray(specs) 
    ? specs 
    : typeof specs === 'string' 
      ? specs.split(',').map(s => s.trim()).filter(Boolean) 
      : []

  return (
    <div className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/team" className="text-gold hover:text-gold-light mb-8 inline-block">
          ← Back to Team
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            {portrait && (
              <img
                src={`${portrait.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                alt={name}
                className="w-full aspect-square object-cover rounded-xl glass-card"
              />
            )}
            <div className="mt-6 space-y-3">
              {email && (
                <a href={`mailto:${email}`} className="block text-gray-400 hover:text-gold text-sm">
                  ✉ {email}
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="block text-electric hover:text-electric-light text-sm">
                  → LinkedIn Profile
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-4xl font-display font-bold text-white mb-2">{name}</h1>
            {role && <p className="text-xl text-gold mb-2">{role}</p>}
            {credentials && <p className="text-sm text-gray-500 mb-6 italic">{credentials}</p>}

            {bio && (
              <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line mb-8">
                {bio}
              </div>
            )}

            {specsList.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {specsList.map((spec, idx) => (
                    <span key={idx} className="px-3 py-1 bg-charcoal-light rounded-full text-sm text-gray-300 border border-gold/20">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}