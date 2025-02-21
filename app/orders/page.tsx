"use client"

import { useEffect } from "react"
import { Layout, Typography, Table, Tag, Button, Spin } from "antd"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useGetOrdersQuery } from "@/lib/services/orderApi"
import Link from "next/link"

const { Title, Text } = Typography

export default function OrdersPage() {
  const router = useRouter()
  const { user } = useAuth()
  const { data: orders, isLoading, isError } = useGetOrdersQuery(user?.id || "")

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
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
      render: (status: string) => <Tag color={status === "Delivered" ? "green" : "blue"}>{status}</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Link href={`/orders/${record.id}`}>
          <Button size="small">View Order</Button>
        </Link>
      ),
    },
  ]

  if (!user) {
    return null
  }

  if (isLoading) {
    return (
      <Layout style={{ padding: "24px", maxWidth: 1200, margin: "0 auto" }}>
        <Spin size="large" />
      </Layout>
    )
  }

  if (isError) {
    return (
      <Layout style={{ padding: "24px", maxWidth: 1200, margin: "0 auto" }}>
        <Text type="danger">Error loading orders. Please try again later.</Text>
      </Layout>
    )
  }

  return (
    <Layout style={{ padding: "24px", maxWidth: 1200, margin: "0 auto" }}>
      <Title level={2}>Order History</Title>
      <Text style={{ marginBottom: 24, display: "block" }}>View and manage your recent orders.</Text>

      <Table dataSource={orders} columns={columns} rowKey="id" />
    </Layout>
  )
}