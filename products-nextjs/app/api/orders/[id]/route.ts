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

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { id } = context.params
    const orders = (cache.get("orders") as Order[]) || []
    const order = orders.find((o: Order) => o.id === id)

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    return NextResponse.json(order)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch order" }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { id } = context.params
    const body = await req.json()
    const orders = (cache.get("orders") as Order[]) || []
    const orderIndex = orders.findIndex((o: Order) => o.id === id)

    if (orderIndex === -1) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    orders[orderIndex] = { ...orders[orderIndex], ...body }
    cache.set("orders", orders)

    return NextResponse.json(orders[orderIndex])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { id } = context.params
    const orders = (cache.get("orders") as Order[]) || []
    const updatedOrders = orders.filter((o: Order) => o.id !== id)

    if (updatedOrders.length === orders.length) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    cache.set("orders", updatedOrders)

    return NextResponse.json({ message: "Order deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete order" }, { status: 500 })
  }
}

export const dynamic = "force-dynamic";