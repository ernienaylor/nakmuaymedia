import Link from 'next/link';
import Image from 'next/image';

export default function PodcastEpisodeList({ episodes }) {
  return (
    <div className="space-y-6">
      {episodes.map((episode) => (
        <div key={episode.id} className="bg-white rounded-lg shadow-card overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 relative">
              <div className="relative h-48 md:h-full">
                <Image 
                  src={episode.image || "/images/placeholder.jpg"} 
                  alt={episode.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 flex items-end">
                  <div className="p-4 text-white">
                    <div className="text-sm font-medium">Episode {episode.episode}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 md:w-2/3">
              <Link href={`/podcast/${episode.slug}`}>
                <h3 className="text-xl font-heading font-bold text-secondary hover:text-primary transition-colors duration-200 mb-1">
                  {episode.title}
                </h3>
              </Link>
              
              <div className="flex justify-between items-center text-sm text-neutral-500 mb-3">
                <div>{episode.date}</div>
                <div>{episode.duration}</div>
              </div>
              
              <p className="text-neutral-700 mb-4">{episode.description}</p>
              
              <div className="flex flex-wrap gap-3">
                <a href={episode.playUrl} className="btn-primary text-sm py-1 px-3">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Play
                  </span>
                </a>
                
                <Link href={`/podcast/${episode.slug}`} className="btn-outline text-sm py-1 px-3">
                  View Episode
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 