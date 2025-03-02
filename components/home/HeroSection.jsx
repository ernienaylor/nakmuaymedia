import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Nak Muay Media
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Your premier destination for Muay Thai news, fighter profiles, and event coverage from around the world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/news" className="btn btn-secondary">
            Latest News
          </Link>
          <Link href="/fighters" className="btn btn-outline">
            Fighter Profiles
          </Link>
        </div>
      </div>
    </div>
  );
} 