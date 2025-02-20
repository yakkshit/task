"use client"

import { Layout, Button, Row, Col, Card, Typography } from "antd"
import { Image } from "antd";

const { Header, Footer, Content } = Layout
const { Title, Text } = Typography

export default function Home() {
  return (
    <Layout>
      <Content>
        {/* Hero Section */}
        <section style={{ padding: "60px 0", background: "#f5f5f5" }}>
          <Row justify="center" align="middle" gutter={[48, 48]}>
            <Col xs={24} md={12} style={{ padding: "0 50px" }}>
              <Title level={1}>Explore Fresh Cosmetic Arrivals</Title>
              <Text style={{ fontSize: "18px", marginBottom: "24px", display: "block" }}>
                Experience Beauty's Newest Delights! Discover Fresh Makeup, Skincare, and Beauty Products to Enhance
                Your Natural Glow
              </Text>
              <Button type="primary" size="large">
                Shop now
              </Button>
            </Col>
            <Col xs={24} md={12}>
              <Image
                src="/placeholder.svg"
                alt="Cosmetics collection"
                width={500}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </Col>
          </Row>
        </section>

        {/* Promotions */}
        <section style={{ padding: "40px 50px", background: "#fff" }}>
          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} md={8}>
              <Card>
                <Title level={5}>Save 25% with Code 'NEW'</Title>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Title level={5}>Enjoy 15% Off Your Next Beauty Purchase!</Title>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Title level={5}>Enjoy 60 Days of Free Returns</Title>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Collections */}
        <section style={{ padding: "40px 50px", background: "#f5f5f5" }}>
          <Title level={2} style={{ marginBottom: "40px" }}>
            Collections
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card cover={<Image src="/placeholder.svg" alt="Adventure Seeker Collection" width={400} height={300} />}>
                <Card.Meta title="Adventure Seeker Collection" />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card cover={<Image src="/placeholder.svg" alt="Street Travel Collection" width={400} height={300} />}>
                <Card.Meta title="Street Travel Collection" />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                cover={<Image src="/placeholder.svg" alt="Everyday Essentials Collection" width={400} height={300} />}
              >
                <Card.Meta title="Everyday Essentials Collection" />
              </Card>
            </Col>
          </Row>
        </section>

        {/* Similar Products */}
        <section style={{ padding: "40px 50px", background: "#fff" }}>
          <Title level={2} style={{ marginBottom: "40px" }}>
            Similar Products
          </Title>
          <Row gutter={[24, 24]}>
            {[1, 2, 3, 4].map((item) => (
              <Col xs={24} sm={12} md={6} key={item}>
                <Card cover={<Image src="/placeholder.svg" alt={`Product ${item}`} width={300} height={200} />}>
                  <Card.Meta title="Funky Sunglasses" description={<Text strong>$99.99</Text>} />
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Newsletter */}
        <section style={{ padding: "60px 50px", background: "#141414", textAlign: "center" }}>
          <Row justify="center">
            <Col xs={24} md={16} lg={12}>
              <Title level={2} style={{ color: "#fff", marginBottom: "24px" }}>
                Explore Our Newest Cosmetic Arrivals!
              </Title>
              <Text style={{ color: "#fff", marginBottom: "24px", display: "block" }}>
                Our latest cosmetic arrivals have just landed, and they're sure to dazzle you. Check out the freshest
                arrivals, skincare, beauty products and elevate your beauty routine.
              </Text>
              <Button type="primary" size="large">
                Shop now
              </Button>
            </Col>
          </Row>
        </section>
      </Content>
    </Layout>
  )
}