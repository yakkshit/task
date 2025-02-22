import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
  color: string
  size: string
}

interface CartState {
  items: CartItem[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: CartState = {
  items: [],
  status: "idle",
  error: null,
}

const AUTH_KEY = process.env.API_AUTH_KEY || "qwerty123"

export const addToCart = createAsyncThunk("cart/addToCart", async (item: CartItem) => {
  const response = await fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH_KEY,
    },
    body: JSON.stringify({ item }),
  })
  if (!response.ok) {
    throw new Error("Failed to add item to cart")
  }
  return response.json()
})

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await fetch("/api/cart", {
    headers: {
      Authorization: AUTH_KEY,
    },
  })
  if (!response.ok) {
    throw new Error("Failed to fetch cart")
  }
  return response.json()
})

export const removeFromCartAsync = createAsyncThunk(
  "cart/removeFromCart",
  async ({ id, color, size }: { id: number; color: string; size: string }) => {
    const response = await fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_KEY,
      },
      body: JSON.stringify({ id, color, size }),
    })
    if (!response.ok) {
      throw new Error("Failed to remove item from cart")
    }
    return response.json()
  },
)

export const updateQuantityAsync = createAsyncThunk(
  "cart/updateQuantity",
  async ({ id, color, size, quantity }: { id: number; color: string; size: string; quantity: number }) => {
    const response = await fetch("/api/cart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_KEY,
      },
      body: JSON.stringify({ id, color, size, quantity }),
    })
    if (!response.ok) {
      throw new Error("Failed to update item quantity")
    }
    return response.json()
  },
)

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = "loading"
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.items = action.payload.items
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Failed to add item to cart"
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload.items
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.items = action.payload.items
      })
      .addCase(updateQuantityAsync.fulfilled, (state, action) => {
        state.items = action.payload.items
      })
  },
})

export const { clearCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.items
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)

export default cartSlice.reducer