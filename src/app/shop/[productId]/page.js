export default function ProductPage({ params }) {
  const { productId } = params;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
              {/* Product image will go here */}
              <div className="flex items-center justify-center">
                <p>Product Image</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-3xl font-heading mb-2">{productId}</h1>
            <p className="text-2xl text-primary-600 mb-4">$99.99</p>
            
            <div className="prose max-w-none mb-6">
              <p>This is a placeholder for the product description.</p>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-primary-500">S</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-primary-500">M</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-primary-500">L</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-primary-500">XL</button>
              </div>
            </div>
            
            <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-md hover:bg-primary-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 