"use client"

import { Breadcrumb as AntBreadcrumb } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Breadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter((segment) => segment)

  const breadcrumbItems = [
    { title: <Link href="/">Home</Link> },
    ...pathSegments.map((segment, index) => {
      const url = `/${pathSegments.slice(0, index + 1).join("/")}`
      return {
        title: <Link href={url}>{segment.charAt(0).toUpperCase() + segment.slice(1)}</Link>,
      }
    }),
  ]

  return <AntBreadcrumb items={breadcrumbItems} className="my-4" />
}

