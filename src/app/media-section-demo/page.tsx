import { MediaSection, sampleFeaturedVideo, sampleRelatedVideos, sampleFeaturedPodcast, sampleRecentEpisodes } from "@/components/home/media-section"

export default function MediaSectionDemoPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Media Section Component</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          An enhanced media section that showcases featured videos and podcasts with an immersive 
          interface. This component combines the sleek design of premium streaming platforms with 
          the energy of sports media to create an engaging multimedia experience.
        </p>
      </div>

      <MediaSection 
        featuredVideo={sampleFeaturedVideo}
        relatedVideos={sampleRelatedVideos}
        featuredPodcast={sampleFeaturedPodcast}
        recentEpisodes={sampleRecentEpisodes}
        className="bg-neutral-light py-12 rounded-lg"
      />

      <div className="mt-16 mb-8">
        <h2 className="text-2xl font-bold mb-4">Component Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Tabbed interface for switching between video and podcast content</li>
          <li>Featured content with prominent display and detailed information</li>
          <li>Related/recent content carousels for additional media discovery</li>
          <li>Interactive media player controls with time tracking</li>
          <li>Responsive design that adapts to all screen sizes</li>
          <li>Smooth animations and transitions for an engaging user experience</li>
          <li>Accessibility features including keyboard navigation and ARIA attributes</li>
        </ul>
      </div>
    </main>
  )
} 