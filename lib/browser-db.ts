import { BaseDatabase } from "./base-database"

export class BrowserDatabase extends BaseDatabase {
  constructor() {
    super()
    this.loadData()
  }

  async loadData(): Promise<void> {
    const storedData = localStorage.getItem("db")
    if (storedData) {
      this.data = JSON.parse(storedData)
    }
  }

  async saveData(): Promise<void> {
    localStorage.setItem("db", JSON.stringify(this.data))
  }
}

export const browserDb = new BrowserDatabase()