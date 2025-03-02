import Link from 'next/link';
import Image from 'next/image';

export default function TopStories({ stories }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories.map((story) => (
        <div key={story.id} className="news-card">
          <div className="news-card-image">
            <Image 
              src={story.image || "/images/placeholder.jpg"} 
              alt={story.title} 
              width={400}
              height={225}
              className="w-full h-full object-cover"
            />
            <div className="news-card-category">{story.category}</div>
          </div>
          <div className="news-card-content">
            <Link href={`/news/${story.slug}`}>
              <h3 className="news-card-title">{story.title}</h3>
            </Link>
            <div className="news-card-meta">{story.date}</div>
            <p className="news-card-excerpt">
              {story.excerpt}
            </p>
            <Link href={`/news/${story.slug}`} className="btn-primary text-sm">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
} 