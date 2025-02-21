"use client"

import { Layout, Row, Col, Card, Typography, Button, InputNumber, List, Image } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { useRouter } from "next/navigation"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/lib/store"
import { removeFromCart, updateQuantity } from "@/lib/features/cartSlice"

const { Title, Text } = Typography

export default function CartPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.0
  const tax = subtotal * 0.07

  const handleQuantityChange = (id: number, color: string, size: string, quantity: number) => {
    dispatch(updateQuantity({ id, color, size, quantity }))
  }

  const handleRemoveItem = (id: number, color: string, size: string) => {
    dispatch(removeFromCart({ id, color, size }))
  }

  return (
    <Layout style={{ padding: "24px", maxWidth: 1200, margin: "0 auto" }}>
      <Title level={2}>Shopping Cart</Title>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <List
            itemLayout="horizontal"
            dataSource={cartItems}
            renderItem={(item) => (
              <Card style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 16 }}>
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} width={100} />
                  <div style={{ flex: 1 }}>
                    <Title level={5}>{item.title}</Title>
                    <Text>
                      {item.color} • {item.size}
                    </Text>
                    <div
                      style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}
                    >
                      <InputNumber
                        min={1}
                        value={item.quantity}
                        onChange={(value) => handleQuantityChange(item.id, item.color, item.size, value || 1)}
                      />
                      <Button
                        type="text"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleRemoveItem(item.id, item.color, item.size)}
                      />
                    </div>
                  </div>
                  <div>
                    <Text strong>${item.price.toFixed(2)}</Text>
                  </div>
                </div>
              </Card>
            )}
          />
        </Col>

        <Col xs={24} lg={8}>
          <Card title="Order Summary">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <Text>Subtotal</Text>
              <Text>${subtotal.toFixed(2)}</Text>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <Text>Shipping</Text>
              <Text>${shipping.toFixed(2)}</Text>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <Text>Tax</Text>
              <Text>${tax.toFixed(2)}</Text>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
              <Text strong>Total</Text>
              <Text strong>${(subtotal + shipping + tax).toFixed(2)}</Text>
            </div>
            <Button type="primary" block size="large" onClick={() => router.push("/checkout")}>
              Proceed to Checkout
            </Button>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}