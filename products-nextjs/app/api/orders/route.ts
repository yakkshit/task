import { type NextRequest, NextResponse } from "next/server"
import NodeCache from "node-cache"
import { corsMiddleware } from "@/lib/cors"

const cache = new NodeCache({ stdTTL: 600 }) // Cache expires in 10 minutes

const AUTH_KEY = process.env.API_AUTH_KEY || "qwerty123"

interface Order {
  id: string
  [key: string]: any
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
      const orders = (cache.get("orders") as Order[]) || []
      res = NextResponse.json(orders)
    } catch (error) {
      res = NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
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
      const orders = (cache.get("orders") as Order[]) || []

      const newOrder: Order = {
        id: `WU${Math.random().toString(36).substr(2, 9)}`,
        ...body,
        status: "pending",
        createdAt: new Date().toISOString(),
      }

      orders.push(newOrder)
      cache.set("orders", orders)

      res = NextResponse.json(newOrder)
    } catch (error) {
      res = NextResponse.json({ error: "Failed to create order" }, { status: 500 })
    }
  }

  return corsMiddleware(req, res)
}

export async function OPTIONS(req: NextRequest) {
  const res = new NextResponse(null, { status: 204 })
  return corsMiddleware(req, res)
}