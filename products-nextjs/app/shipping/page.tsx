"use client"

import { Typography, Card, List } from "antd"

const { Title, Paragraph } = Typography

export default function ShippingPage() {
  const shippingMethods = [
    {
      title: "Standard Shipping",
      description: "3-5 business days",
      price: "Free for orders over $50, otherwise $5.99",
    },
    {
      title: "Express Shipping",
      description: "2-3 business days",
      price: "$9.99",
    },
    {
      title: "Next Day Delivery",
      description: "Next business day",
      price: "$19.99",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Title level={2}>Shipping Information</Title>
      <Paragraph>
        We offer various shipping options to meet your needs. Please review our shipping methods and policies below.
      </Paragraph>

      <Card className="mt-8">
        <Title level={4}>Shipping Methods</Title>
        <List
          itemLayout="horizontal"
          dataSource={shippingMethods}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={
                  <>
                    <Paragraph>{item.description}</Paragraph>
                    <Paragraph>
                      <strong>Price:</strong> {item.price}
                    </Paragraph>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </Card>

      <Card className="mt-8">
        <Title level={4}>Shipping Policies</Title>
        <List>
          <List.Item>
            <Paragraph>Orders are typically processed within 1-2 business days after payment is received.</Paragraph>
          </List.Item>
          <List.Item>
            <Paragraph>
              Shipping times are estimates and may vary depending on the destination and other factors.
            </Paragraph>
          </List.Item>
          <List.Item>
            <Paragraph>
              International shipping is available for select countries. Additional customs fees may apply.
            </Paragraph>
          </List.Item>
          <List.Item>
            <Paragraph>
              We are not responsible for any delays caused by customs or other factors outside our control.
            </Paragraph>
          </List.Item>
        </List>
      </Card>
    </div>
  )
}

