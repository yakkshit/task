"use client"

import ProtectedRoute from "@/components/ProtectedRoute"
import OrdersContent from "@/components/OrdersContent"

export default function OrdersPage() {
  return (
    <ProtectedRoute>
      <OrdersContent />
    </ProtectedRoute>
  )
}