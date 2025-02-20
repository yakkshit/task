"use client"

import { Table, Typography, Tag, Button, Card, Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { FileTextOutlined, ShoppingOutlined } from "@ant-design/icons"
import type { Order } from "@/types/product"

const { Title, Text } = Typography

interface OrderHistoryProps {
  orders: Order[]
}

const mockOrders: Order[] = [
  {
    id: "WU13433876",
    items: [
      {
        id: 1,
        title: "Luxury Wool Blend Winter Coat",
        price: 192.99,
        quantity: 1,
        description: "",
        category: "",
        image: "",
        rating: { rate: 0, count: 0 },
      },
    ],
    total: 192.99,
    date: "2023-01-16",
    status: "pending",
  },
  {
    id: "WU86634876",
    items: [
      {
        id: 2,
        title: "Chelsea boots",
        price: 242.99,
        quantity: 1,
        description: "",
        category: "",
        image: "",
        rating: { rate: 0, count: 0 },
      },
    ],
    total: 242.99,
    date: "2023-01-02",
    status: "delivered",
  },
]

export default function OrderHistoryPage() {
  const columns: ColumnsType<Order> = [
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
      title: "Items",
      key: "items",
      render: (_, record) => (
        <>
          {record.items.map((item) => (
            <div key={item.id}>
              {item.title} x {item.quantity}
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (total) => `$${total.toFixed(2)}`,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        const color = status === "delivered" ? "success" : status === "pending" ? "processing" : "error"
        return <Tag color={color}>{status.toUpperCase()}</Tag>
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Space>
          <Button type="text" icon={<FileTextOutlined />}>
            View Invoice
          </Button>
          <Button type="text" icon={<ShoppingOutlined />}>
            Buy Again
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <Card>
        <Title level={2}>Order History</Title>
        <Text type="secondary" style={{ display: "block", marginBottom: 24 }}>
          Keep tabs on the status of your latest orders, effortlessly handle returns, and easily download invoices with
          just a few clicks.
        </Text>
        <Table columns={columns} dataSource={mockOrders} rowKey="id" pagination={{ pageSize: 10 }} />
      </Card>
    </div>
  )
}