import { type NextRequest, NextResponse } from "next/server"
import NodeCache from "node-cache"

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
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const orders = (cache.get("orders") as Order[]) || []
    return NextResponse.json(orders)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await req.json()
    const orders = (cache.get("orders") as Order[]) || []

    const newOrder: Order = {
      id: `WU${Math.random().toString(36).substr(2, 9)}`,
      ...body,
      status: "order received",
      createdAt: new Date().toISOString(),
    }

    orders.push(newOrder)
    cache.set("orders", orders)

    return NextResponse.json(newOrder)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}