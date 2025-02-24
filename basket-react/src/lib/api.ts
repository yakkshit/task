import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "https://task-psi-ochre-97.vercel.app/api/api",
    mode: "cors",
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
        let eventSource: EventSource | null = null
        let ws: WebSocket | null = null

        // Wait until the cache is ready
        await cacheDataLoaded

        // Try using Server-Sent Events (SSE)
        try {
          eventSource = new EventSource("http://localhost:3002/sse/cart")

          eventSource.onmessage = (event) => {
            const updatedCart = JSON.parse(event.data)
            console.log("SSE received updated cart:", updatedCart)
            updateCachedData((draft) => {
              draft.items = updatedCart.items
            })
          }

          eventSource.onerror = () => {
            console.error("SSE connection error; falling back to WebSocket.")
            eventSource?.close()

            // Fallback to WebSocket if SSE fails
            ws = new WebSocket("ws://localhost:3006/ws/cart")
            ws.onmessage = (event) => {
              const updatedCart = JSON.parse(event.data)
              console.log("WebSocket received updated cart:", updatedCart)
              updateCachedData((draft) => {
                draft.items = updatedCart.items
              })
            }
          }
        } catch (error) {
          console.error("Error initializing SSE:", error)
          // On error initialize WebSocket fallback immediately
          ws = new WebSocket("ws://localhost:3002/ws/cart")
          ws.onmessage = (event) => {
            const updatedCart = JSON.parse(event.data)
            console.log("WebSocket received updated cart:", updatedCart)
            updateCachedData((draft) => {
              draft.items = updatedCart.items
            })
          }
        }

        // Clean up connections when the cache subscription is removed
        await cacheEntryRemoved
        eventSource?.close()
        ws?.close()
      },
    }),
  }),
})

export const { useGetOrdersQuery, useGetCartQuery } = api