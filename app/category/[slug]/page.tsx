"use client"

import { useParams } from "next/navigation"
import { useGetProductsByCategoryQuery } from "@/lib/services/api"
import { Card, Typography, Spin, Row, Col } from "antd"
import Image from "next/image"
import Link from "next/link"

const { Title, Text } = Typography

export default function CategoryPage() {
  const { slug } = useParams()
  const category = Array.isArray(slug) ? slug[0] : slug || ""
  const { data: products, isLoading, error } = useGetProductsByCategoryQuery(category)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    )
  }

  if (error) {
    return <div>Error loading products</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Title level={2} className="mb-8 capitalize">
        {category} Products
      </Title>
      <Row gutter={[16, 16]}>
        {products?.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Link href={`/products/${product.id}`}>
              <Card
                hoverable
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
              >
                <Card.Meta
                  title={product.title}
                  description={
                    <>
                      <Text strong>${product.price.toFixed(2)}</Text>
                      <br />
                      <Text type="secondary">{product.category}</Text>
                    </>
                  }
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}