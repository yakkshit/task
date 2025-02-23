"use client"

import { useState } from "react"
import { Form, Input, Button, Card, Typography, App } from "antd"
import { useAuth } from "@/lib/hooks/useAuth"
import { useRouter } from "next/navigation"
import Link from "next/link"

const { Title, Text } = Typography

export default function SignupPage() {
  const { notification } = App.useApp()
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()
  const router = useRouter()

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true)
    try {
      await signup(values.email, values.password)
      notification.success({
        message: "Signup successful",
        description: "You have successfully created an account.",
      })
      router.push("/")
    } catch (error) {
      notification.error({
        message: "Signup failed",
        description: "An error occurred during signup. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <Card>
        <Title level={2} className="text-center mb-6">
          Create an Account
        </Title>
        <Form name="signup" onFinish={onFinish} layout="vertical">
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
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be at least 6 characters long!" },
            ]}
          >
            <Input.Password />
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
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <Text className="block text-center">
          Already have an account? <Link href="/auth/login">Log in</Link>
        </Text>
      </Card>
    </div>
  )
}