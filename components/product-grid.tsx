import { Row, Col } from "antd"
import { useGetProductsQuery } from "@/store/api"
import ProductCard from "./product-card"
import type { Product } from "@/types/product"

export default function ProductGrid() {
  const { data: products, isLoading } = useGetProductsQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Row gutter={[16, 16]}>
      {products?.map((product: Product) => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  )
}