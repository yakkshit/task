"use client"

import { useEffect, useState } from "react"
import { Layout, Typography, Table, Tag, Button, Spin } from "antd"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { db, type Order, type OrderStatus, type OrderItem } from "@/lib/db"

const { Title, Text } = Typography

export default function AccountPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"All" | OrderStatus>("All")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    const fetchOrders = async () => {
      const userOrders = await db.getOrdersByUserId(user.id)
      setOrders(userOrders)
      setLoading(false)
    }

    fetchOrders()
  }, [user, router])

  const columns = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (total: number) => `$${total.toFixed(2)}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => <Tag color={status === "Delivered" ? "green" : "blue"}>{status}</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Order) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Button size="small" onClick={() => router.push(`/orders/${record.id}`)}>
            View Order
          </Button>
          <Button size="small">View Invoice</Button>
        </div>
      ),
    },
  ]

  if (loading) {
    return <Spin size="large" />
  }

  return (
    <Layout style={{ padding: "24px", maxWidth: 1200, margin: "0 auto" }}>
      <Title level={2}>Order History</Title>
      <p>
        Keep tabs on the status of your latest orders, effortlessly handle returns, and easily download invoices with
        just a few clicks.
      </p>

      <Table
        dataSource={orders}
        columns={columns}
        expandable={{
          expandedRowRender: (record: Order) => (
            <Table
              dataSource={record.items}
              columns={[
                {
                  title: "Product",
                  dataIndex: "title",
                  key: "title",
                },
                {
                  title: "Price",
                  dataIndex: "price",
                  key: "price",
                  render: (price: number) => `$${price.toFixed(2)}`,
                },
                {
                  title: "Quantity",
                  dataIndex: "quantity",
                  key: "quantity",
                },
                {
                  title: "Total",
                  key: "total",
                  render: (_, record: OrderItem) => `$${(record.price * record.quantity).toFixed(2)}`,
                },
              ]}
              pagination={false}
            />
          ),
        }}
      />
    </Layout>
  )
}