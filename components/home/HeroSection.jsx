import Link from 'next/link';

export default function HeroSection({ title, subtitle }) {
  return (
    <section className="hero">
      <div className="container-custom">
        <div className="hero-content">
          <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="hero-subtitle">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/news" className="btn-primary">
              Latest News
            </Link>
            <Link href="/events" className="btn-outline">
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 