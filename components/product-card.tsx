"use client"

import { Card, Rate, Typography } from "antd"
import { useRouter } from "next/navigation"
import type { Product } from "@/types/product"

const { Meta } = Card
const { Text } = Typography

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/products/${product.id}`)
  }

  return (
    <Card
      hoverable
      onClick={handleClick}
      cover={
        <div style={{ height: 200, overflow: "hidden", display: "flex", alignItems: "center" }}>
          <img
            alt={product.title}
            src={product.image || "/placeholder.svg"}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
      }
    >
      <Meta
        title={product.title}
        description={
          <>
            <Text strong>${product.price}</Text>
            <div>
              <Rate disabled defaultValue={product.rating.rate} />
              <Text type="secondary">({product.rating.count})</Text>
            </div>
          </>
        }
      />
    </Card>
  )
}