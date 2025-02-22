"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/hooks/useAuth"
import CheckoutContent from "@/components/CheckoutContent"
import { Spin } from "antd"

export default function CheckoutPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user === null) {
      router.push("/auth/signup")
    }
  }, [user, router])

  if (user === undefined) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    )
  }

  if (user === null) {
    return null
  }

  return <CheckoutContent />
}