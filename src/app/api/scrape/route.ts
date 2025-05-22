import { NextResponse } from 'next/server'
import { scrapeProduct } from '@/lib/scraper'
import { isSupported } from '@/lib/scraper/stores'

export async function POST(request: Request) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    if (!isSupported(url)) {
      return NextResponse.json({ error: 'Store not supported' }, { status: 400 })
    }

    const product = await scrapeProduct(url)
    return NextResponse.json(product)
  } catch (error) {
    console.error('Scraping error:', error)
    return NextResponse.json({ error: 'Failed to scrape product' }, { status: 500 })
  }
}