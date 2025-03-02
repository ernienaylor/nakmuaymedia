import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedFighter({ fighter }) {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary-light rounded-lg overflow-hidden shadow-lg text-white">
      <div className="md:flex">
        <div className="md:w-2/5 relative h-64 md:h-auto">
          <div className="relative w-full h-full">
            <Image 
              src={fighter.image || "/images/placeholder.jpg"} 
              alt={fighter.name} 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="p-6 md:w-3/5">
          <h3 className="text-3xl font-heading font-bold uppercase text-accent mb-2">
            {fighter.name}
          </h3>
          <p className="mb-3">
            Record: {fighter.record}
          </p>
          <p className="mb-6 text-neutral-100">
            {fighter.bio}
          </p>
          <Link 
            href={`/fighters/${fighter.slug}`} 
            className="inline-block bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded transition-colors duration-300"
          >
            Fighter Profile
          </Link>
        </div>
      </div>
    </div>
  );
} 