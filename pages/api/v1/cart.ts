import type { NextApiRequest, NextApiResponse } from "next"
import { unstable_cache } from "next/cache"

const AUTH_KEY = process.env.API_AUTH_KEY || "default_auth_key"

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
  color: string
  size: string
}

// In-memory store for cart data
const cartStore = new Map<string, CartItem[]>()

// Cached function to get cart data
const getCartData = unstable_cache(
  async (userId: string) => {
    return cartStore.get(userId) || []
  },
  ["cart"],
  { revalidate: 60 }, // Cache for 60 seconds
)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const authKey = req.headers["x-auth-key"]

  if (authKey !== AUTH_KEY) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  // For this example, we'll use a fixed user ID. In a real application, you'd get this from the authenticated user.
  const userId = "user123"

  if (req.method === "GET") {
    const cartData = await getCartData(userId)
    res.status(200).json({ items: cartData })
  } else if (req.method === "POST") {
    const { items } = req.body

    if (!Array.isArray(items)) {
      return res.status(400).json({ message: "Invalid request body" })
    }

    cartStore.set(userId, items)

    // Instead of clearing the cache, we'll just wait for it to expire
    // The next GET request will fetch the updated data

    res.status(200).json({ items })
  }
}