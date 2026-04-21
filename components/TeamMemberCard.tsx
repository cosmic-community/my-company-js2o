import { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import Link from 'next/link'

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.full_name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const credentials = getMetafieldValue(member.metadata?.credentials)
  const portrait = member.metadata?.portrait

  return (
    <Link href={`/team/${member.slug}`} className="block group">
      <div className="glass-card rounded-xl overflow-hidden h-full transition-all">
        {portrait ? (
          <img
            src={`${portrait.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full aspect-square object-cover"
          />
        ) : (
          <div className="w-full aspect-square bg-charcoal-light flex items-center justify-center text-6xl">
            👤
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-gradient-gold transition-colors">
            {name}
          </h3>
          {role && <p className="text-gold text-sm font-medium mb-1">{role}</p>}
          {credentials && <p className="text-gray-500 text-xs italic line-clamp-1">{credentials}</p>}
        </div>
      </div>
    </Link>
  )
}