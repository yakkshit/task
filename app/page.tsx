"use client"

import type React from "react"

import { Layout, Button, Row, Col, Card, Typography, Image } from "antd"
import { useGetProductsQuery } from "@/lib/services/api"
import Link from "next/link"
import { ArrowRightOutlined } from "@ant-design/icons"
import { useRef, useState } from "react"

const { Title, Text } = Typography

// Sample product images for hero and collections
const sampleImages = [
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
]

const collections = [
  {
    title: "Adventure Seeker Collection",
    category: "Adventure",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    title: "Street Travel Collection",
    category: "Travel",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    title: "Everyday Essentials Collection",
    category: "Daily use items",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
]

const promotions = [
  {
    title: "Exclusive Offer",
    description: "Save 5% with Code 'NEW5'",
  },
  {
    title: "New Value",
    description: "Enjoy 15% Off Your Next Beauty Purchase!",
  },
  {
    title: "Hassle-Free Shopping",
    description: "Enjoy 60 Days of Free Returns",
  },
]

export default function Home() {
  const { data: products = [], isLoading } = useGetProductsQuery()
  const scrollContainerRef1 = useRef<HTMLDivElement>(null)
  const scrollContainerRef2 = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return
    setIsDragging(true)
    setStartX(e.pageX - ref.current.offsetLeft)
    setScrollLeft(ref.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!isDragging || !ref.current) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    const walk = (x - startX) * 2
    ref.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-100 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 px-4 py-12">
          <div className="flex flex-col justify-center">
            <Title level={1} className="text-4xl md:text-5xl mb-4">
              Explore Fresh Cosmetic Arrivals!
            </Title>
            <Text className="text-lg mb-8">
              Experience Beauty's Newest Delights: Discover Fresh Makeup, Skincare, and Beauty Products to Elevate Your
              Routine!
            </Text>
            <Button type="primary" size="large" className="w-fit">
              Shop now
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={sampleImages[0] || "/placeholder.svg"}
              alt="Featured collection"
              width={400}
              height={400}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-8 px-4">
        <div className="max-w-[1200px] mx-auto">
          <Row gutter={[16, 16]} justify="center">
            {promotions.map((promo, index) => (
              <Col xs={24} sm={8} key={index}>
                <Card className="text-center h-full">
                  <Title level={5}>{promo.title}</Title>
                  <Text>{promo.description}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Collections */}
      <section className="py-8 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Title level={2}>Collections</Title>
          </div>
          <Row gutter={[16, 16]}>
            {collections.map((collection, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Link href={`/products?collection=${collection.category.toLowerCase()}`}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt={collection.title}
                        src={collection.image || "/placeholder.svg"}
                        style={{ height: 300, objectFit: "cover" }}
                      />
                    }
                  >
                    <Text type="secondary" className="uppercase">
                      {collection.category}
                    </Text>
                    <Title level={4}>{collection.title}</Title>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Similar Products Scrollable Section */}
      <section className="py-8 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Title level={2}>Similar Products</Title>
            <Link href="/products">
              <Button type="link" className="flex items-center">
                See everything <ArrowRightOutlined className="ml-2" />
              </Button>
            </Link>
          </div>
          <div
            className="overflow-x-auto scrollbar-hide"
            ref={scrollContainerRef1}
            onMouseDown={(e) => handleMouseDown(e, scrollContainerRef1)}
            onMouseMove={(e) => handleMouseMove(e, scrollContainerRef1)}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="flex gap-4 pb-4" style={{ minWidth: "min-content" }}>
              {products.slice(0, 6).map((product: any) => (
                <div key={product.id} style={{ minWidth: "280px", maxWidth: "280px" }}>
                  <Link href={`/products/${product.id}`}>
                    <Card
                      hoverable
                      cover={
                        <div className="h-[200px] flex items-center justify-center p-4">
                          <img
                            alt={product.title}
                            src={product.image || "/placeholder.svg"}
                            className="max-h-full w-auto object-contain"
                          />
                        </div>
                      }
                    >
                      <Card.Meta
                        title={product.title}
                        description={
                          <div>
                            <Text strong>${product.price.toFixed(2)}</Text>
                            <Text delete type="secondary" className="ml-2">
                              ${(product.price * 1.2).toFixed(2)}
                            </Text>
                          </div>
                        }
                      />
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <Title level={2} className="text-white mb-4">
            Explore Our Newest Cosmetic Arrivals!
          </Title>
          <Text className="text-gray-300 block mb-8 max-w-2xl mx-auto">
            Our latest cosmetic arrivals have just landed, and they're sure to dazzle you. Check out the freshest
            makeup, skincare, beauty products and elevate your beauty routine.
          </Text>
          <Button type="primary" size="large">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Second Similar Products Section */}
      <section className="py-8 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Title level={2}>Similar Products</Title>
            <Link href="/products">
              <Button type="link" className="flex items-center">
                See everything <ArrowRightOutlined className="ml-2" />
              </Button>
            </Link>
          </div>
          <div
            className="overflow-x-auto scrollbar-hide"
            ref={scrollContainerRef2}
            onMouseDown={(e) => handleMouseDown(e, scrollContainerRef2)}
            onMouseMove={(e) => handleMouseMove(e, scrollContainerRef2)}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="flex gap-4 pb-4" style={{ minWidth: "min-content" }}>
              {products.slice(6, 12).map((product: any) => (
                <div key={product.id} style={{ minWidth: "280px", maxWidth: "280px" }}>
                  <Link href={`/products/${product.id}`}>
                    <Card
                      hoverable
                      cover={
                        <div className="h-[200px] flex items-center justify-center p-4">
                          <img
                            alt={product.title}
                            src={product.image || "/placeholder.svg"}
                            className="max-h-full w-auto object-contain"
                          />
                        </div>
                      }
                    >
                      <Card.Meta
                        title={product.title}
                        description={
                          <div>
                            <Text strong>${product.price.toFixed(2)}</Text>
                            <Text delete type="secondary" className="ml-2">
                              ${(product.price * 1.2).toFixed(2)}
                            </Text>
                          </div>
                        }
                      />
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}