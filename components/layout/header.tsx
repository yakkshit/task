"use client"

import { useState } from "react"
import { Layout, Menu, Button, Select, Badge, Space, Drawer } from "antd"
import { ShoppingCartOutlined, UserOutlined, SearchOutlined, MenuOutlined } from "@ant-design/icons"
import Link from "next/link"

const { Header } = Layout

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { key: "women", label: "Women" },
    { key: "men", label: "Men" },
    { key: "kids", label: "Kids" },
    { key: "gift-cards", label: "Gift Cards" },
  ]

  return (
    <>
      <div className="w-full bg-blue-600 text-white text-center py-2 text-sm">Free delivery on orders above $50</div>
      <Header className="bg-white px-4 flex items-center justify-between h-16 border-b">
        <div className="flex items-center lg:hidden">
          <Button type="text" icon={<MenuOutlined />} onClick={() => setIsMenuOpen(true)} />
        </div>

        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600 mr-8">
            Store
          </Link>
          <Menu mode="horizontal" items={menuItems} className="hidden lg:block border-0" />
        </div>

        <div className="flex items-center gap-4">
          <Space>
            <Select
              defaultValue="USD"
              style={{ width: 80 }}
              options={[
                { value: "USD", label: "USD" },
                { value: "EUR", label: "EUR" },
                { value: "GBP", label: "GBP" },
              ]}
            />
            <Select
              defaultValue="English"
              style={{ width: 100 }}
              options={[
                { value: "English", label: "English" },
                { value: "Spanish", label: "Spanish" },
                { value: "French", label: "French" },
              ]}
            />
          </Space>

          <Space size="large">
            <Button type="text" icon={<SearchOutlined />} />
            <Badge count={99} size="small">
              <Button type="text" icon={<ShoppingCartOutlined />} />
            </Badge>
            <Button type="text" icon={<UserOutlined />} />
          </Space>
        </div>
      </Header>

      <Drawer title="Menu" placement="left" onClose={() => setIsMenuOpen(false)} open={isMenuOpen}>
        <Menu mode="vertical" items={menuItems} className="border-0" />
      </Drawer>
    </>
  )
}

export default HeaderComponent