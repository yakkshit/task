import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "@/lib/db"
import type { Order } from "@/lib/db"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  try {
    const orderData: Omit<Order, "id"> = req.body
    const newOrder = await db.createOrder(orderData)
    res.status(201).json(newOrder)
  } catch (error) {
    console.error("Error creating order:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}