'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function VideoGrid({ videos = [] }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-black/10">
                {/* Video thumbnail */}
                <button 
                  onClick={() => openVideo(video)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{video.title || "Video Title"}</h3>
                <p className="text-sm text-black/50 mb-2">{video.duration || "00:00"}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Videos Coming Soon</h3>
            <p className="text-black/60">Check back for fight highlights and technique breakdowns.</p>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl">
            <div className="p-4 border-b border-black/10 flex justify-between items-center">
              <h3 className="font-bold">{selectedVideo.title}</h3>
              <button onClick={closeVideo} className="text-black/50 hover:text-black/70">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <p className="text-white">Video player would be embedded here</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 