import { createRoot } from 'react-dom/client'
import React from "react"
import { Provider } from "react-redux"
import { ConfigProvider } from "antd"
import { store } from "./lib/store"
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1677ff",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
)
