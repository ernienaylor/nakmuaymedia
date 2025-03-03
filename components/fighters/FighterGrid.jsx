import Link from 'next/link';
import Image from 'next/image';

export default function FighterGrid({ fighters }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {fighters && fighters.length > 0 ? (
        fighters.map((fighter, index) => (
          <Link href={`/fighters/${fighter.slug}`} key={index}>
            <div className="fighter-card group">
              <div className="relative h-64" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                {fighter.image ? (
                  <Image
                    src={fighter.image}
                    alt={fighter.name}
                    fill
                    className="object-cover object-center group-hover:opacity-90 transition-opacity"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" style={{ color: 'rgba(0, 0, 0, 0.2)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
                {fighter.isChampion && (
                  <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 text-xs font-bold rounded">
                    CHAMPION
                  </div>
                )}
              </div>
              <div className="fighter-card-content">
                <h3 className="fighter-card-name">{fighter.name}</h3>
                <p className="fighter-card-record">{fighter.record}</p>
                <div className="mt-2 flex items-center" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                  <span className="text-sm">{fighter.gym}</span>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="col-span-full text-center py-12" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" style={{ color: 'rgba(0, 0, 0, 0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <h3 className="text-lg font-bold mb-2">No Fighters Found</h3>
          <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Check back soon for fighter profiles.</p>
        </div>
      )}
    </div>
  );
} 