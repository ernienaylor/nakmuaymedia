import Link from 'next/link';

export default function HeroSection({ title, subtitle }) {
  return (
    <div className="bg-secondary py-16 md:py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/news" className="btn btn-primary">
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