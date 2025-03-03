import Link from 'next/link';
import Image from 'next/image';

export default function NewsGrid({ stories }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories && stories.length > 0 ? (
        stories.map((story, index) => (
          <Link href={`/news/${story.slug}`} key={index}>
            <div className="news-card group">
              <div className="relative h-48" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                {story.image ? (
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover object-center group-hover:opacity-90 transition-opacity"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" style={{ color: 'rgba(0, 0, 0, 0.2)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                )}
                {story.category && (
                  <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 text-xs font-bold rounded">
                    {story.category.toUpperCase()}
                  </div>
                )}
              </div>
              <div className="news-card-content">
                <h3 className="news-card-title">{story.title}</h3>
                <div className="news-card-meta">
                  <span>{story.date}</span>
                  {story.author && (
                    <>
                      <span className="mx-1">•</span>
                      <span>{story.author}</span>
                    </>
                  )}
                </div>
                <p className="news-card-excerpt">{story.excerpt}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="col-span-full text-center py-12" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" style={{ color: 'rgba(0, 0, 0, 0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <h3 className="text-lg font-bold mb-2">No Stories Found</h3>
          <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Check back soon for the latest news.</p>
        </div>
      )}
    </div>
  );
} 