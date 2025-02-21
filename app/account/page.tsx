"use client"

import { useEffect, useState } from "react"
import { Layout, Typography, Tabs, Input, Table, Tag, Button, Spin } from "antd"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { db } from "@/lib/db"
import type { Order } from "@/lib/base-database"
import { SearchOutlined } from "@ant-design/icons"
import Link from "next/link"

const { Title, Text } = Typography

export default function AccountPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"All" | Order["status"]>("All")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    const fetchOrders = async () => {
      try {
        const userOrders = await db.getOrdersByUserId(user.id)
        setOrders(userOrders)
      } catch (error) {
        console.error("Error fetching orders:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [user, router])

  const filteredOrders = orders.filter((order) => {
    const matchesFilter = filter === "All" || order.status === filter
    const matchesSearch = order.items.some((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

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
      render: (date: string) => new Date(date).toLocaleDateString(),
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
      render: (status: Order["status"]) => <Tag color={status === "Delivered" ? "green" : "blue"}>{status}</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Order) => (
        <Link href={`/orders/${record.id}`}>
          <Button size="small">View Order</Button>
        </Link>
      ),
    },
  ]

  if (loading) {
    return (
      <Layout style={{ padding: "24px", maxWidth: 1200, margin: "0 auto" }}>
        <Spin size="large" />
      </Layout>
    )
  }

  return (
    <Layout style={{ padding: "24px", maxWidth: 1200, margin: "0 auto" }}>
      <Title level={2}>Order History</Title>
      <Text style={{ marginBottom: 24, display: "block" }}>View and manage your recent orders.</Text>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
        <Tabs
          activeKey={filter}
          onChange={(key) => setFilter(key as "All" | Order["status"])}
          items={[
            { key: "All", label: "All" },
            { key: "Paid", label: "Paid" },
            { key: "Delivered", label: "Delivered" },
            { key: "Cancelled", label: "Cancelled" },
          ]}
        />
        <Input
          placeholder="Search orders"
          prefix={<SearchOutlined />}
          style={{ width: 200 }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Table dataSource={filteredOrders} columns={columns} rowKey="id" pagination={{ pageSize: 10 }} />
    </Layout>
  )
}