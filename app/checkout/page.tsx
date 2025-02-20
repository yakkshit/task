"use client"

import { Form, Input, Button, Steps, Card, Row, Col, Radio, Space, Divider, Typography } from "antd"
import { useState } from "react"
import type { RadioChangeEvent } from "antd"

const { Title, Text } = Typography

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const handlePaymentChange = (e: RadioChangeEvent) => {
    setPaymentMethod(e.target.value)
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <Steps
        current={currentStep}
        items={[{ title: "Contact Information" }, { title: "Shipping" }, { title: "Payment" }, { title: "Review" }]}
        style={{ marginBottom: 32 }}
      />

      <Row gutter={32}>
        <Col xs={24} lg={16}>
          <Card>
            {currentStep === 0 && (
              <Form layout="vertical">
                <Title level={4}>Contact Information</Title>
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item label="First Name" required>
                      <Input placeholder="Enter your first name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Last Name" required>
                      <Input placeholder="Enter your last name" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Email" required>
                  <Input type="email" placeholder="Enter your email" />
                </Form.Item>
                <Form.Item label="Phone">
                  <Input placeholder="Enter your phone number" />
                </Form.Item>
              </Form>
            )}

            {currentStep === 1 && (
              <Form layout="vertical">
                <Title level={4}>Shipping Address</Title>
                <Form.Item label="Address Line 1" required>
                  <Input placeholder="Enter street address" />
                </Form.Item>
                <Form.Item label="Address Line 2">
                  <Input placeholder="Apartment, suite, etc. (optional)" />
                </Form.Item>
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item label="City" required>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="State/Province" required>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Country" required>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Postal Code" required>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            )}

            {currentStep === 2 && (
              <div>
                <Title level={4}>Payment Method</Title>
                <Radio.Group onChange={handlePaymentChange} value={paymentMethod}>
                  <Space direction="vertical">
                    <Radio value="credit-card">Credit Card</Radio>
                    <Radio value="paypal">PayPal</Radio>
                    <Radio value="apple-pay">Apple Pay</Radio>
                  </Space>
                </Radio.Group>

                {paymentMethod === "credit-card" && (
                  <Form layout="vertical" style={{ marginTop: 24 }}>
                    <Form.Item label="Card Number" required>
                      <Input placeholder="1234 5678 9012 3456" />
                    </Form.Item>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label="Expiry Date" required>
                          <Input placeholder="MM/YY" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="CVC" required>
                          <Input placeholder="123" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                )}
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <Title level={4}>Order Review</Title>
                <div>
                  {/* Order summary will be populated from cart state */}
                  <Card size="small">
                    <Text>Sample Product x 2</Text>
                    <Text style={{ float: "right" }}>$39.98</Text>
                  </Card>
                  <Divider />
                  <div style={{ textAlign: "right" }}>
                    <Text>Subtotal: $39.98</Text>
                    <br />
                    <Text>Shipping: $5.00</Text>
                    <br />
                    <Text strong>Total: $44.98</Text>
                  </div>
                </div>
              </div>
            )}

            <div style={{ marginTop: 24 }}>
              {currentStep > 0 && (
                <Button style={{ marginRight: 8 }} onClick={prevStep}>
                  Previous
                </Button>
              )}
              {currentStep < 3 && (
                <Button type="primary" onClick={nextStep}>
                  Next
                </Button>
              )}
              {currentStep === 3 && <Button type="primary">Place Order</Button>}
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title="Order Summary">
            <div>
              <Text>Subtotal:</Text>
              <Text style={{ float: "right" }}>$39.98</Text>
            </div>
            <div>
              <Text>Shipping:</Text>
              <Text style={{ float: "right" }}>$5.00</Text>
            </div>
            <Divider />
            <div>
              <Text strong>Total:</Text>
              <Text strong style={{ float: "right" }}>
                $44.98
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}