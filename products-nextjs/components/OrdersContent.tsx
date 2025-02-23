"use client"

import { useEffect, useState } from "react"
import { Card, Typography, Button, Tag, Spin } from "antd"
import type { Order } from "@/lib/types"
import Image from "next/image"

const { Title, Text } = Typography

const AUTH_KEY = process.env.API_AUTH_KEY || "qwerty123"

export default function OrdersContent() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders", {
          headers: {
            Authorization: AUTH_KEY,
          },
        })
        if (!response.ok) throw new Error("Failed to fetch orders")
        const data = await response.json()
        setOrders(data)
      } catch (error) {
        console.error("Error fetching orders:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Spin size="large" />
      </div>
    )
  }

  if (orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Title level={2}>No orders yet</Title>
        <Text className="block mb-8">When you place an order, it will appear here</Text>
        <Button type="primary" size="large" href="/products">
          Start Shopping
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Title level={2}>Order History</Title>
      <Text className="block mb-8">
        Keep tabs on the status of your latest orders, effortlessly handle returns, and easily download invoices with
        just a few clicks.
      </Text>

      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <Text className="block">Order #{order.id}</Text>
                <Text type="secondary">Placed on {new Date(order.createdAt).toLocaleDateString()}</Text>
              </div>
              <div className="text-right">
                <Tag color={getStatusColor(order.status)}>{order.status}</Tag>
                <Text className="block font-semibold mt-1">${order.total.toFixed(2)}</Text>
              </div>
            </div>

            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={`${item.id}-${item.color}-${item.size}`} className="flex gap-4">
                  <div className="relative w-20 h-20">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain" />
                  </div>
                  <div>
                    <Text className="block">{item.title}</Text>
                    <Text type="secondary">
                      {item.color} | {item.size} | Qty: {item.quantity}
                    </Text>
                  </div>
                  <div className="ml-auto">
                    <Text>${(item.price * item.quantity).toFixed(2)}</Text>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <Button>View Order</Button>
              <Button>View Invoice</Button>
              {order.status === "delivered" && <Button type="primary">Buy Again</Button>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function getStatusColor(status: Order["status"]) {
  switch (status) {
    case "pending":
      return "gold"
    case "processing":
      return "blue"
    case "shipped":
      return "cyan"
    case "delivered":
      return "green"
    default:
      return "default"
  }
}