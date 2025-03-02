import React from 'react';

export default function FeaturedFighter({ fighter = {} }) {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg text-white">
      <div className="md:flex">
        <div className="md:w-2/5 relative">
          <div className="h-64 md:h-full bg-gray-700"></div>
        </div>
        
        <div className="p-6 md:w-3/5">
          <h3 className="text-3xl font-bold uppercase text-amber-400 mb-2">
            {fighter.name || "Featured Fighter"}
          </h3>
          <p className="mb-3">
            {fighter.record || "Record: 0-0-0"}
          </p>
          <p className="mb-6 text-gray-300">
            {fighter.bio || "Fighter bio will appear here, describing their fighting style, achievements, and career highlights."}
          </p>
          <button className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300">
            Fighter Profile
          </button>
        </div>
      </div>
    </div>
  );
} 