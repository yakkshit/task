import { type NextRequest, NextResponse } from "next/server"

export function corsMiddleware(req: NextRequest, res: NextResponse) {
  // Check if the origin is allowed
  const origin = req.headers.get("origin")
  const allowedOrigins = ["http://localhost:3002", "http://localhost:3001", process.env.DOMAIN_NAMES_URL]

  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin)
  }

  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
  res.headers.set("Access-Control-Max-Age", "86400")

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 204, headers: res.headers })
  }

  return res
}