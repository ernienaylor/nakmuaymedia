import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { topStories } from '@/lib/data';

export async function generateMetadata({ params }) {
  const story = topStories.find(story => story.slug === params.slug);
  
  if (!story) {
    return {
      title: 'Article Not Found',
    };
  }
  
  return {
    title: `${story.title} | Nak Muay Media`,
    description: story.excerpt,
  };
}

export default function ArticlePage({ params }) {
  const story = topStories.find(story => story.slug === params.slug);
  
  if (!story) {
    notFound();
  }
  
  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/news" className="text-sm text-neutral-500 hover:text-primary">
            ← Back to News
          </Link>
        </div>
        
        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {story.title}
            </h1>
            
            <div className="flex items-center text-sm text-neutral-500 mb-6">
              <span>{story.date}</span>
              <span className="mx-2">•</span>
              <span>{story.category}</span>
              <span className="mx-2">•</span>
              <span>By {story.author}</span>
            </div>
            
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image 
                src={story.image}
                alt={story.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <p>{story.excerpt}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl.</p>
            <h2>Heading Within Article</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl.</p>
            <blockquote>
              <p>This is a quote from someone relevant to the article. It adds credibility and breaks up the text.</p>
            </blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl.</p>
          </div>
        </article>
      </div>
    </div>
  );
} 