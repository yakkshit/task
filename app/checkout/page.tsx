"use client"

import { useState, useEffect } from "react"
import { Layout, Form, Input, Radio, Button, Card, Row, Col, Typography, List, Image } from "antd"
import { useRouter } from "next/navigation"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/lib/store"
import { clearCart } from "@/lib/features/cartSlice"
import { useAuth } from "@/lib/auth-context"
import { showNotification } from "@/components/Notification"
import type { OrderStatus } from "@/lib/db"
import { useCreateOrderMutation } from "@/lib/services/orderApi"

const { Title, Text } = Typography

export default function CheckoutPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { user } = useAuth()
  const [form] = Form.useForm()
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const [createOrder, { isLoading }] = useCreateOrderMutation()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.0
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  const onFinish = async (values: any) => {
    if (!user) {
      showNotification("error", "Please login to complete your order")
      return
    }

    const order = {
      userId: user.id,
      items: cartItems,
      total,
      status: "Paid" as OrderStatus,
      date: new Date().toISOString(),
      customer: {
        email: user.email,
        name: values.fullName,
        address: values.address,
        city: values.city,
        state: values.state,
        zipCode: values.zipCode,
      },
    }

    try {
      const result = await createOrder(order).unwrap()
      dispatch(clearCart())
      router.push(`/checkout/confirmation?orderId=${result.id}`)
    } catch (error) {
      console.error("Failed to create order:", error)
      showNotification("error", "Failed to create order")
    }
  }

  if (!user) {
    return null
  }

  return (
    <Layout style={{ padding: "24px", maxWidth: 1200, margin: "0 auto" }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={16}>
          <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{ email: user.email }}>
            <Card title="Contact Information" style={{ marginBottom: 24 }}>
              <Form.Item name="email" label="Email address">
                <Input disabled />
              </Form.Item>
            </Card>

            <Card title="Payment Details" style={{ marginBottom: 24 }}>
              <Radio.Group
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={{ width: "100%" }}
              >
                <Radio value="credit-card">Credit Card</Radio>
                <Radio value="paypal">PayPal</Radio>
                <Radio value="apple-pay">Apple Pay</Radio>
              </Radio.Group>

              {paymentMethod === "credit-card" && (
                <>
                  <Form.Item name="cardNumber" label="Card number" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item name="expiryDate" label="Expiry date" rules={[{ required: true }]}>
                        <Input placeholder="MM/YY" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="cvc" label="CVC" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </>
              )}
            </Card>

            <Card title="Shipping Address">
              <Form.Item name="fullName" label="Full name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item name="city" label="City" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item name="state" label="State" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item name="zipCode" label="ZIP code" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Card>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block loading={isLoading}>
                Place Order
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col xs={24} md={8}>
          <Card title="Order Summary">
            <List
              dataSource={cartItems}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Image src={item.image || "/placeholder.svg"} alt={item.title} width={50} />}
                    title={item.title}
                    description={`${item.color} • ${item.size} • Qty: ${item.quantity}`}
                  />
                  <div>${(item.price * item.quantity).toFixed(2)}</div>
                </List.Item>
              )}
            />
            <div style={{ borderTop: "1px solid #f0f0f0", marginTop: 16, paddingTop: 16 }}>
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
                <Text strong>${total.toFixed(2)}</Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}