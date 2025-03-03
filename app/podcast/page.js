import PodcastEpisodeList from '@/components/podcast/PodcastEpisodeList';
import { allPodcasts } from '@/lib/data';

export const metadata = {
  title: 'Podcast | Nak Muay Media',
  description: 'Listen to our podcast featuring interviews with fighters, trainers, and Muay Thai experts.',
};

export default function PodcastPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Nak Muay Podcast</h1>
      <p className="text-lg text-black/70 mb-8">
        Listen to our podcast featuring interviews with fighters, trainers, and Muay Thai experts.
      </p>
      
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Podcast Coming Soon</h2>
        <p className="text-black/60">
          We're working on bringing you insightful conversations with the biggest names in Muay Thai.
          Check back soon for our first episodes!
        </p>
      </div>
    </div>
  );
} 