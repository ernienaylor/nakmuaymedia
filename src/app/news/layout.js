export default function NewsLayout({ children }) {
    return (
      <div>
        <div className="bg-primary-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex space-x-4">
              <a href="/news" className="text-primary-700 hover:text-primary-900">All News</a>
              <a href="/news/category/fights" className="text-primary-700 hover:text-primary-900">Fights</a>
              <a href="/news/category/fighters" className="text-primary-700 hover:text-primary-900">Fighters</a>
              <a href="/news/category/events" className="text-primary-700 hover:text-primary-900">Events</a>
              <a href="/news/category/technique" className="text-primary-700 hover:text-primary-900">Technique</a>
            </nav>
          </div>
        </div>
        {children}
      </div>
    );
  }