import { configureStore } from "@reduxjs/toolkit"
import { api } from "./services/api"
import cartReducer from "./features/cartSlice"
import wishlistReducer from "./features/wishlistSlice"

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