"use client"

import { Drawer, Space } from "antd"
import Link from "next/link"

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Drawer title="Menu" placement="left" onClose={onClose} open={open} width={280}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Link href="/women" onClick={onClose}>
          Women
        </Link>
        <Link href="/men" onClick={onClose}>
          Men
        </Link>
        <Link href="/kids" onClick={onClose}>
          Kids
        </Link>
        <Link href="/gift-cards" onClick={onClose}>
          Gift Cards
        </Link>
      </Space>
    </Drawer>
  )
}

