"use client"

import { useState, useEffect } from "react"
import { Layout, Row, Col, Card, Checkbox, Slider, Radio, Typography, Button, Select, Spin } from "antd"
import { useGetProductsQuery, useGetCategoriesQuery } from "@/lib/services/api"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const { Title, Text } = Typography

const ITEMS_PER_PAGE = 8

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams?.get("category") ?? null

  const [filters, setFilters] = useState({
    category: initialCategory ? [initialCategory] : [],
    price: [0, 1000] as [number, number],
    color: [] as string[],
  })
  const [sort, setSort] = useState("desc")
  const [page, setPage] = useState(1)

  const { data: products = [], isLoading } = useGetProductsQuery()
  const { data: categories = [] } = useGetCategoriesQuery()

  const filteredProducts = products.filter((product: any) => {
    if (filters.category.length && !filters.category.includes(product.category)) return false
    if (product.price < filters.price[0] || product.price > filters.price[1]) return false
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a: any, b: any) => {
    switch (sort) {
      case "price-high":
        return b.price - a.price
      case "price-low":
        return a.price - b.price
      case "asc":
        return a.title.localeCompare(b.title)
      default:
        return b.title.localeCompare(a.title)
    }
  })

  const displayedProducts = sortedProducts.slice(0, page * ITEMS_PER_PAGE)
  const hasMore = displayedProducts.length < sortedProducts.length

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
  }

  useEffect(() => {
    setPage(1)
  }, [filters, sort])

  return (
    <Layout style={{ padding: "24px", maxWidth: 1400, margin: "0 auto" }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={6}>
          <Card>
            <Title level={5}>Category</Title>
            <Checkbox.Group
              options={categories}
              value={filters.category}
              onChange={(values) => setFilters({ ...filters, category: values as string[] })}
            />

            <Title level={5} style={{ marginTop: 24 }}>
              Price Range
            </Title>
            <Slider
              range
              min={0}
              max={1000}
              value={filters.price}
              onChange={(value) => setFilters({ ...filters, price: value as [number, number] })}
            />

            <Title level={5} style={{ marginTop: 24 }}>
              Color
            </Title>
            <Radio.Group onChange={(e) => setFilters({ ...filters, color: [e.target.value] })}>
              <Radio value="white">White</Radio>
              <Radio value="black">Black</Radio>
              <Radio value="blue">Blue</Radio>
              <Radio value="red">Red</Radio>
            </Radio.Group>
          </Card>
        </Col>

        <Col xs={24} md={18}>
          <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
            <Title level={4} style={{ margin: 0 }}>
              Products ({filteredProducts.length})
            </Title>
            <Select
              defaultValue="desc"
              style={{ width: 200 }}
              onChange={setSort}
              options={[
                { value: "desc", label: "Newest First" },
                { value: "asc", label: "Oldest First" },
                { value: "price-high", label: "Price: High to Low" },
                { value: "price-low", label: "Price: Low to High" },
              ]}
            />
          </Row>

          <Row gutter={[16, 16]}>
            {isLoading ? (
              <div className="w-full flex justify-center p-8">
                <Spin size="large" />
              </div>
            ) : displayedProducts.length === 0 ? (
              <div className="w-full text-center p-8">
                <Text>No products found matching your criteria.</Text>
              </div>
            ) : (
              displayedProducts.map((product: any) => (
                <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                  <Link href={`/products/${product.id}`}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={product.title}
                          src={product.image || "/placeholder.svg"}
                          style={{ height: 200, objectFit: "contain", padding: 16 }}
                        />
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
              ))
            )}
          </Row>

          {hasMore && (
            <Row justify="center" style={{ marginTop: 24 }}>
              <Button type="primary" onClick={handleLoadMore}>
                Load More
              </Button>
            </Row>
          )}
        </Col>
      </Row>
    </Layout>
  )
}