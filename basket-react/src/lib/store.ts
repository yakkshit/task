import { configureStore } from "@reduxjs/toolkit"
import { api } from "./api"

/**
 * @file This file sets up the Redux store configuration for the application.
 * @file It integrates the API reducer and middleware into the store.
 *
 * Configures the store by combining the default middleware with the API middleware.
 * This setup supports enhanced API state management and side effects handling.
 */
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch