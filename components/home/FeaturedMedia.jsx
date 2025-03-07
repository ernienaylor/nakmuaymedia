import Image from 'next/image';
import Link from 'next/link';
import { featuredVideos } from '@/lib/data';

export default function FeaturedMedia() {
  // Display only the first 3 videos
  const displayedVideos = featuredVideos.slice(0, 3);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {displayedVideos.length > 0 ? (
        displayedVideos.map((video, index) => (
          <div key={index} style={{ backgroundColor: '#ffffff' }} className="rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
              {/* Video thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(211, 47, 47, 0.8)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" style={{ color: '#ffffff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-1">{video.title || "Video Title"}</h3>
              <p style={{ color: 'rgba(0, 0, 0, 0.5)' }} className="text-sm mb-2">{video.duration || "00:00"}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full" style={{ backgroundColor: '#ffffff' }} className="rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Videos Coming Soon</h3>
          <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Check back for fight highlights and technique breakdowns.</p>
        </div>
      )}
    </div>
  );
} 