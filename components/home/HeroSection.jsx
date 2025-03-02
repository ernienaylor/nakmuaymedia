import Link from 'next/link';

export default function HeroSection({ title, subtitle }) {
  return (
    <section className="py-12 md:py-20 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            {title || "Your Ringside Seat to Muay Thai Action"}
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            {subtitle || "The premier destination for Muay Thai news, fighter profiles, and event coverage."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition-colors">
              Latest News
            </button>
            <button className="border border-red-600 text-red-600 hover:bg-red-50 py-2 px-6 rounded-md font-medium transition-colors">
              Upcoming Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 