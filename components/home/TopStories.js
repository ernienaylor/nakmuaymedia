import React from 'react';

export default function TopStories({ stories = [] }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
      <div className="space-y-4">
        {stories.length > 0 ? (
          stories.map((story, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">{story.title}</h3>
              <p className="text-sm text-gray-500">{story.date}</p>
            </div>
          ))
        ) : (
          <p>No stories available</p>
        )}
      </div>
    </div>
  );
} 