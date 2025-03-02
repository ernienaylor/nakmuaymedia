export const metadata = {
  title: 'Videos | Nak Muay Media',
  description: 'Technique breakdowns, fighter interviews, and behind-the-scenes content from the world of Muay Thai.',
};

import VideoGrid from '@/components/videos/VideoGrid';
import { allVideos } from '@/lib/data';

export default function VideosPage() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">Muay Thai Videos</h1>
      <p className="text-lg text-neutral-700 mb-8">
        Watch technique breakdowns, fighter interviews, and behind-the-scenes content from the world of Muay Thai.
      </p>
      
      <VideoGrid videos={allVideos} />
    </div>
  );
} 