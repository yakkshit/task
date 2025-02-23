"use client"

import type React from "react"

import { Tabs } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"

const { TabPane } = Tabs

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Tabs activeKey={pathname} className="mb-8">
        {/* <TabPane tab={<Link href="/account">Profile</Link>} key="/account" /> */}
        <TabPane tab={<Link href="/account/orders">Orders</Link>} key="/account/orders" />
        <TabPane tab={<Link href="/wishlist">Wishlist</Link>} key="/wishlist" />
      </Tabs>
      {children}
    </div>
  )
}

