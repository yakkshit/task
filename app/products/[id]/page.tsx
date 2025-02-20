"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button, Card, Col, InputNumber, Rate, Row, Typography, Image, Divider, Tag, notification } from "antd"
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons"
import { useGetProductQuery } from "@/store/api"

const { Title, Text, Paragraph } = Typography

export default function ProductPage() {
  const params = useParams()
  const productId = Number(params.id)
  const [quantity, setQuantity] = useState(1)
  const { data: product, isLoading } = useGetProductQuery(productId)

  const handleAddToCart = () => {
    // This will be connected to cart functionality
    notification.success({
      message: "Added to Cart",
      description: `${quantity} x ${product?.title} added to your cart`,
    })
  }

  if (isLoading) return <div>Loading...</div>
  if (!product) return <div>Product not found</div>

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Card bordered={false}>
            <Image
              alt={product.title}
              src={product.image || "/placeholder.svg"}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card bordered={false}>
            <Tag color="blue" style={{ marginBottom: 16 }}>
              {product.category}
            </Tag>
            <Title level={2}>{product.title}</Title>
            <div style={{ marginBottom: 16 }}>
              <Rate disabled defaultValue={product.rating.rate} />
              <Text type="secondary"> ({product.rating.count} reviews)</Text>
            </div>
            <Title level={2} type="success">
              ${product.price}
            </Title>
            <Paragraph>{product.description}</Paragraph>
            <Divider />
            <Row gutter={16} align="middle">
              <Col>
                <InputNumber min={1} max={10} defaultValue={1} onChange={(value) => setQuantity(value || 1)} />
              </Col>
              <Col>
                <Button type="primary" size="large" icon={<ShoppingCartOutlined />} onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </Col>
              <Col>
                <Button size="large" icon={<HeartOutlined />}>
                  Add to Wishlist
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}