import ProductGrid from '@/components/shop/ProductGrid';
import { shopProducts } from '@/lib/data';

export const metadata = {
  title: 'Shop | Nak Muay Media',
  description: 'Shop for Muay Thai gear, apparel, and merchandise.',
};

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Nak Muay Shop</h1>
      <p className="text-lg text-neutral-700 mb-8">
        Shop for Muay Thai gear, apparel, and merchandise.
      </p>
      
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Shop Coming Soon</h2>
        <p className="text-neutral-600">
          We're working on bringing you high-quality Muay Thai gear and apparel.
          Check back soon for our product lineup!
        </p>
      </div>
    </div>
  );
} 