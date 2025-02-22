"use client"

import { useState, useEffect } from "react"
import { Card, Typography, Button, Row, Col, Empty } from "antd"
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { addToCart } from "@/lib/features/cartSlice"
import type { Product } from "@/lib/types"
import type { AppDispatch } from "@/lib/store"

const { Title, Text } = Typography

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>([])
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // In a real application, you would fetch the wishlist from an API or local storage
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]") as Product[]
    setWishlist(savedWishlist)
  }, [])

  const removeFromWishlist = (productId: number) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId)
    setWishlist(updatedWishlist)
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
  }

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1, color: "Default", size: "Default" }))
  }

  if (wishlist.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Empty description={<span>Your wishlist is empty. Add some products to your wishlist!</span>}>
          <Link href="/products">
            <Button type="primary">Continue Shopping</Button>
          </Link>
        </Empty>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Title level={2} className="mb-8">
        My Wishlist
      </Title>
      <Row gutter={[16, 16]}>
        {wishlist.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              cover={
                <div className="h-64 relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              }
              actions={[
                <Button
                  key="addToCart"
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>,
                <Button key="remove" danger icon={<DeleteOutlined />} onClick={() => removeFromWishlist(product.id)}>
                  Remove
                </Button>,
              ]}
            >
              <Card.Meta
                title={<Link href={`/products/${product.id}`}>{product.title}</Link>}
                description={
                  <>
                    <Text strong>${product.price.toFixed(2)}</Text>
                    <br />
                    <Text type="secondary">{product.category}</Text>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}