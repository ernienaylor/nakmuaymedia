import React from 'react';

export default function FeaturedMedia({ video, podcast }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Featured Media</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {video && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">Featured Video</h3>
            <div className="bg-gray-200 h-40 mb-2"></div>
            <p>{video.title}</p>
          </div>
        )}
        
        {podcast && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">Latest Podcast</h3>
            <div className="bg-gray-200 h-40 mb-2"></div>
            <p>{podcast.title}</p>
          </div>
        )}
      </div>
    </div>
  );
} 