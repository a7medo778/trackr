export interface Product {
  id: string
  name: string
  description?: string
  currentPrice: number
  currency: string
  url: string
  imageUrl?: string
  store: string
  category?: string
  brand?: string
  lastChecked: Date
  priceHistory: PricePoint[]
}

export interface PricePoint {
  price: number
  date: Date
}

export interface Alert {
  id: string
  userId: string
  productId: string
  targetPrice: number
  active: boolean
  createdAt: Date
}