import Image from 'next/image';
import Link from 'next/link';

const FeaturedFighter = ({ fighter }) => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary-light rounded overflow-hidden text-white flex flex-col md:flex-row">
      <div className="relative w-full md:w-2/5 h-64 md:h-auto">
        <Image
          src={fighter.image}
          alt={fighter.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6 md:w-3/5">
        <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase text-accent mb-2">
          {fighter.name}
        </h2>
        <p className="mb-3">
          Record: {fighter.wins}-{fighter.losses}-{fighter.draws} ({fighter.ko} KOs)
        </p>
        <p className="mb-4">
          {fighter.shortBio}
        </p>
        <Link 
          href={`/fighters/${fighter.slug}`} 
          className="inline-block bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded transition-colors duration-300"
        >
          Fighter Profile
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFighter; 