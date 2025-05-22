import puppeteer from 'puppeteer'
import type { Product } from '@/types/product'

export async function scrapeProduct(url: string): Promise<Partial<Product>> {
  const browser = await puppeteer.launch({
    headless: 'new'
  })

  try {
    const page = await browser.newPage()
    await page.goto(url)

    // Basic scraping logic - customize based on target sites
    const product: Partial<Product> = {
      url,
      name: await page.$eval('h1', (el) => el.textContent) || '',
      currentPrice: 0, // Implement price extraction logic
      currency: 'KWD',
      store: new URL(url).hostname,
      lastChecked: new Date()
    }

    return product
  } catch (error) {
    console.error(`Error scraping ${url}:`, error)
    throw error
  } finally {
    await browser.close()
  }
}

export async function updatePrices(products: Product[]): Promise<void> {
  for (const product of products) {
    try {
      const updatedProduct = await scrapeProduct(product.url)
      // Update database with new price
      console.log(`Updated price for ${product.name}: ${updatedProduct.currentPrice}`)
    } catch (error) {
      console.error(`Failed to update price for ${product.name}:`, error)
    }
  }
}