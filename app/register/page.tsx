"use client"

import { useState } from "react"
import { Form, Input, Button, Card, Typography, Layout } from "antd"
import { useRouter } from "next/navigation"
import { db } from "@/lib/db"
import { useAuth } from "@/lib/auth-context"
import { showNotification } from "@/components/Notification"
import Link from "next/link"

const { Title, Text } = Typography

export default function RegisterPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      const newUser = await db.createUser({
        email: values.email,
        password: values.password,
        name: values.name,
      })
      const { password, ...userData } = newUser
      login(userData)
      showNotification("success", "Registration successful")
      router.push("/account")
    } catch (error) {
      showNotification("error", "Registration failed")
    }
    setLoading(false)
  }

  return (
    <Layout style={{ minHeight: "100vh", padding: "40px 20px", background: "#f5f5f5" }}>
      <Card style={{ maxWidth: 400, margin: "0 auto", width: "100%" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
          Register
        </Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Full Name" rules={[{ required: true, message: "Please input your name!" }]}>
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email", message: "Please input a valid email!" }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error("The two passwords do not match!"))
                },
              }),
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block loading={loading}>
              Register
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: "center" }}>
          <Text>Already have an account? </Text>
          <Link href="/login">Login</Link>
        </div>
      </Card>
    </Layout>
  )
}