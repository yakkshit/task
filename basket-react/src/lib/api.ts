import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "https://task-psi-ochre-97.vercel.app/api",
    mode: "cors",
    prepareHeaders: (headers) => {
      headers.set("Authorization", import.meta.env.VITE_API_KEY || "qwerty123");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOrders: builder.query<any[], void>({
      query: () => "orders",
    }),
    getCart: builder.query<{ items: any[] }, void>({
      query: () => "cart",
      async onCacheEntryAdded(_arg, { cacheDataLoaded, cacheEntryRemoved, updateCachedData }) {
        const eventSource2 = new EventSource("http://localhost:3002/events/cart");

        try {
          await cacheDataLoaded;

          const handleMessage = (event: MessageEvent) => {
            const updatedCart = JSON.parse(event.data);
            updateCachedData((draft) => {
              draft.items = updatedCart.items;
            });
          };

          eventSource2.onmessage = handleMessage;
        } catch (error) {
          console.error("SSE error:", error);
        }

        await cacheEntryRemoved;
        eventSource2.close();
      },
    }),
  }),
});

export const { useGetOrdersQuery, useGetCartQuery } = api;
