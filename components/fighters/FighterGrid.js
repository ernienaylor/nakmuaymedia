import React from 'react';

export default function FighterGrid({ fighters = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {fighters.length > 0 ? (
        fighters.map((fighter, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{fighter.name || "Fighter Name"}</h3>
              <p className="text-sm text-gray-500">{fighter.record || "Record: 0-0-0"}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Fighter Profiles Coming Soon</h3>
          <p className="text-gray-600">Check back soon for fighter profiles and statistics.</p>
        </div>
      )}
    </div>
  );
} 