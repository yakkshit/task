import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

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
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size,
      )
      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number; color: string; size: string }>) => {
      state.items = state.items.filter(
        (item) =>
          !(item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size),
      )
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; color: string; size: string; quantity: number }>) => {
      const item = state.items.find(
        (item) =>
          item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size,
      )
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { setCart, addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer