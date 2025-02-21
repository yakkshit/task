import type { NextApiRequest, NextApiResponse } from "next"
import { db } from "@/lib/db"
import type { DatabaseData } from "@/lib/base-database"

const AUTH_KEY = process.env.API_AUTH_KEY || "qwerty123"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const authKey = req.headers["x-auth-key"]

  if (authKey !== AUTH_KEY) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  try {
    await db.loadData() // Ensure data is loaded before accessing it
    const data: DatabaseData = {
      users: await db.getUsers(),
      orders: await db.getOrders(),
    }
    res.status(200).json(data)
  } catch (error) {
    console.error("Error reading data:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}