'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
    }, 1500);
  };
  
  return (
    <div style={{ backgroundColor: '#212121' }} className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
          Stay Updated with Muay Thai News
        </h2>
        <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Subscribe to our newsletter to receive the latest news, fighter updates, and event announcements.
        </p>
        
        {isSuccess ? (
          <div className="p-4 rounded-lg max-w-md mx-auto" style={{ backgroundColor: 'rgba(255, 193, 7, 0.2)', color: '#ffffff' }}>
            <p className="font-medium">Thank you for subscribing!</p>
            <p className="text-sm mt-1">You'll receive our next newsletter in your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-2 rounded-md border focus:outline-none"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.2)'
                }}
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto py-2 px-4 rounded-md font-medium transition-colors"
                style={{ backgroundColor: '#ffffff', color: '#212121' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {error && <p style={{ color: '#ef5350' }} className="mt-2 text-sm">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
} 