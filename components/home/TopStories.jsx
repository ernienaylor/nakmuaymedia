import Link from 'next/link';
import Image from 'next/image';
import { topStories } from '@/lib/data';

export default function TopStories() {
  // Display only the first 3 stories
  const displayedStories = topStories.slice(0, 3);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {displayedStories.length > 0 ? (
        displayedStories.map((story, index) => (
          <div key={index} style={{ backgroundColor: '#ffffff' }} className="rounded-lg shadow-md overflow-hidden">
            <div className="h-48" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-1">{story.title || "News Article"}</h3>
              <p style={{ color: 'rgba(0, 0, 0, 0.5)' }} className="text-sm mb-2">{story.date || "Recent"}</p>
              <p style={{ color: 'rgba(0, 0, 0, 0.7)' }} className="line-clamp-3">{story.excerpt || "Article excerpt will appear here."}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full" style={{ backgroundColor: '#ffffff' }} className="rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-bold mb-2">News Coming Soon</h3>
          <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Check back for the latest Muay Thai news and updates.</p>
        </div>
      )}
    </div>
  );
} 