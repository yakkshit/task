"use client"

import { useState } from "react"
import { Layout, Badge, Button, Select, Drawer, Input, Dropdown, Menu } from "antd"
import { ShoppingOutlined, UserOutlined, MenuOutlined, SearchOutlined, LogoutOutlined } from "@ant-design/icons"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useSelector } from "react-redux"
import type { RootState } from "@/lib/store"

const { Header } = Layout

const TopBanner = () => {
  return (
    <div className="bg-[#4285f4] text-white py-2 px-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Select
            defaultValue="USD"
            style={{ width: 80 }}
            variant="borderless"
            className="text-white"
            options={[
              { value: "USD", label: "USD" },
              { value: "EUR", label: "EUR" },
              { value: "GBP", label: "GBP" },
            ]}
          />
          <Select
            defaultValue="English"
            style={{ width: 100 }}
            variant="borderless"
            className="text-white"
            options={[
              { value: "English", label: "English" },
              { value: "Spanish", label: "Spanish" },
              { value: "French", label: "French" },
            ]}
          />
        </div>
        <div className="hidden md:block">Free delivery on orders above $50</div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/returns" className="text-white hover:text-white/80">
            Returns Policy
          </Link>
          <Link href="/help" className="text-white hover:text-white/80">
            Help & Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)

  const navigationItems = [
    { key: "women%27s%20clothing", label: "Women" },
    { key: "men%27s%20clothing", label: "Men" },
    { key: "gift-cards", label: "Gift Cards" },
  ]

  const handleSearch = (value: string) => {
    router.push(`/products?search=${value}`)
  }

  const handleNavigation = (category: string) => {
    router.push(`/products?category=${category}`)
    setMobileMenuOpen(false)
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const accountMenu = {
    items: [
      {
        key: "orders",
        label: "My Orders",
        onClick: () => router.push("/orders"),
      },
      {
        key: "logout",
        label: "Logout",
        icon: <LogoutOutlined />,
        onClick: handleLogout,
      },
    ],
  }

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <TopBanner />
      <Header className="bg-white h-auto py-4 px-4 border-b">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button icon={<MenuOutlined />} type="text" className="md:hidden" onClick={() => setMobileMenuOpen(true)} />
            <Link href="/" className="flex items-center">
              <ShoppingOutlined className="text-2xl text-[#4285f4]" />
              <span className="ml-2 text-xl font-bold hidden md:inline">STORE</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Button
                key={item.key}
                type="text"
                onClick={() => handleNavigation(item.key)}
                className={`${pathname === `/${item.key}` ? "text-[#4285f4]" : ""}`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button icon={<SearchOutlined />} type="text" onClick={() => setSearchVisible(!searchVisible)} />
            <Link href="/cart">
              <Badge count={cartItemCount} className="cursor-pointer">
                <Button icon={<ShoppingOutlined />} type="text" />
              </Badge>
            </Link>
            {user ? (
              <Dropdown menu={accountMenu} trigger={["click", "hover"]}>
                <Button icon={<UserOutlined />} type="text">
                  {user.name}
                </Button>
              </Dropdown>
            ) : (
              <Link href="/login">
                <Button icon={<UserOutlined />} type="text">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>

        {searchVisible && (
          <div className="absolute left-0 right-0 bg-white p-4 border-t border-gray-100 shadow-md">
            <div className="max-w-[1200px] mx-auto">
              <Input.Search size="large" placeholder="Search products..." onSearch={handleSearch} className="w-full" />
            </div>
          </div>
        )}
      </Header>

      <Drawer title="Menu" placement="left" onClose={() => setMobileMenuOpen(false)} open={mobileMenuOpen}>
        <div className="flex flex-col space-y-4">
          {navigationItems.map((item) => (
            <Button
              key={item.key}
              type="text"
              onClick={() => handleNavigation(item.key)}
              className={pathname === `/${item.key}` ? "text-[#4285f4]" : ""}
            >
              {item.label}
            </Button>
          ))}
          <div className="border-t pt-4">
            <Button type="text" block onClick={() => router.push("/returns")}>
              Returns Policy
            </Button>
            <Button type="text" block onClick={() => router.push("/help")}>
              Help & Contact
            </Button>
          </div>
          {user && (
            <Button type="primary" block onClick={handleLogout} icon={<LogoutOutlined />}>
              Logout
            </Button>
          )}
        </div>
      </Drawer>
    </div>
  )
}