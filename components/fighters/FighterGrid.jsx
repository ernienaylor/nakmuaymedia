import Link from 'next/link';
import Image from 'next/image';

export default function FighterGrid({ fighters }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {fighters.map((fighter) => (
        <div key={fighter.id} className="fighter-card">
          <div className="relative h-64">
            <Image
              src={fighter.image || "/images/placeholder.jpg"}
              alt={fighter.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="fighter-card-content">
            <h3 className="fighter-card-name">{fighter.name}</h3>
            <p className="fighter-card-record">{fighter.record}</p>
            <p className="text-sm text-neutral-700 mb-3 line-clamp-2">{fighter.bio}</p>
            <Link href={`/fighters/${fighter.slug}`} className="btn-primary text-sm">
              View Profile
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
} 