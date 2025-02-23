import { NextResponse } from "next/server"
import NodeCache from "node-cache"
import type { Product } from "@/lib/types"

const cache = new NodeCache({ stdTTL: 600 }) // Cache expires in 10 minutes

export async function GET(request: Request) {
  try {
    let products = cache.get("products") as Product[] | undefined

    if (!products) {
      const res = await fetch("https://fakestoreapi.com/products")
      products = await res.json()
      cache.set("products", products)
    }

    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const products = (cache.get("products") as Product[]) || []

    const newProduct: Product = {
      id: Date.now(),
      ...body,
    }

    products.push(newProduct)
    cache.set("products", products)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}

export const dynamic = "force-dynamic";