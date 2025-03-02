export const metadata = {
  title: 'News | Nak Muay Media',
  description: 'The latest Muay Thai news, fight results, and industry updates.',
};

import Link from 'next/link';
import NewsGrid from '@/components/news/NewsGrid.jsx';
import { topStories } from '@/lib/data';

export default function NewsPage() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">Muay Thai News</h1>
      <p className="text-lg text-neutral-700 mb-8">
        Stay up to date with the latest fight results, industry updates, and in-depth Muay Thai coverage.
      </p>
      
      <NewsGrid stories={topStories} />
    </div>
  );
} 