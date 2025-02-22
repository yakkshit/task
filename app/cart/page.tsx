"use client"

import { useSelector, useDispatch } from "react-redux"
import { Card, Button, InputNumber, Typography, Divider } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"
import { selectCart, selectCartTotal, removeFromCartAsync, updateQuantityAsync } from "@/lib/features/cartSlice"
import type { AppDispatch } from "@/lib/store"

const { Title, Text } = Typography

export default function CartPage() {
  const dispatch = useDispatch<AppDispatch>()
  const cartItems = useSelector(selectCart)
  const cartTotal = useSelector(selectCartTotal)
  const shippingCost = cartTotal > 50 ? 0 : 5
  const tax = cartTotal * 0.07

  const handleQuantityChange = (id: number, color: string, size: string, quantity: number) => {
    if (quantity === 0) {
      dispatch(removeFromCartAsync({ id, color, size }))
    } else {
      dispatch(updateQuantityAsync({ id, color, size, quantity }))
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Title level={2}>Your cart is empty</Title>
        <Text className="block mb-8">Add some products to your cart and they will appear here</Text>
        <Link href="/products">
          <Button type="primary" size="large">
            Continue Shopping
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Title level={2}>Shopping Cart</Title>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <Card key={`${item.id}-${item.color}-${item.size}`} className="mb-4">
              <div className="flex gap-4">
                <div className="relative w-24 h-24">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <Title level={5}>{item.title}</Title>
                      <Text type="secondary" className="block">
                        Color: {item.color} | Size: {item.size}
                      </Text>
                      <Text className="text-lg font-semibold block mt-2">${item.price.toFixed(2)}</Text>
                    </div>
                    <Button
                      type="text"
                      icon={<DeleteOutlined />}
                      onClick={() => dispatch(removeFromCartAsync({ id: item.id, color: item.color, size: item.size }))}
                    />
                  </div>
                  <div className="mt-4">
                    <InputNumber
                      min={0}
                      value={item.quantity}
                      onChange={(value) => handleQuantityChange(item.id, item.color, item.size, value || 0)}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <Card>
            <Title level={4}>Order Summary</Title>
            <div className="space-y-4">
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
                <Text strong>${(cartTotal + shippingCost + tax).toFixed(2)}</Text>
              </div>
              <Link href="/checkout">
                <Button type="primary" size="large" block>
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}