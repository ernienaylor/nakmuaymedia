import Link from 'next/link';

export default function HeroSection({ title, subtitle }) {
  return (
    <div style={{ backgroundColor: '#212121', position: 'relative' }} className="py-16 md:py-24">
      {/* Background pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center" style={{ position: 'relative', zIndex: 10 }}>
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ color: '#ffffff' }}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
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