"use client"

import type React from "react"

import { ConfigProvider } from "antd"
import { Provider } from "react-redux"
import { store } from "@/store/store"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Geist, Geist_Mono } from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
          <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#1677ff",
              borderRadius: 6,
            },
          }}
          >
            <Header />
            {children}
            <Footer />
            </ConfigProvider>
        </Provider>
      </body>
    </html>
  )
}