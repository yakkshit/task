"use client"

import { Typography, Card, Steps } from "antd"

const { Title, Paragraph } = Typography
const { Step } = Steps

export default function ReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Title level={2}>Returns & Exchanges</Title>
      <Paragraph>
        We want you to be completely satisfied with your purchase. If you're not happy with your order, we offer a
        simple returns and exchanges process.
      </Paragraph>

      <Card className="mt-8">
        <Title level={4}>Returns Process</Title>
        <Steps direction="vertical" current={-1}>
          <Step
            title="Initiate Return"
            description="Contact our customer service team to initiate a return within 30 days of receiving your order."
          />
          <Step title="Receive Return Label" description="We'll email you a prepaid return shipping label." />
          <Step title="Pack Your Item" description="Pack the item securely in its original packaging if possible." />
          <Step
            title="Ship the Item"
            description="Attach the return label to your package and drop it off at any authorized shipping location."
          />
          <Step
            title="Refund Processed"
            description="Once we receive and inspect the item, we'll process your refund within 3-5 business days."
          />
        </Steps>
      </Card>

      <Card className="mt-8">
        <Title level={4}>Exchange Policy</Title>
        <Paragraph>
          If you'd like to exchange an item for a different size or color, please follow the same process as returns. In
          the notes, specify that you'd like an exchange and provide details of the item you'd like instead.
        </Paragraph>
      </Card>

      <Card className="mt-8">
        <Title level={4}>Return Policy</Title>
        <ul className="list-disc pl-6">
          <li>Items must be returned within 30 days of delivery</li>
          <li>Items must be unworn, unwashed, and in the same condition as received</li>
          <li>Items must have all original tags and packaging</li>
          <li>Final sale items are not eligible for return or exchange</li>
          <li>Refunds will be issued to the original payment method</li>
        </ul>
      </Card>
    </div>
  )
}

