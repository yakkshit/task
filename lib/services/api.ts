import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Product {
  id: number
  title: string
  price: number
  category: string
  image: string
  description: string
}

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
  color: string
  size: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-Auth-Key", process.env.NEXT_PUBLIC_API_AUTH_KEY || "")
      return headers
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `/products`,
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `/products/category/${category}`,
    }),
    getCart: builder.query<CartItem[], void>({
      query: () => "/cart",
    }),
    updateCart: builder.mutation<CartItem[], CartItem[]>({
      query: (items) => ({
        url: "/cart",
        method: "POST",
        body: { items },
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetCartQuery,
  useUpdateCartMutation,
} = api