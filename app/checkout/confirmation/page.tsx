"use client"
import { Result, Button, Spin, Typography } from "antd"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useGetOrderQuery } from "@/lib/services/orderApi"

const { Text } = Typography

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams?.get("orderId") ?? ""
  const { data: order, isLoading, isError } = useGetOrderQuery(orderId)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    )
  }

  if (isError || !order) {
    return (
      <Result
        status="error"
        title="Failed to load order details"
        subTitle="We're sorry, but we couldn't retrieve your order information. Please try again later."
        extra={[
          <Link href="/orders" key="orders">
            <Button type="primary">View Orders</Button>
          </Link>,
          <Link href="/" key="home">
            <Button>Continue Shopping</Button>
          </Link>,
        ]}
      />
    )
  }

  return (
    <Result
      status="success"
      title="Order Successfully Placed!"
      subTitle={
        <>
          <Text>Order number: </Text>
          <Text strong>{order.id}</Text>
        </>
      }
      extra={[
        <Link href="/orders" key="orders">
          <Button type="primary">View Orders</Button>
        </Link>,
        <Link href="/" key="home">
          <Button>Continue Shopping</Button>
        </Link>,
      ]}
    />
  )
}