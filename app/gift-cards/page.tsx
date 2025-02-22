"use client"

import { Card, Typography, Button, Input, Space } from "antd"
import { GiftOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography

export default function GiftCardsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Title level={2}>Gift Cards</Title>
      <Paragraph>Give the gift of choice with our e-commerce store gift cards!</Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Card
          hoverable
          cover={
            <div className="bg-blue-500 h-48 flex items-center justify-center">
              <GiftOutlined style={{ fontSize: "64px", color: "white" }} />
            </div>
          }
        >
          <Card.Meta title="E-Gift Card" description="Send a digital gift card instantly via email" />
          <div className="mt-4">
            <Space.Compact>
              <Input style={{ width: "calc(100% - 100px)" }} placeholder="Enter amount" prefix="$" />
              <Button type="primary">Buy Now</Button>
            </Space.Compact>
          </div>
        </Card>

        <Card
          hoverable
          cover={
            <div className="bg-green-500 h-48 flex items-center justify-center">
              <GiftOutlined style={{ fontSize: "64px", color: "white" }} />
            </div>
          }
        >
          <Card.Meta title="Physical Gift Card" description="Send a physical gift card by mail" />
          <div className="mt-4">
            <Space.Compact>
              <Input style={{ width: "calc(100% - 100px)" }} placeholder="Enter amount" prefix="$" />
              <Button type="primary">Buy Now</Button>
            </Space.Compact>
          </div>
        </Card>
      </div>

      <Card className="mt-8">
        <Title level={4}>How it works</Title>
        <ol className="list-decimal list-inside">
          <li>Choose between an e-gift card or a physical gift card</li>
          <li>Select the amount you want to gift</li>
          <li>Add a personalized message (optional)</li>
          <li>Complete the purchase</li>
          <li>The recipient can use the gift card to shop on our store</li>
        </ol>
      </Card>

      <Card className="mt-8">
        <Title level={4}>Gift Card Terms & Conditions</Title>
        <ul className="list-disc list-inside">
          <li>Gift cards are valid for 12 months from the date of purchase</li>
          <li>Gift cards can be used for multiple purchases until the balance is depleted</li>
          <li>Gift cards cannot be redeemed for cash</li>
          <li>Lost or stolen gift cards cannot be replaced</li>
          <li>Gift cards are non-refundable</li>
        </ul>
      </Card>
    </div>
  )
}