"use client"

import { useState } from "react"
import { Layout, Row, Col, Badge, Space } from "antd"
import { ShoppingOutlined, ShoppingCartOutlined, UserOutlined, SearchOutlined, MenuOutlined } from "@ant-design/icons"
import Link from "next/link"
import MobileMenu from "./mobile-menu"

const { Header } = Layout

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div style={{ background: "#1677ff", padding: "8px 0", textAlign: "center", color: "white" }}>
        Free delivery on orders above $50
      </div>
      <Header style={{ background: "#fff", padding: "0 50px", height: "auto" }}>
        <Row justify="space-between" align="middle" style={{ height: "80px" }}>
          <Col xs={4} md={8}>
            <Space size={24} className="desktop-menu">
              <Link href="/women" className="nav-link">
                Women
              </Link>
              <Link href="/men" className="nav-link">
                Men
              </Link>
              <Link href="/kids" className="nav-link">
                Kids
              </Link>
              <Link href="/gift-cards" className="nav-link">
                Gift Cards
              </Link>
            </Space>
            <MenuOutlined className="mobile-menu-icon" onClick={() => setMobileMenuOpen(true)} />
          </Col>

          <Col xs={16} md={8} style={{ textAlign: "center" }}>
            <Link href="/">
              <div style={{ fontSize: "24px", color: "#1677ff" }}>
                <ShoppingOutlined />
              </div>
            </Link>
          </Col>

          <Col xs={4} md={8}>
            <Space size={24} style={{ float: "right" }}>
              <SearchOutlined style={{ fontSize: "20px" }} />
              <UserOutlined style={{ fontSize: "20px" }} />
              <Badge count={5} size="small">
                <ShoppingCartOutlined style={{ fontSize: "20px" }} />
              </Badge>
            </Space>
          </Col>
        </Row>
      </Header>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}