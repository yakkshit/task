import { type NextRequest, NextResponse } from "next/server"
import NodeCache from "node-cache"
import { corsMiddleware } from "@/lib/cors"

export const dynamic = "force-dynamic";

const cache = new NodeCache({ stdTTL: 600 }) // Cache expires in 10 minutes

const AUTH_KEY = process.env.API_AUTH_KEY || "qwerty123"

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
  color: string
  size: string
}

interface Cart {
  items: CartItem[]
}

function isAuthorized(req: NextRequest): boolean {
  return req.headers.get("Authorization") === AUTH_KEY
}

export async function GET(req: NextRequest) {
  let res = NextResponse.next()

  if (!isAuthorized(req)) {
    res = NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  } else {
    try {
      const cart = (cache.get("cart") as Cart) || { items: [] }
      res = NextResponse.json(cart)
    } catch (error) {
      res = NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 })
    }
  }

  return corsMiddleware(req, res)
}

export async function POST(req: NextRequest) {
  let res = NextResponse.next()

  if (!isAuthorized(req)) {
    res = NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  } else {
    try {
      const body = await req.json()
      const cart = (cache.get("cart") as Cart) || { items: [] }

      const existingItemIndex = cart.items.findIndex(
        (item: CartItem) => item.id === body.item.id && item.color === body.item.color && item.size === body.item.size,
      )

      if (existingItemIndex > -1) {
        cart.items[existingItemIndex].quantity += body.item.quantity
      } else {
        cart.items.push(body.item)
      }

      cache.set("cart", cart)

      res = NextResponse.json(cart)
    } catch (error) {
      res = NextResponse.json({ error: "Failed to update cart" }, { status: 500 })
    }
  }

  return corsMiddleware(req, res)
}

export async function DELETE(req: NextRequest) {
  let res = NextResponse.next()

  if (!isAuthorized(req)) {
    res = NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  } else {
    try {
      const body = await req.json()
      const cart = (cache.get("cart") as Cart) || { items: [] }

      cart.items = cart.items.filter(
        (item: CartItem) => !(item.id === body.id && item.color === body.color && item.size === body.size),
      )

      cache.set("cart", cart)

      res = NextResponse.json(cart)
    } catch (error) {
      res = NextResponse.json({ error: "Failed to remove item from cart" }, { status: 500 })
    }
  }

  return corsMiddleware(req, res)
}

export async function OPTIONS(req: NextRequest) {
  const res = new NextResponse(null, { status: 204 })
  return corsMiddleware(req, res)
}