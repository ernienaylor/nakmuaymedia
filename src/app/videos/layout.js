export default function VideosLayout({ children }) {
  return (
    <div>
      <div className="bg-primary-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-4">
            <a href="/videos" className="text-primary-700 hover:text-primary-900">All Videos</a>
            <a href="/videos/category/highlights" className="text-primary-700 hover:text-primary-900">Highlights</a>
            <a href="/videos/category/interviews" className="text-primary-700 hover:text-primary-900">Interviews</a>
            <a href="/videos/category/technique" className="text-primary-700 hover:text-primary-900">Technique</a>
            <a href="/videos/category/documentaries" className="text-primary-700 hover:text-primary-900">Documentaries</a>
          </nav>
        </div>
      </div>
      {children}
    </div>
  );
} 