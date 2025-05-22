// Add specific scraping logic for different stores
export const SUPPORTED_STORES = [
  'xcite.com',
  'bestalkuwait.com',
  'eureka.com.kw'
] as const

export type SupportedStore = typeof SUPPORTED_STORES[number]

export function isSupported(url: string): boolean {
  const hostname = new URL(url).hostname
  return SUPPORTED_STORES.some(store => hostname.includes(store))
}