"use client"

import { useEffect, useState } from "react"
import { Typography, Button, Card, Row, Col } from "antd"
import Link from "next/link"
import Image from "next/image"
import { ArrowRightOutlined, GiftOutlined, TagOutlined, UndoOutlined } from "@ant-design/icons"

const { Title, Text } = Typography

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=8")
  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }
  return res.json()
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Title level={1} className="text-4xl md:text-5xl font-bold mb-4">
                Explore Fresh Cosmetic Arrivals!
              </Title>
              <Text className="text-gray-600 text-lg block mb-6">
                Experience beauty's newest delights. Discover Fresh Makeup, Skincare, and Beauty Products to Elevate
                Your Routine!
              </Text>
              <Link href="/products">
                <Button type="primary" size="large" className="h-12 px-8">
                  Shop now <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <Image
                src={products[0]?.image || "/placeholder.svg"}
                alt="Featured Product"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Promotions */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card className="text-center h-full bg-blue-50 border-0">
              <TagOutlined className="text-3xl text-blue-600 mb-4" />
              <Title level={5}>Exclusive Offer</Title>
              <Text className="block">Save 5% with Code 'NEW5'</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="text-center h-full bg-pink-50 border-0">
              <GiftOutlined className="text-3xl text-pink-600 mb-4" />
              <Title level={5}>Special Deal</Title>
              <Text className="block">Enjoy 15% Off Your Next Beauty Purchase!</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="text-center h-full bg-green-50 border-0">
              <UndoOutlined className="text-3xl text-green-600 mb-4" />
              <Title level={5}>Free Returns</Title>
              <Text className="block">Enjoy 60 Days of Free Returns</Text>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Collections */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Title level={2} className="mb-8">
            Collections
          </Title>
          <Row gutter={[24, 24]}>
            {products.slice(0, 3).map((product, index) => (
              <Col xs={24} md={8} key={product.id}>
                <Link href={`/category/${product.category}`}>
                  <Card
                    hoverable
                    cover={
                      <div className="h-[300px] relative">
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
                      title={
                        <Title level={5} className="m-0">
                          {index === 0
                            ? "Adventure Seeker Collection"
                            : index === 1
                              ? "Street Travel Collection"
                              : "Everyday Essentials Collection"}
                        </Title>
                      }
                      description={`Explore ${product.category}`}
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Title level={2} className="mb-8">
            Similar Products
          </Title>
          <Row gutter={[16, 16]}>
            {products.slice(0, 4).map((product) => (
              <Col xs={24} sm={12} md={6} key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <Card
                    hoverable
                    cover={
                      <div className="h-[200px] relative">
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
                        <div className="mt-2">
                          <Text className="text-lg font-semibold block">${product.price.toFixed(2)}</Text>
                        </div>
                      }
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Dark Theme Promotion */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Title level={2} className="text-white mb-4">
            Explore Our Newest Cosmetic Arrivals!
          </Title>
          <Text className="text-gray-300 block mb-8 max-w-2xl mx-auto">
            Our latest cosmetic arrivals have just landed, and they're sure to dazzle you. Check out the freshest
            makeup, skincare, beauty products and elevate your beauty routine.
          </Text>
          <Link href="/products">
            <Button type="primary" size="large" className="h-12 px-8">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>

      {/* More Products */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Title level={2} className="mb-8">
            Similar Products
          </Title>
          <Row gutter={[16, 16]}>
            {products.slice(4, 8).map((product) => (
              <Col xs={24} sm={12} md={6} key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <Card
                    hoverable
                    cover={
                      <div className="h-[200px] relative">
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
                        <div className="mt-2">
                          <Text className="text-lg font-semibold block">${product.price.toFixed(2)}</Text>
                        </div>
                      }
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}