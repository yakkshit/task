import { NextResponse } from "next/server"
import NodeCache from "node-cache"

const cache = new NodeCache({ stdTTL: 600 }) // Cache expires in 10 minutes

interface Order {
  id: string
  [key: string]: any
}

export async function GET(_request: Request, { params }: { params: { [key: string]: string } }) {
  try {
    const orders = (cache.get("orders") as Order[]) || []
    const order = orders.find((o: Order) => o.id === params.id)

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    return NextResponse.json(order)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch order" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const orders = (cache.get("orders") as Order[]) || []
    const orderIndex = orders.findIndex((o: Order) => o.id === params.id)

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

export async function DELETE(_request: Request, { params }: { params: { [key: string]: string } }) {
  try {
    const orders = (cache.get("orders") as Order[]) || []
    const updatedOrders = orders.filter((o: Order) => o.id !== params.id)

    if (updatedOrders.length === orders.length) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    cache.set("orders", updatedOrders)

    return NextResponse.json({ message: "Order deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete order" }, { status: 500 })
  }
}