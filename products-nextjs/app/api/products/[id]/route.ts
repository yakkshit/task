import { NextResponse } from "next/server"
import NodeCache from "node-cache"
import type { Product } from "@/lib/types"

const cache = new NodeCache({ stdTTL: 600 }) // Cache expires in 10 minutes

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const products = (cache.get("products") as Product[]) || []
    const product = products.find((p: Product) => p.id === Number(params.id))

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const products = (cache.get("products") as Product[]) || []
    const productIndex = products.findIndex((p: Product) => p.id === Number(params.id))

    if (productIndex === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    products[productIndex] = { ...products[productIndex], ...body }
    cache.set("products", products)

    return NextResponse.json(products[productIndex])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const products = (cache.get("products") as Product[]) || []
    const updatedProducts = products.filter((p: Product) => p.id !== Number(params.id))

    if (updatedProducts.length === products.length) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    cache.set("products", updatedProducts)

    return NextResponse.json({ message: "Product deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}

export const dynamic = "force-dynamic";
