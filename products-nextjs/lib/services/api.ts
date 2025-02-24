import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Product } from "../types"

/**
 * @file services/api.ts
 *
 * @description
 * This module defines and exports an API slice for interacting with the Fake Store API using
 * RTK Query's createApi function. It serves as the main entry point for API calls related to products,
 * the shopping cart, and orders.
 *
 * @remarks
 * The API slice:
 * - Sets the base URL to "https://fakestoreapi.com".
 * - Defines endpoints to retrieve all products, a single product by ID, and products filtered by a
 *   specific category.
 * - Uses tagTypes ("Products", "Cart", "Orders") to facilitate cache invalidation and provide efficient
 *   state management.
 *
 * @example
 * // Usage example:
 * // const { data: products } = useGetProductsQuery();
 *
 * This file is a crucial part of the Next.js project, demonstrating how RTK Query is integrated within
 * a Redux-based architecture to handle asynchronous API calls.
 */
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  tagTypes: ["Products", "Cart", "Orders"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
      providesTags: ["Products"],
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `products/category/${category}`,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductQuery, useGetProductsByCategoryQuery } = api

