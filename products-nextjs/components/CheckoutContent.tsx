"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Form, Typography, App, Input, Radio, Button, Divider } from "antd"
import { selectCart, selectCartTotal, clearCart } from "@/lib/features/cartSlice"
import { useRouter } from "next/navigation"
import type { AppDispatch } from "@/lib/store"
import Card from "antd/es/card/Card"
import Image from "next/image"

const { Title, Text } = Typography

interface CheckoutForm {
  email: string
  firstName: string
  lastName: string
  address: string
  apartment?: string
  city: string
  state: string
  zipCode: string
  phone: string
  paymentMethod: "credit-card" | "paypal"
  cardNumber?: string
  cardExpiry?: string
  cardCvc?: string
}

const AUTH_KEY = process.env.API_AUTH_KEY || "qwerty123"

export default function CheckoutContent() {
    const { notification } = App.useApp()
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const cartItems = useSelector(selectCart)
    const cartTotal = useSelector(selectCartTotal)
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm<CheckoutForm>()
  
    const shippingCost = cartTotal > 50 ? 0 : 5
    const tax = cartTotal * 0.07
    const total = cartTotal + shippingCost + tax
  
    const onFinish = async (values: CheckoutForm) => {
      setLoading(true)
      try {
        const response = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: AUTH_KEY,
          },
          body: JSON.stringify({
            items: cartItems,
            total,
            shippingAddress: {
              firstName: values.firstName,
              lastName: values.lastName,
              address: values.address,
              apartment: values.apartment,
              city: values.city,
              state: values.state,
              zipCode: values.zipCode,
              phone: values.phone,
            },
            paymentMethod: values.paymentMethod,
          }),
        })
  
        if (!response.ok) {
          throw new Error("Failed to place order")
        }
  
        // Clear the cart after successful order placement
        dispatch(clearCart())
  
        // Clear the cart on the server
        await fetch("/api/cart", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: AUTH_KEY,
          },
          body: JSON.stringify({ clearAll: true }),
        })
  
        notification.success({
          message: "Order placed successfully",
          description: "Thank you for your purchase!",
        })
  
        router.push("/account/orders")
      } catch (error) {
        notification.error({
          message: "Error",
          description: "Failed to place order. Please try again.",
        })
      } finally {
        setLoading(false)
      }
    }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Title level={2}>Checkout</Title>
          <Form form={form} layout="vertical" onFinish={onFinish} className="space-y-6">
            <Card title="Contact Information">
              <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
                <Input />
              </Form.Item>
            </Card>

            <Card title="Shipping Address">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item name="firstName" label="First name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>

                <Form.Item name="lastName" label="Last name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </div>

              <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item name="apartment" label="Apartment, suite, etc.">
                <Input />
              </Form.Item>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Form.Item name="city" label="City" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>

                <Form.Item name="state" label="State" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>

                <Form.Item name="zipCode" label="ZIP code" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </div>

              <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Card>

            <Card title="Payment Method">
              <Form.Item name="paymentMethod" rules={[{ required: true }]} initialValue="credit-card">
                <Radio.Group className="w-full">
                  <div className="space-y-4">
                    <Radio value="credit-card" className="w-full pb-4 border-b">
                      Credit Card
                    </Radio>
                    <Radio value="paypal" className="w-full">
                      PayPal
                    </Radio>
                  </div>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.paymentMethod !== currentValues.paymentMethod}
              >
                {({ getFieldValue }) =>
                  getFieldValue("paymentMethod") === "credit-card" && (
                    <div className="space-y-4">
                      <Form.Item name="cardNumber" label="Card number" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>

                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item name="cardExpiry" label="Expiration date" rules={[{ required: true }]}>
                          <Input placeholder="MM/YY" />
                        </Form.Item>

                        <Form.Item name="cardCvc" label="CVC" rules={[{ required: true }]}>
                          <Input />
                        </Form.Item>
                      </div>
                    </div>
                  )
                }
              </Form.Item>
            </Card>

            <Button type="primary" htmlType="submit" size="large" loading={loading} block>
              Place Order
            </Button>
          </Form>
        </div>

        <div>
          <Card>
            <Title level={4}>Order Summary</Title>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.color}-${item.size}`} className="flex gap-4">
                  <div className="relative w-16 h-16">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <Text className="block">{item.title}</Text>
                    <Text type="secondary" className="block">
                      {item.color} | {item.size} | Qty: {item.quantity}
                    </Text>
                    <Text className="block">${(item.price * item.quantity).toFixed(2)}</Text>
                  </div>
                </div>
              ))}

              <Divider />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Text>Subtotal</Text>
                  <Text>${cartTotal.toFixed(2)}</Text>
                </div>
                <div className="flex justify-between">
                  <Text>Shipping</Text>
                  <Text>${shippingCost.toFixed(2)}</Text>
                </div>
                <div className="flex justify-between">
                  <Text>Tax</Text>
                  <Text>${tax.toFixed(2)}</Text>
                </div>
                <Divider />
                <div className="flex justify-between">
                  <Text strong>Total</Text>
                  <Text strong>${total.toFixed(2)}</Text>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}