import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "https://yakkshit.github.io/task/api",
    prepareHeaders: (headers) => {
      headers.set("Authorization", import.meta.env.VITE_API_KEY || "qwerty123")
      headers.set("Content-Type", "application/json")
      return headers
    },
  }),
  endpoints: (builder) => ({
    getOrders: builder.query<any[], void>({
      query: () => "orders",
    }),
    getCart: builder.query<{ items: any[] }, void>({
      query: () => "cart",
      async onCacheEntryAdded(_arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        const ws = new WebSocket("ws://localhost:3001/ws/cart")

        try {
          await cacheDataLoaded

          ws.onmessage = (event) => {
            const updatedCart = JSON.parse(event.data)
            updateCachedData((draft) => {
              draft.items = updatedCart.items
            })
          }
        } catch (error) {
          console.error("WebSocket error:", error)
        }

        await cacheEntryRemoved
        ws.close()
      },
    }),
  }),
})

export const { useGetOrdersQuery, useGetCartQuery } = api