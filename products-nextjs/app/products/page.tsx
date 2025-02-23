"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Layout, Row, Col, Card, Input, Slider, Checkbox, Radio, Button, Typography, Spin, Drawer } from "antd"
import { useGetProductsQuery } from "@/lib/services/api"
import Image from "next/image"
import Link from "next/link"
import { FilterOutlined } from "@ant-design/icons"

const { Title, Text } = Typography
const { Search } = Input

const PRODUCTS_PER_PAGE = 8

export default function ProductsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [visibleProducts, setVisibleProducts] = useState(PRODUCTS_PER_PAGE)

  const { data: products, isLoading } = useGetProductsQuery()

  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      setSelectedCategories(category.split(","))
    }
    const search = searchParams.get("search")
    if (search) {
      setSearchQuery(search)
    }
  }, [searchParams])

  const filteredProducts = products?.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    return matchesSearch && matchesPrice && matchesCategory
  })

  const displayedProducts = filteredProducts?.slice(0, visibleProducts)

  const handleCategoryChange = (checkedValues: string[]) => {
    setSelectedCategories(checkedValues)
  }

  const applyFilters = () => {
    let url = "/products?"
    if (selectedCategories.length > 0) url += `category=${selectedCategories.join(",")}&`
    if (selectedColors.length > 0) url += `colors=${selectedColors.join(",")}&`
    if (selectedSize) url += `size=${selectedSize}&`
    if (priceRange[0] !== 0 || priceRange[1] !== 1000) url += `price=${priceRange[0]},${priceRange[1]}&`
    if (searchQuery) url += `search=${encodeURIComponent(searchQuery)}&`
    router.push(url.slice(0, -1)) // Remove trailing '&' or '?'
    setShowFilters(false)
  }

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    router.push(`/products?search=${encodeURIComponent(value)}`)
  }

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + PRODUCTS_PER_PAGE)
  }

  const FiltersContent = () => (
    <div className="space-y-6">
      <div>
        <Title level={5}>Category</Title>
        <Checkbox.Group
          options={[
            { label: "Women's Clothing", value: "women's clothing" },
            { label: "Men's Clothing", value: "men's clothing" },
            { label: "Electronics", value: "electronics" },
            { label: "Jewelery", value: "jewelery" },
          ]}
          value={selectedCategories}
          onChange={handleCategoryChange}
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
        <Radio.Group value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
          <div className="space-y-2">
            {["", "XS", "S", "M", "L", "XL"].map((size) => (
              <Radio key={size} value={size}>
                {size || "All"}
              </Radio>
            ))}
          </div>
        </Radio.Group>
      </div>

      <Button type="primary" onClick={applyFilters} block>
        Apply Filters
      </Button>
    </div>
  )

  return (
    <Layout className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Row gutter={[16, 16]}>
          {/* Filters for larger screens */}
          <Col xs={0} md={6} lg={5}>
            <Card className="sticky top-4">
              <FiltersContent />
            </Card>
          </Col>

          {/* Products Grid */}
          <Col xs={16} md={16} lg={19}>
            <div className="mb-6">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <Button icon={<FilterOutlined />} onClick={() => setShowFilters(true)} className="md:hidden">
                  Filters
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <Title level={4} className="m-0">
                  Products ({filteredProducts?.length || 0})
                </Title>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-96">
                <Spin size="large" />
              </div>
            ) : (
              <>
                <Row gutter={[16, 16]} justify={"center"}>
                  {displayedProducts?.map((product) => (
                  <Col xs={14} sm={14} md={12} lg={8} key={product.id}>
                    <Link href={`/products/${product.id}`}>
                    <Card
                      hoverable
                      style={{ width: 260 }} 
                      cover={
                      <div className="relative aspect-square">
                        <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-contain p-2" // Reduced padding for image
                        />
                      </div>
                      }
                    >
                      <Card.Meta
                      title={<div className="truncate">{product.title}</div>}
                      description={
                        <div className="space-y-2">
                        <Text className="text-base md:text-lg font-semibold block">
                          ${product.price.toFixed(2)}
                        </Text>
                        <div className="flex items-center">
                          <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                            key={i}
                            className={`text-xs md:text-sm ${
                              i < Math.floor(product.rating.rate)
                              ? "text-yellow-400"
                              : "text-gray-300"
                            }`}
                            >
                            ★
                            </span>
                          ))}
                          </div>
                          <Text type="secondary" className="ml-2 text-xs">
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
                {visibleProducts < (filteredProducts?.length || 0) && (
                  <div className="text-center justify-center mt-8">
                    <Button onClick={loadMoreProducts}>Load More</Button>
                  </div>
                )}
              </>
            )}
          </Col>
        </Row>
      </div>

      {/* Filters drawer for mobile */}
      <Drawer title="Filters" placement="right" onClose={() => setShowFilters(false)} open={showFilters} width={300}>
        <FiltersContent />
      </Drawer>
    </Layout>
  )
}