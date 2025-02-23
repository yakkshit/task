import NextLink, { type LinkProps as NextLinkProps } from "next/link"
import type React from "react"

interface CustomLinkProps extends Omit<NextLinkProps, "href"> {
  href: string
  children: React.ReactNode
}

const Link: React.FC<CustomLinkProps> = ({ href, children, ...props }) => {
  const fullHref = `/products${href}`
  return (
    <NextLink href={fullHref} {...props}>
      {children}
    </NextLink>
  )
}

export default Link