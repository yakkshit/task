"use client"

import { Row, Col, Typography } from "antd"
import ProductCard from "./product-card"

const { Title } = Typography

interface Product {
  id: string
  title: string
  price: number
  originalPrice?: number
  category: string
  image: string
  isNew?: boolean
}

interface ProductGridProps {
  title: string
  products: Product[]
  showViewAll?: boolean
}

const ProductGrid = ({ title, products, showViewAll = true }: ProductGridProps) => {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <Title level={2}>{title}</Title>
        {showViewAll && (
          <a href="#" className="text-blue-600 hover:underline">
            See everything
          </a>
        )}
      </div>
      <Row gutter={[24, 24]}>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={8} md={6}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProductGrid