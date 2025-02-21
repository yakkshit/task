import type { Product } from "@/lib/services/api"

// This is a placeholder function. Replace it with your actual API call.
export async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products")
  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }
  return response.json()
}