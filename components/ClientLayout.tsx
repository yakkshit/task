"use client"

import type React from "react"
import { ConfigProvider, Layout as AntLayout } from "antd"
import { Provider } from "react-redux"
import { store } from "@/lib/store"
import Footer from "@/components/footer"
import { Notification } from "./Notification"
import { AuthProvider } from "@/lib/auth-context"
import Navbar from "./layout/navbar"
import "@/lib/styles/globals.css"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ConfigProvider>
          <Notification />
          <AntLayout>
            <Navbar />
            <AntLayout.Content>{children}</AntLayout.Content>
            <Footer />
          </AntLayout>
        </ConfigProvider>
      </AuthProvider>
    </Provider>
  )
}