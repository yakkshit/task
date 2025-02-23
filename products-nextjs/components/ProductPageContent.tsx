"use client"

import { useState, useEffect } from "react"
import {
  Layout,
  Row,
  Col,
  Typography,
  Button,
  Radio,
  InputNumber,
  Rate,
  Image,
  Card,
  Progress,
  Avatar,
  Divider,
  Spin,
  App,
} from "antd"
import { HeartOutlined, HeartFilled, ShoppingCartOutlined } from "@ant-design/icons"
import { useGetProductQuery, useGetProductsByCategoryQuery } from "@/lib/services/api"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, fetchCart } from "@/lib/features/cartSlice"
import { addToWishlist, removeFromWishlist, selectWishlist } from "@/lib/features/wishlistSlice"
import Link from "next/link"
import type { AppDispatch } from "@/lib/store"

const { Title, Text, Paragraph } = Typography

// Mock reviews data
const reviews = [
  {
    id: 1,
    author: "Ron Watson",
    date: "16 July 2023",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.",
  },
  {
    id: 2,
    author: "Sarah Miller",
    date: "15 July 2023",
    rating: 5,
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at lorem vel nisi consequat aliquam. Integer vehicula ex in dui molestie, ac sollicitudin tellus pellentesque.",
  },
  {
    id: 3,
    author: "James Chen",
    date: "14 July 2023",
    rating: 4,
    content:
      "Maecenas sit amet urna ut libero tincidunt consectetur. Nullam commodo sapien nec sem congue, in efficitur ligula vestibulum. Proin dictum eros eu pulvinar tempus.",
  },
]

const features = [
  "100% Cotton",
  "Fabric: Jersey",
  "Care Instructions: Do not tumble dry, machine wash at 30°C",
  "Neckline: Crew neck",
  "Pattern: Print",
  "Fit: Loose fit",
  "Shape: Straight",
]

interface ProductPageContentProps {
  id: string
}

export default function ProductPageContent({ id }: ProductPageContentProps) {
  const { notification } = App.useApp()
  const dispatch = useDispatch<AppDispatch>()
  const { data: product, isLoading, error } = useGetProductQuery(Number(id))
  const { data: similarProducts, isLoading: isSimilarProductsLoading } = useGetProductsByCategoryQuery(
    product?.category || "",
  )
  const [selectedColor, setSelectedColor] = useState("White")
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(1)
  const [isWishlistAnimating, setIsWishlistAnimating] = useState(false)
  const wishlist = useSelector(selectWishlist)
  const isInWishlist = wishlist.some((item) => item.id === product?.id)

  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])

  if (isLoading) {
    return (
      <Layout style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Spin size="large" />
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Title level={3}>Error loading product. Please try again later.</Title>
      </Layout>
    )
  }

  if (!product) {
    return (
      <Layout style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Title level={3}>Product not found.</Title>
      </Layout>
    )
  }

  const handleAddToCart = async () => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity,
      color: selectedColor,
      size: selectedSize,
    }

    try {
      await dispatch(addToCart(item)).unwrap()
      notification.success({
        message: "Added to Cart",
        description: `${quantity} ${quantity > 1 ? "items" : "item"} added to your cart.`,
      })
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Failed to add item to cart. Please try again.",
      })
    }
  }

  const handleAddToWishlist = () => {
    if (product) {
      if (isInWishlist) {
        dispatch(removeFromWishlist(product.id))
        notification.success({
          message: "Removed from Wishlist",
          description: "The item has been removed from your wishlist.",
        })
      } else {
        dispatch(addToWishlist(product))
        notification.success({
          message: "Added to Wishlist",
          description: "The item has been added to your wishlist.",
        })
      }
      setIsWishlistAnimating(true)
      setTimeout(() => setIsWishlistAnimating(false), 500)
    }
  }

  // Calculate average rating and rating distribution
  const averageRating = 4.23
  const ratingDistribution = {
    5: 65,
    4: 20,
    3: 10,
    2: 3,
    1: 2,
  }

  return (
    <Layout style={{ padding: "24px", maxWidth: 1400, margin: "0 auto" }}>
      <Row gutter={[48, 48]}>
        <Col xs={24} md={12}>
          <div style={{ display: "flex", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[1, 2, 3].map((i) => (
                <Image
                  key={i}
                  src={product.image || "/placeholder.svg"}
                  alt={`View ${i}`}
                  width={100}
                  style={{ objectFit: "contain", cursor: "pointer" }}
                />
              ))}
            </div>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div style={{ maxWidth: 500 }}>
            <Text type="secondary">{product.category}</Text>
            <Title level={2}>{product.title}</Title>
            <div style={{ marginBottom: 24 }}>
              <Rate disabled defaultValue={4} />
              <Text type="secondary"> (32 reviews)</Text>
            </div>

            <Title level={3}>${product.price.toFixed(2)}</Title>

            <div style={{ marginTop: 24 }}>
              <Title level={5}>Color</Title>
              <Radio.Group value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                <Radio.Button value="White">White</Radio.Button>
                <Radio.Button value="Black">Black</Radio.Button>
                <Radio.Button value="Blue">Blue</Radio.Button>
                <Radio.Button value="Red">Red</Radio.Button>
              </Radio.Group>
            </div>

            <div style={{ marginTop: 24 }}>
              <Title level={5}>Size</Title>
              <Radio.Group value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                <Radio.Button value="S">S</Radio.Button>
                <Radio.Button value="M">M</Radio.Button>
                <Radio.Button value="L">L</Radio.Button>
                <Radio.Button value="XL">XL</Radio.Button>
              </Radio.Group>
            </div>

            <div style={{ marginTop: 24 }}>
              <Title level={5}>Quantity</Title>
              <InputNumber min={1} value={quantity} onChange={(value) => setQuantity(value || 1)} />
            </div>

            <div style={{ marginTop: 24, display: "flex", gap: 16 }}>
              <Button
                type="primary"
                size="large"
                style={{ flex: 1 }}
                onClick={handleAddToCart}
                icon={<ShoppingCartOutlined />}
              >
                Add to Cart
              </Button>
              <Button
                size="large"
                icon={isInWishlist ? <HeartFilled /> : <HeartOutlined />}
                onClick={handleAddToWishlist}
                className={`wishlist-button ${isWishlistAnimating ? "animate-wishlist" : ""}`}
              >
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </div>

            <Divider />

            <div className="features-section">
              <Title level={4}>Features</Title>
              <ul className="list-none pl-0">
                {features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Divider />

            <div className="description-section">
              <Title level={4}>Description</Title>
              <Paragraph>{product.description}</Paragraph>
            </div>

            <Divider />

            <div className="delivery-section">
              <Title level={4}>Delivery</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales.
                Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit.
              </Paragraph>
            </div>

            <Divider />

            <div className="return-policy-section">
              <Title level={4}>Return Policy</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales.
                Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit.
              </Paragraph>
            </div>
          </div>
        </Col>
      </Row>

      <Divider />

      <div className="reviews-section mt-12">
        <Title level={3}>Customer Reviews</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={16}>
            <div className="reviews-list">
              {reviews.map((review) => (
                <Card key={review.id} className="mb-4">
                  <div className="flex items-start gap-4">
                    <Avatar size="large">{review.author[0]}</Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <Text strong>{review.author}</Text>
                          <Text type="secondary" className="ml-2">
                            {review.date}
                          </Text>
                        </div>
                        <Rate disabled defaultValue={review.rating} />
                      </div>
                      <Paragraph>{review.content}</Paragraph>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Button type="primary" className="mt-4">
              Write your review
            </Button>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <div className="text-center mb-4">
                <Title level={2} style={{ marginBottom: 0 }}>
                  {averageRating.toFixed(1)}
                </Title>
                <Rate allowHalf disabled value={averageRating} />
                <Text type="secondary" className="block">
                  Based on {reviews.length} reviews
                </Text>
              </div>
              <div>
                {Object.entries(ratingDistribution)
                  .reverse()
                  .map(([rating, percentage]) => (
                    <div key={rating} className="flex items-center gap-2 mb-2">
                      <Text>{rating} star</Text>
                      <Progress percent={percentage} size="small" showInfo={false} strokeColor="#1890ff" />
                      <Text type="secondary" style={{ minWidth: "40px" }}>
                        {percentage}%
                      </Text>
                    </div>
                  ))}
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      <Divider />

      <div className="similar-products-section mt-12">
        <div className="flex justify-between items-center mb-6">
          <Title level={3}>Similar Products</Title>
          <Link href={`/products?category=${product.category}`}>
            <Button type="link">See everything</Button>
          </Link>
        </div>
        {isSimilarProductsLoading ? (
          <div className="flex justify-center">
            <Spin size="large" />
          </div>
        ) : similarProducts && similarProducts.length > 0 ? (
          <Row gutter={[16, 16]}>
            {similarProducts
              .filter((p: any) => p.id !== product.id)
              .slice(0, 4)
              .map((similarProduct: any) => (
                <Col xs={12} sm={8} md={6} key={similarProduct.id}>
                  <Link href={`/products/${similarProduct.id}`}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={similarProduct.title}
                          src={similarProduct.image || "/placeholder.svg"}
                          style={{ height: 200, objectFit: "contain", padding: 16 }}
                        />
                      }
                    >
                      <Card.Meta
                        title={similarProduct.title}
                        description={
                          <>
                            <Text strong>${similarProduct.price.toFixed(2)}</Text>
                            <br />
                            <Text type="secondary">{similarProduct.category}</Text>
                          </>
                        }
                      />
                    </Card>
                  </Link>
                </Col>
              ))}
          </Row>
        ) : (
          <div className="text-center">No similar products found.</div>
        )}
      </div>
    </Layout>
  )
}