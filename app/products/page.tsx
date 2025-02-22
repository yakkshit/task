"use client"

import { useState } from "react"
import { Layout, Row, Col, Card, Input, Slider, Checkbox, Radio, Button, Typography, Spin } from "antd"
import { useGetProductsQuery } from "@/lib/services/api"
import Image from "next/image"
import Link from "next/link"

const { Title, Text } = Typography
const { Search } = Input

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const { data: products, isLoading } = useGetProductsQuery()

  const filteredProducts = products?.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    return matchesSearch && matchesPrice && matchesCategory
  })

  return (
    <Layout className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Row gutter={[32, 32]}>
          {/* Filters Sidebar */}
          <Col xs={24} lg={6}>
            <Card className="sticky top-4">
              <div className="space-y-6">
                <div>
                  <Title level={5}>Search</Title>
                  <Search
                    placeholder="Search products..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-4"
                  />
                </div>

                <div>
                  <Title level={5}>Category</Title>
                  <Checkbox.Group
                    options={[
                      { label: "New collection", value: "new" },
                      { label: "Popular", value: "popular" },
                      { label: "Summer 2023", value: "summer" },
                    ]}
                    value={selectedCategories}
                    onChange={(values) => setSelectedCategories(values as string[])}
                  />
                </div>

                <div>
                  <Title level={5}>Price Range</Title>
                  <Slider
                    range
                    min={0}
                    max={1000}
                    value={priceRange}
                    onChange={(value) => setPriceRange(value as [number, number])}
                  />
                  <div className="flex justify-between">
                    <Text>${priceRange[0]}</Text>
                    <Text>${priceRange[1]}</Text>
                  </div>
                </div>

                <div>
                  <Title level={5}>Color</Title>
                  <Checkbox.Group
                    options={[
                      { label: "White", value: "white" },
                      { label: "Black", value: "black" },
                      { label: "Blue", value: "blue" },
                      { label: "Red", value: "red" },
                    ]}
                    value={selectedColors}
                    onChange={(values) => setSelectedColors(values as string[])}
                  />
                </div>

                <div>
                  <Title level={5}>Size</Title>
                  <Radio.Group value={selectedSizes} onChange={(e) => setSelectedSizes([e.target.value])}>
                    <div className="space-y-2">
                      {["XS", "S", "M", "L", "XL"].map((size) => (
                        <Radio key={size} value={size}>
                          {size}
                        </Radio>
                      ))}
                    </div>
                  </Radio.Group>
                </div>

                <Button type="primary" block>
                  Apply Filters
                </Button>
              </div>
            </Card>
          </Col>

          {/* Products Grid */}
          <Col xs={24} lg={18}>
            {isLoading ? (
              <div className="flex justify-center items-center h-96">
                <Spin size="large" />
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <Title level={4}>Products ({filteredProducts?.length || 0})</Title>
                  <Radio.Group defaultValue="grid">
                    <Radio.Button value="grid">Grid</Radio.Button>
                    <Radio.Button value="list">List</Radio.Button>
                  </Radio.Group>
                </div>

                <Row gutter={[16, 16]}>
                  {filteredProducts?.map((product) => (
                    <Col xs={24} sm={12} md={8} key={product.id}>
                      <Link href={`/products/${product.id}`}>
                        <Card
                          hoverable
                          cover={
                            <div className="relative h-[300px]">
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
                              <div>
                                <Text className="text-lg font-semibold block">${product.price.toFixed(2)}</Text>
                                <div className="flex items-center mt-2">
                                  <div className="flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <span
                                        key={i}
                                        className={`text-lg ${
                                          i < Math.floor(product.rating.rate) ? "text-yellow-400" : "text-gray-300"
                                        }`}
                                      >
                                        ★
                                      </span>
                                    ))}
                                  </div>
                                  <Text type="secondary" className="ml-2">
                                    ({product.rating.count})
                                  </Text>
                                </div>
                              </div>
                            }
                          />
                        </Card>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

