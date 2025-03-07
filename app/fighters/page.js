export const metadata = {
  title: 'Fighters | Nak Muay Media',
  description: 'Profiles of top Muay Thai fighters from around the world, including records, achievements, and fighting styles.',
};

import FighterGrid from '@/components/fighters/FighterGrid.jsx';
import { allFighters } from '@/lib/data';

export default function FightersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Muay Thai Fighters</h1>
      <p className="text-lg text-black/70 mb-8">
        Profiles of top Muay Thai fighters from around the world, including records, achievements, and fighting styles.
      </p>
      
      <FighterGrid fighters={allFighters} />
    </div>
  );
} 