'use client'

import { useState } from 'react'
import type { Product } from '@/types/product'

export default function ProductList() {
  // Sample data - replace with real data from your database
  const [products, setProducts] = useState<Product[]>([])

  return (
    <div className="space-y-4">
      {products.length === 0 ? (
        <p className="text-gray-500">No products tracked yet. Add some products to start tracking!</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.store}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">{product.currentPrice} {product.currency}</p>
                <p className="text-sm text-gray-500">
                  Last checked: {new Date(product.lastChecked).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))
      )}

      <button
        className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
        onClick={() => {
          // Add product tracking logic
        }}
      >
        Track New Product
      </button>
    </div>
  )
}