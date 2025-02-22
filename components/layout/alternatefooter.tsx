"use client"

import { Layout, Row, Col, Typography, Input, Button, Space } from "antd"
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons"
import Link from "next/link"

const { Footer } = Layout
const { Title, Text } = Typography

export default function AppFooter() {
  return (
    <Footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <Title level={4}>About Us</Title>
            <Text>We are a modern e-commerce store offering a wide range of products to suit your needs.</Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4}>Customer Service</Title>
            <ul className="list-none p-0">
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping Information</Link>
              </li>
              <li>
                <Link href="/returns">Returns & Exchanges</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4}>Quick Links</Title>
            <ul className="list-none p-0">
              <li>
                <Link href="/products">All Products</Link>
              </li>
              <li>
                <Link href="/category/new-arrivals">New Arrivals</Link>
              </li>
              <li>
                <Link href="/category/best-sellers">Best Sellers</Link>
              </li>
              <li>
                <Link href="/gift-cards">Gift Cards</Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4}>Newsletter</Title>
            <Text>Subscribe to our newsletter for exclusive deals and updates.</Text>
            <Space.Compact className="mt-4">
              <Input
              style={{ width: "calc(100% - 100px)", borderRadius: "8px" }}
              placeholder="Enter your email"
              />
              <Button type="primary" style={{ borderRadius: "8px" }}>
              Subscribe
              </Button>
            </Space.Compact>
          </Col>
        </Row>
        <div className="mt-8 pt-8 border-t border-gray-300">
          <Row justify="space-between" align="middle">
            <Col>
              <Text>&copy; 2023 Your E-commerce Store. All rights reserved.</Text>
            </Col>
            <Col>
              <a href="#" className="mr-4">
                <FacebookOutlined style={{ fontSize: "24px" }} />
              </a>
              <a href="#" className="mr-4">
                <TwitterOutlined style={{ fontSize: "24px" }} />
              </a>
              <a href="#">
                <InstagramOutlined style={{ fontSize: "24px" }} />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </Footer>
  )
}