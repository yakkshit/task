import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Order } from "@/lib/db"

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    createOrder: builder.mutation<Order, Omit<Order, "id">>({
      query: (order) => ({
        url: "/orders/create",
        method: "POST",
        body: order,
      }),
    }),
    getOrder: builder.query<Order, string>({
      query: (orderId) => `/orders/${orderId}`,
    }),
  }),
})

export const { useCreateOrderMutation, useGetOrderQuery } = orderApi