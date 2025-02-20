import { Radio, Slider, Typography, Space } from "antd"
import { useGetCategoriesQuery } from "@/store/api"

const { Title } = Typography

interface ProductFiltersProps {
  onCategoryChange: (category: string) => void
  onPriceRangeChange: (range: [number, number]) => void
  selectedCategory: string
}

export default function ProductFilters({
  onCategoryChange,
  onPriceRangeChange,
  selectedCategory,
}: ProductFiltersProps) {
  const { data: categories, isLoading } = useGetCategoriesQuery()

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Title level={4}>Categories</Title>
      <Radio.Group value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        <Space direction="vertical">
          <Radio value="">All</Radio>
          {categories?.map((category) => (
            <Radio key={category} value={category}>
              {category}
            </Radio>
          ))}
        </Space>
      </Radio.Group>

      <Title level={4} style={{ marginTop: 24 }}>
        Price Range
      </Title>
      <Slider
        range
        defaultValue={[0, 1000]}
        max={1000}
        onChange={(range) => onPriceRangeChange(range as [number, number])}
      />
    </Space>
  )
}