import Link from 'next/link';
import Image from 'next/image';

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-card overflow-hidden">
          <Link href={`/shop/${product.slug}`} className="block relative h-64">
            <Image 
              src={product.image || "/images/placeholder.jpg"} 
              alt={product.name}
              fill
              className="object-cover"
            />
          </Link>
          
          <div className="p-4">
            <Link href={`/shop/${product.slug}`}>
              <h3 className="text-lg font-heading font-bold text-secondary hover:text-primary transition-colors duration-200 mb-1">
                {product.name}
              </h3>
            </Link>
            
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-bold text-primary">${product.price}</div>
              <div className="text-xs bg-neutral-100 px-2 py-1 rounded">
                {product.category}
              </div>
            </div>
            
            <p className="text-neutral-700 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
            
            <button className="w-full btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
} 