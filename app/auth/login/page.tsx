"use client"

import { useState } from "react"
import { Form, Input, Button, Card, Typography, App } from "antd"
import { useAuth } from "@/lib/hooks/useAuth"
import { useRouter } from "next/navigation"
import Link from "next/link"

const { Title, Text } = Typography

export default function LoginPage() {
  const { notification } = App.useApp()
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true)
    try {
      await login(values.email, values.password)
      notification.success({
        message: "Login successful",
        description: "You have successfully logged in.",
      })
      router.push("/")
    } catch (error) {
      notification.error({
        message: "Login failed",
        description: "Invalid email or password. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <Card>
        <Title level={2} className="text-center mb-6">
          Login
        </Title>
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Log in
            </Button>
          </Form.Item>
        </Form>
        <Text className="block text-center">
          Don't have an account? <Link href="/auth/signup">Sign up</Link>
        </Text>
      </Card>
    </div>
  )
}

