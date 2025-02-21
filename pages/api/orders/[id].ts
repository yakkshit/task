import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "@/lib/db"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const { id } = req.query

  if (typeof id !== "string") {
    return res.status(400).json({ message: "Invalid order ID" })
  }

  try {
    const order = await db.getOrder(id)
    if (order) {
      res.status(200).json(order)
    } else {
      res.status(404).json({ message: "Order not found" })
    }
  } catch (error) {
    console.error("Error fetching order:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}