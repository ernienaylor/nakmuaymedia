export default function PodcastEpisodePage({ params }) {
  const { episodeId } = params;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-heading mb-4">Episode {episodeId}</h1>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          {/* Podcast player will go here */}
          <div className="flex items-center justify-center h-24">
            <p>Podcast Player Placeholder</p>
          </div>
        </div>
        <div className="prose max-w-none">
          <p>This is a placeholder for the episode show notes.</p>
        </div>
      </div>
    </div>
  );
} 