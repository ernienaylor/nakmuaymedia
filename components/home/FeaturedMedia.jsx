import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedMedia({ video, podcast }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="video-card h-full">
          <div className="video-card-image">
            <Image 
              src={video.thumbnail || "/images/placeholder.jpg"} 
              alt={video.title} 
              width={800}
              height={450}
              className="video-thumbnail h-64 md:h-96"
            />
            <div className="video-play-button">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="video-card-content">
            <h3 className="video-card-title">{video.title}</h3>
            <p className="video-card-meta">{video.date} | {video.duration}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-primary-500 bg-opacity-5 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="rounded-full bg-primary p-2 mr-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
            </svg>
          </div>
          <h3 className="text-xl font-heading font-bold">Latest Podcast</h3>
        </div>
        
        <h4 className="text-lg font-heading font-bold mb-2">{podcast.title}</h4>
        <p className="text-neutral-700 mb-4">{podcast.description}</p>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a href={podcast.playUrl} className="btn-primary text-center text-sm py-1">
            <span className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm112 344c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16v176z"/>
              </svg>
              Play Now
            </span>
          </a>
          <Link href={`/podcast/${podcast.slug}`} className="btn-outline text-center text-sm py-1">
            View Episode
          </Link>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-neutral-500">{podcast.duration} | {podcast.date}</span>
          <div className="flex space-x-2">
            <a href={podcast.shareUrl} className="text-secondary hover:text-primary">
              <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M426.8 14.2C446-5 477.5-4.6 497 14.9s20 51 0 71.1-128.7 128.7-277.8 277.8C90.4 492.6 29.5 510.6 1 482.1s-10.4-89.4 118.4-218.2L272 111.1V208c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h76.2L96.6 235.6c-92.3 92.3-92.3 241.8 0 334.1 92.3 92.3 241.8 92.3 334.1 0L426.8 14.2z"/>
              </svg>
            </a>
            <a href={podcast.downloadUrl} className="text-secondary hover:text-primary">
              <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M94.8 71.2C77.3 53.7 48.7 53.7 31.2 71.2s-17.5 46.1 0 63.6l160 160c17.5 17.5 46.1 17.5 63.6 0l160-160c17.5-17.5 17.5-46.1 0-63.6s-46.1-17.5-63.6 0L224 197.4 94.8 71.2zM448 420c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 