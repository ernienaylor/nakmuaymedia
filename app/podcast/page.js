export const metadata = {
  title: 'Podcast | Nak Muay Media',
  description: 'Listen to the Nak Muay Media podcast featuring interviews with fighters, coaches, and industry insiders.',
};

import PodcastEpisodeList from '@/components/podcast/PodcastEpisodeList';
import { allPodcasts } from '@/lib/data';

export default function PodcastPage() {
  return (
    <div className="container-custom py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="bg-primary/5 p-6 rounded-lg">
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">The Nak Muay Podcast</h1>
              <p className="text-neutral-700 mb-6">
                Your audio guide to the world of Muay Thai, featuring interviews with fighters, coaches, and industry insiders.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://open.spotify.com/show/example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-[#1DB954] text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <svg className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Spotify
                </a>
                
                <a 
                  href="https://podcasts.apple.com/podcast/example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-[#872EC4] text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <svg className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.586.12 2.035-.024 2.692-.36 1.634-1.08 3.053-2.16 4.159-.709.732-1.317 1.177-2.285 1.634-.84.402-1.2.488-2.036.488-.932 0-1.317-.122-2.035-.513-1.224-.663-1.956-1.609-2.23-2.855-.366-1.634.384-3.301 2.035-4.489.768-.55 1.224-.756 3.13-1.415.817-.28 1.546-.622 1.634-.756.305-.427.305-1.17-.024-1.609-.463-.598-1.707-.878-2.767-.634-.585.134-1.56.695-1.95 1.122-.377.427-.427.427-.878.427-.597 0-.855-.244-.855-.817 0-.695.427-1.44 1.205-2.108 1.121-.963 2.18-1.317 3.862-1.317zm-.183 10.716c-.183 0-.366.024-.549.061-1.67.366-2.814 2.206-2.316 3.779.366 1.195 1.478 2.01 2.694 1.988 1.729-.024 2.961-1.626 2.694-3.487-.244-1.39-1.317-2.341-2.523-2.341z"/>
                  </svg>
                  Apple Podcasts
                </a>
                
                <a 
                  href="https://www.google.com/podcasts?feed=example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-[#4285F4] text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <svg className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 4.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm3 3.6a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm-6 0a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm-3 3.6a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm12 0a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM6 15.6a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm9 0a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm-3 3.6a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                  Google Podcasts
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-heading font-bold mb-6">Latest Episodes</h2>
            <PodcastEpisodeList episodes={allPodcasts} />
          </div>
        </div>
      </div>
    </div>
  );
} 