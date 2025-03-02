export const metadata = {
  title: 'Fighters | Nak Muay Media',
  description: 'Profiles of top Muay Thai fighters from around the world, including records, achievements, and fighting styles.',
};

import FighterGrid from '@/components/fighters/FighterGrid';
import { allFighters } from '@/lib/data';

export default function FightersPage() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">Muay Thai Fighters</h1>
      <p className="text-lg text-neutral-700 mb-8">
        Profiles of top Muay Thai fighters from around the world, including records, achievements, and fighting styles.
      </p>
      
      <FighterGrid fighters={allFighters} />
    </div>
  );
} 