import React from 'react';

export default function NewsGrid({ stories = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories.length > 0 ? (
        stories.map((story, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-1">{story.title || "News Article"}</h3>
              <p className="text-sm text-gray-500 mb-2">{story.date || "Recent"}</p>
              <p className="text-gray-700 line-clamp-3">{story.excerpt || "Article excerpt will appear here."}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-bold mb-2">News Coming Soon</h3>
          <p className="text-gray-600">Check back for the latest Muay Thai news and updates.</p>
        </div>
      )}
    </div>
  );
} 