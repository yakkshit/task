"use client"

import { useState } from "react"
import { Layout } from "antd"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"

const { Content, Sider } = Layout

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])

  return (
    <Layout>
      <Layout>
        <Sider width={300} style={{ background: "#fff", padding: "24px" }}>
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onPriceRangeChange={setPriceRange}
          />
        </Sider>
        <Content style={{ padding: "24px" }}>
          <ProductGrid />
        </Content>
      </Layout>
    </Layout>
  )
}