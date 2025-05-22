import { Suspense } from 'react'
import AddProduct from '@/components/AddProduct'
import ProductGrid from '@/components/ProductGrid'

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <AddProduct />
      </div>

      <Suspense fallback={<div>Loading products...</div>}>
        <ProductGrid />
      </Suspense>
    </div>
  )
}