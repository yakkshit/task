"use client"
import { useParams } from "next/navigation"
import { useGetProductQuery } from "@/lib/services/api"
import ProductPageContent from "@/components/ProductPageContent"
import { Spin } from "antd"

export default function ProductPage() {
  const { id } = useParams()
  const productId = Array.isArray(id) ? id[0] : id
  const { data: product, isLoading, error } = useGetProductQuery(Number(productId))

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    )
  }

  if (error || !product) {
    return <div>Error loading product</div>
  }

  return <ProductPageContent id={productId} />
}

