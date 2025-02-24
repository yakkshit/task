// This file manages the cart-related state for the application using Redux Toolkit.
// It defines the structure of cart items and state, and includes async thunks for interacting
// with the backend API to add, fetch, remove, and update cart items. The Redux slice defined here
// handles the corresponding actions and state transitions.

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { RootState } from "../store"

// Interface representing a single item in the cart
interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
  color: string
  size: string
}

// Interface representing the cart state
interface CartState {
  items: CartItem[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

// Initial state of the cart
const initialState: CartState = {
  items: [],
  status: "idle",
  error: null,
}

// Authentication key for API requests
const AUTH_KEY = process.env.API_AUTH_KEY || "qwerty123"

// Async thunk to add an item to the cart by calling the backend API
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

// Async thunk to fetch the current cart from the backend API
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

// Async thunk to remove an item from the cart with the specified id, color, and size
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

// Async thunk to update the quantity of a cart item for a specified id, color, and size
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

// Redux slice to manage cart state and actions
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Reducer to clear all items from the cart
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

// Export the clearCart action for dispatching from components
export const { clearCart } = cartSlice.actions

// Selector to get all cart items from the state
export const selectCart = (state: RootState) => state.cart.items

// Selector to get the total price of the items in the cart
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)

// Export the reducer to be included in the store
export default cartSlice.reducer