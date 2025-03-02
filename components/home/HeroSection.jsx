import Link from 'next/link';

export default function HeroSection({ title, subtitle }) {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold font-heading mb-4">
            {title || "Your Ringside Seat to Muay Thai Action"}
          </h1>
          <p className="text-xl text-gray-700">
            {subtitle || "The premier destination for Muay Thai news, fighter profiles, and event coverage."}
          </p>
        </div>
      </div>
    </section>
  );
} 