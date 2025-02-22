"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, Typography, Spin, Row, Col, Input, Empty } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"
import { useGetProductsQuery } from "@/lib/services/api"
import type { Product } from "@/lib/types"

const { Title, Text } = Typography

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchTerm, setSearchTerm] = useState(query)
  const { data: products, isLoading } = useGetProductsQuery()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  useEffect(() => {
    if (products) {
      const filtered = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredProducts(filtered)
    }
  }, [products, searchTerm])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Title level={2} className="mb-8">
        Search Results
      </Title>
      <Input
        size="large"
        placeholder="Search products..."
        prefix={<SearchOutlined />}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="mb-8"
      />
      {filteredProducts.length > 0 ? (
        <Row gutter={[16, 16]}>
          {filteredProducts.map((product) => (
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
      ) : (
        <Empty
          description={
            <span>
              No products found for "<Text strong>{searchTerm}</Text>"
            </span>
          }
        />
      )}
    </div>
  )
}