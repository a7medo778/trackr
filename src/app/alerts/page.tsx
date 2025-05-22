import { Suspense } from 'react'
import AlertList from '@/components/AlertList'

export default function Alerts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Price Alerts</h1>
      
      <Suspense fallback={<div>Loading alerts...</div>}>
        <AlertList />
      </Suspense>
    </div>
  )
}