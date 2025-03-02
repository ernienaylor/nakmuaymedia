export const metadata = {
  title: 'Shop | Nak Muay Media',
  description: 'Shop for Nak Muay Media merchandise and Muay Thai gear.',
};

import ProductGrid from '@/components/shop/ProductGrid';
import { shopProducts } from '@/lib/data';

export default function ShopPage() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">Shop</h1>
      <p className="text-lg text-neutral-700 mb-8">
        Official Nak Muay Media merchandise and recommended Muay Thai gear.
      </p>
      
      <ProductGrid products={shopProducts} />
    </div>
  );
} 