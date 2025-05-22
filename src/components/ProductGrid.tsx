'use client'

import { useState } from 'react'
import type { Product } from '@/types/product'

export default function ProductGrid() {
  // Sample data - replace with real data from your database
  const [products, setProducts] = useState<Product[]>([])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length === 0 ? (
        <p className="col-span-full text-center text-gray-500 py-8">
          No products found. Add some products to start tracking!
        </p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{product.store}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">
                  {product.currentPrice} {product.currency}
                </span>
                <button
                  onClick={() => {
                    // Add to tracking logic
                  }}
                  className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition-colors"
                >
                  Track
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}