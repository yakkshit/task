import { configureStore } from "@reduxjs/toolkit"
import { api } from "./services/api"
import cartReducer from "./features/cartSlice"
import wishlistReducer from "./features/wishlistSlice"

/**
 * Configures and exports the Redux store for the Next.js application.
 * Integrates API, cart, and wishlist reducers along with custom middleware.
 *
 * @module store
 * @remarks
 * This file sets up the main Redux store used across the project.
 * It centralizes state management by combining reducers and middleware.
 */
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch