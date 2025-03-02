export default function NewsArticle({ params }) {
  const { slug } = params;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-heading mb-4">Article: {slug}</h1>
        <div className="prose max-w-none">
          {/* Article content will go here */}
          <p>This is a placeholder for the article content.</p>
        </div>
      </article>
    </div>
  );
} 