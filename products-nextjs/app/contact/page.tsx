"use client"

import { Typography, Form, Input, Button, Card } from "antd"

const { Title, Paragraph } = Typography
const { TextArea } = Input

export default function ContactPage() {
  const onFinish = (values: any) => {
    console.log("Form values:", values)
    // where we can send data to the server
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Title level={2}>Contact Us</Title>
      <Paragraph>
        We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to reach out to us.
      </Paragraph>

      <Card className="mt-8">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name" }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="subject" label="Subject" rules={[{ required: true, message: "Please enter a subject" }]}>
            <Input />
          </Form.Item>

          <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter your message" }]}>
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card className="mt-8">
        <Title level={4}>Our Information</Title>
        <Paragraph>
          <strong>Address:</strong> 123 E-commerce Street, City, State, ZIP
        </Paragraph>
        <Paragraph>
          <strong>Phone:</strong> (123) 456-7890
        </Paragraph>
        <Paragraph>
          <strong>Email:</strong> support@ecommercestore.com
        </Paragraph>
        <Paragraph>
          <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST
        </Paragraph>
      </Card>
    </div>
  )
}

