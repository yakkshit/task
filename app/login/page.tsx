"use client"

import { useState } from "react"
import { Form, Input, Button, Card, Typography, Layout } from "antd"
import { useRouter } from "next/navigation"
import { db } from "@/lib/db"
import { useAuth } from "@/lib/auth-context"
import { showNotification } from "@/components/Notification"
import Link from "next/link"

const { Title, Text } = Typography

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true)
    try {
      const user = await db.getUserByEmail(values.email)
      if (user && user.password === values.password) {
        const { password, ...userData } = user
        login(userData)
        showNotification("success", "Successfully logged in")
        router.push("/account")
      } else {
        showNotification("error", "Invalid email or password")
      }
    } catch (error) {
      showNotification("error", "An error occurred")
    }
    setLoading(false)
  }

  return (
    <Layout style={{ minHeight: "100vh", padding: "40px 20px", background: "#f5f5f5" }}>
      <Card style={{ maxWidth: 400, margin: "0 auto", width: "100%" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
          Login
        </Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email", message: "Please input your email!" }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: "center" }}>
          <Text>Don&apos;t have an account? </Text>
          <Link href="/register">Register</Link>
        </div>
      </Card>
    </Layout>
  )
}