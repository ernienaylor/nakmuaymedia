import Link from 'next/link';
import Image from 'next/image';

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative h-52 w-full">
        <Image
          src={article.featuredImage || '/images/default-article.jpg'}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-5">
        <h2 className="text-xl font-heading font-bold mb-2">
          <Link href={`/articles/${article.slug}`} className="text-secondary hover:text-primary transition-colors duration-300">
            {article.title}
          </Link>
        </h2>
        
        <div className="text-sm text-gray-600 mb-3">
          {article.date} | {article.category}
        </div>
        
        <p className="text-gray-700 mb-4">
          {article.excerpt}
        </p>
        
        <Link 
          href={`/articles/${article.slug}`} 
          className="inline-block bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded transition-colors duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard; 