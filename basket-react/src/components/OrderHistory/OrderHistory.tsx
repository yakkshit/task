import { Table, Tag, Button } from "antd"
import type { ColumnsType } from "antd/es/table"
import { useGetOrdersQuery } from "../../lib/api"
import "./OrderHistory.css"

interface OrderItem {
  id: string
  title: string
  price: number
  quantity: number
}

interface Order {
  id: string
  items: OrderItem[]
  total: number
  status: string
  createdAt: string
}

function OrderHistory() {
  const { data: orders, isLoading } = useGetOrdersQuery()

  const columns: ColumnsType<Order> = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
      className: "column-id",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => new Date(date).toLocaleString(),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (total: number) => `$${total.toFixed(2)}`,
      className: "column-total",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "pending" ? "blue" : "success"} className="status-tag">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, _record: Order) => (
        <div className="action-buttons">
          <Button type="link" className="action-button">
            View Order
          </Button>
          <Button type="link" className="action-button">
            View Invoice
          </Button>
        </div>
      ),
    },
  ]

  const expandedRowRender = (_record: Order) => {
    const itemColumns: ColumnsType<OrderItem> = [
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
        className: "column-price",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
        className: "column-quantity",
      },
      {
        title: "Total",
        key: "total",
        render: (_, item) => `$${(item.price * item.quantity).toFixed(2)}`,
        className: "column-total",
      },
    ]

    return (
      <div className="expanded-row">
        <Table columns={itemColumns} dataSource={_record.items} pagination={false} rowKey="id" />
      </div>
    )
  }

  return (
    <div className="order-history">
      <Table
        columns={columns}
        dataSource={orders}
        expandable={{
          expandedRowRender,
          expandRowByClick: true,
        }}
        loading={isLoading}
        rowKey="id"
        pagination={{
          total: orders?.length,
          pageSize: 10,
          showSizeChanger: false,
          className: "table-pagination",
        }}
      />
    </div>
  )
}

export default OrderHistory