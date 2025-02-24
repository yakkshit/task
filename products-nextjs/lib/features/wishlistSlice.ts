import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import type { Product } from "../types"

interface WishlistState {
  items: Product[]
}

const initialState: WishlistState = {
  items: [],
}

/**
 * Manages a list of products the user wishes to save, using Redux Toolkit for state management.
 * Provides actions to add unique products to the wishlist and remove them by id.
 */
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload)
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions

export const selectWishlist = (state: RootState) => state.wishlist.items

export default wishlistSlice.reducer