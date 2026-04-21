import { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'
import Link from 'next/link'

export default function TeamSection({ team }: { team: TeamMember[] }) {
  if (!team || team.length === 0) return null

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Our <span className="text-gradient-gold">Leadership</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            High-profile patrons. Advocates of the Supreme Court. Digital strategists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/team" className="btn-electric inline-block">
            Meet the Full Team
          </Link>
        </div>
      </div>
    </section>
  )
}