"use client"
import { Card, Tag, Typography } from "antd"
import Link from "next/link"
import Image from "next/image"

const { Text, Title } = Typography

interface ProductCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  category: string
  image: string
  isNew?: boolean
}

const ProductCard = ({ id, title, price, originalPrice, category, image, isNew }: ProductCardProps) => {
  return (
    <Link href={`/product/${id}`}>
      <Card
        hoverable
        cover={
          <div className="relative aspect-square">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            {isNew && (
              <Tag color="blue" className="absolute top-2 right-2">
                New
              </Tag>
            )}
          </div>
        }
        className="h-full"
      >
        <Text type="secondary" className="block mb-1">
          {category}
        </Text>
        <Title level={5} className="mb-2 line-clamp-2">
          {title}
        </Title>
        <div className="flex items-center gap-2">
          <Text strong>${price.toFixed(2)}</Text>
          {originalPrice && (
            <Text delete type="secondary">
              ${originalPrice.toFixed(2)}
            </Text>
          )}
        </div>
      </Card>
    </Link>
  )
}

export default ProductCard