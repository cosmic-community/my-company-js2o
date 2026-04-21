import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'

export const metadata = {
  title: 'Our Team | GooglePeak',
  description: 'Meet our leadership team of advocates and legal experts.',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our <span className="text-gradient-gold">Leadership</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            High-profile advocates, bar leaders, and digital strategists
          </p>
        </div>

        {team.length === 0 ? (
          <p className="text-center text-gray-400">No team members listed yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}