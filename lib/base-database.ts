export interface User {
    id: string
    email: string
    password: string
    name: string
    address?: string
    city?: string
    state?: string
    zipCode?: string
  }
  
  export interface OrderItem {
    id: number
    title: string
    price: number
    quantity: number
    image: string
    color: string
    size: string
  }
  
  export type OrderStatus = "Delivered" | "Paid" | "Unpaid" | "Cancelled"
  
  export interface Order {
    id: string
    userId: string
    date: string
    total: number
    status: OrderStatus
    items: OrderItem[]
    customer: {
      email: string
      name: string
      address: string
      city: string
      state: string
      zipCode: string
    }
  }
  
  export interface DatabaseData {
    users: User[]
    orders: Order[]
  }
  
  export abstract class BaseDatabase {
    protected data: DatabaseData = { users: [], orders: [] }
  
    abstract loadData(): Promise<void>
    abstract saveData(): Promise<void>
  
    async createUser(user: Omit<User, "id">): Promise<User> {
      const newUser = {
        ...user,
        id: `U${Math.random().toString().slice(2, 10)}`,
      }
      this.data.users.push(newUser)
      await this.saveData()
      return newUser
    }
  
    async getUsers(): Promise<User[]> {
      return this.data.users
    }
  
    async getUserByEmail(email: string): Promise<User | undefined> {
      return this.data.users.find((user) => user.email === email)
    }
  
    async createOrder(order: Omit<Order, "id">): Promise<Order> {
      const newOrder = {
        ...order,
        id: `O${Math.random().toString().slice(2, 10)}`,
      }
      this.data.orders.push(newOrder)
      await this.saveData()
      return newOrder
    }
  
    async getOrders(): Promise<Order[]> {
      return this.data.orders
    }
  
    async getOrdersByUserId(userId: string): Promise<Order[]> {
      return this.data.orders.filter((order) => order.userId === userId)
    }
  
    async getOrder(id: string): Promise<Order | undefined> {
      return this.data.orders.find((order) => order.id === id)
    }
  
    async updateUser(userId: string, data: Partial<User>): Promise<User | undefined> {
      const userIndex = this.data.users.findIndex((u) => u.id === userId)
      if (userIndex !== -1) {
        this.data.users[userIndex] = { ...this.data.users[userIndex], ...data }
        await this.saveData()
        return this.data.users[userIndex]
      }
      return undefined
    }
  }  