import { Suspense } from 'react'
import PriceChart from '@/components/PriceChart'
import ProductList from '@/components/ProductList'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Price Trends</h2>
          <Suspense fallback={<div>Loading chart...</div>}>
            <PriceChart />
          </Suspense>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Tracked Products</h2>
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}