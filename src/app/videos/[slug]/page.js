export default function VideoPage({ params }) {
  const { slug } = params;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-heading mb-4">Video: {slug}</h1>
        <div className="aspect-w-16 aspect-h-9 mb-6 bg-gray-200">
          {/* Video player will go here */}
          <div className="flex items-center justify-center">
            <p>Video Player Placeholder</p>
          </div>
        </div>
        <div className="prose max-w-none">
          <p>This is a placeholder for the video description.</p>
        </div>
      </div>
    </div>
  );
} 