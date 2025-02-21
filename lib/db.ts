import { BaseDatabase, type User, type Order } from "./base-database"
import { browserDb } from "./browser-db"

class ServerDatabase extends BaseDatabase {
  private filePath: string

  constructor() {
    super()
    this.filePath = ""
    this.loadData() // Load data when the database is instantiated
  }

  async loadData(): Promise<void> {
    if (typeof window === "undefined") {
      const fs = await import("fs/promises")
      const path = await import("path")
      this.filePath = path.join(process.cwd(), "data", "db.json")
      try {
        const fileContent = await fs.readFile(this.filePath, "utf-8")
        this.data = JSON.parse(fileContent)
      } catch (error) {
        console.error("Error loading data:", error)
        // If file doesn't exist, initialize with empty data
        this.data = { users: [], orders: [] }
      }
    }
  }

  async saveData(): Promise<void> {
    if (typeof window === "undefined") {
      const fs = await import("fs/promises")
      const path = await import("path")
      try {
        await fs.mkdir(path.dirname(this.filePath), { recursive: true })
        await fs.writeFile(this.filePath, JSON.stringify(this.data, null, 2))
      } catch (error) {
        console.error("Error saving data:", error)
      }
    }
  }

  // Override methods to ensure data is loaded before access
  async getUsers(): Promise<User[]> {
    await this.loadData()
    return super.getUsers()
  }

  async getOrders(): Promise<Order[]> {
    await this.loadData()
    return super.getOrders()
  }

  async getOrdersByUserId(userId: string): Promise<Order[]> {
    await this.loadData()
    return super.getOrdersByUserId(userId)
  }

  async getOrder(id: string): Promise<Order | undefined> {
    await this.loadData()
    return super.getOrder(id)
  }

}

function getDatabase(): BaseDatabase {
  if (typeof window === "undefined") {
    return new ServerDatabase()
  } else {
    return browserDb
  }
}

export const db = getDatabase()

export type { User, Order, OrderItem, OrderStatus, DatabaseData } from "./base-database"
