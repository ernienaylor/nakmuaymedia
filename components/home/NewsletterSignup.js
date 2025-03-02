import React from 'react';

export default function NewsletterSignup() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg mb-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Stay Updated</h2>
      <p className="text-center mb-6">Subscribe to our newsletter for the latest Muay Thai news and updates.</p>
      
      <form className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
} 