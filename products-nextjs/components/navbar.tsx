"use client"

import { useState } from "react"
import Link from "next/link"
import { Layout, Input, Badge, Drawer, Button, Menu, Dropdown } from "antd"
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  MenuOutlined,
  LogoutOutlined,
  OrderedListOutlined,
} from "@ant-design/icons"
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux"
import { selectCart } from "@/lib/features/cartSlice"
import { selectWishlist } from "@/lib/features/wishlistSlice"
import { useAuth } from "@/lib/hooks/useAuth"

const { Header } = Layout
const { Search } = Input

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const cartItems = useSelector(selectCart)
  const wishlistItems = useSelector(selectWishlist)
  const { user, logout } = useAuth()

  const menuItems = [
    { key: "women", label: "Women", href: "/products?category=women%27s%20clothing" },
    { key: "men", label: "Men", href: "/products?category=men%27s%20clothing" },
    { key: "electronics", label: "electronics", href: "/products?category=electronics" },
    { key: "gift-cards", label: "Gift Cards", href: "/gift-cards" },
  ]

  const profileMenu = (
    <Menu>
      <Menu.Item key="orders" icon={<OrderedListOutlined />}>
        <Link href="/account/orders">My Orders</Link>
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <div className="bg-blue-600 text-white text-center py-2 text-sm">Free delivery on orders above $50</div>
      <Header className="bg-white border-b px-4 h-16 flex items-center">
        <Button className="lg:hidden mr-4" icon={<MenuOutlined />} onClick={() => setMobileMenuOpen(true)} />

        <Link href="/" className="mr-8">
          <ShoppingOutlined className="text-2xl text-blue-600" />
        </Link>

        <div className="hidden lg:block flex-1">
          <Menu
            mode="horizontal"
            selectedKeys={[pathname]}
            className="border-0"
            items={menuItems.map((item) => ({
              key: item.href,
              label: <Link href={item.href}>{item.label}</Link>,
            }))}
          />
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <Search placeholder="Search products..." className="max-w-xs hidden md:block" />

          {/* <Link href="/wishlist">
            <Badge count={wishlistItems.length}>
              <HeartOutlined className="text-2xl" />
            </Badge>
          </Link> */}

          <Link href="/cart">
            <Badge count={cartItems.reduce((total, item) => total + item.quantity, 0)}>
              <ShoppingCartOutlined className="text-2xl text-blue-500" />
            </Badge>
          </Link>

          {user ? (
            <Dropdown overlay={profileMenu} placement="bottomRight">
              <UserOutlined className="text-2xl cursor-pointer" />
            </Dropdown>
          ) : (
            <Link href="/auth/login">
              <UserOutlined className="text-2xl" />
            </Link>
          )}
        </div>
      </Header>

      <Drawer title="Menu" placement="left" onClose={() => setMobileMenuOpen(false)} open={mobileMenuOpen}>
        <Menu
          mode="vertical"
          selectedKeys={[pathname]}
          items={menuItems.map((item) => ({
            key: item.href,
            label: <Link href={item.href}>{item.label}</Link>,
          }))}
        />
      </Drawer>
    </>
  )
}