import { configureStore } from "@reduxjs/toolkit"
import { api } from "./services/api"
import { orderApi } from "./services/orderApi"
import cartReducer from "./features/cartSlice"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware, orderApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch