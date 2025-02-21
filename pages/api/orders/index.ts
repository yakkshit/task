import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "@/lib/db"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const { userId } = req.query

  if (typeof userId !== "string") {
    return res.status(400).json({ message: "Invalid user ID" })
  }

  try {
    const orders = await db.getOrdersByUserId(userId)
    res.status(200).json(orders)
  } catch (error) {
    console.error("Error fetching orders:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}