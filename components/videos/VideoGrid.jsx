'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function VideoGrid({ videos }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <Link href={`/videos/${video.slug}`}>
            <div className="video-card-image">
              <Image
                src={video.thumbnail || "/images/placeholder.jpg"}
                alt={video.title}
                width={400}
                height={225}
                className="video-thumbnail"
              />
              <div className="video-play-button">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </Link>
          <div className="video-card-content">
            <Link href={`/videos/${video.slug}`}>
              <h3 className="video-card-title">{video.title}</h3>
            </Link>
            <div className="flex justify-between items-center">
              <p className="video-card-meta">{video.date}</p>
              <p className="video-card-meta">{video.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 