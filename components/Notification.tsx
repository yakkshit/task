"use client"

import { notification } from "antd"
import type { NotificationInstance } from "antd/es/notification/interface"

let notificationApi: NotificationInstance

export const Notification = () => {
  const [api, contextHolder] = notification.useNotification()
  notificationApi = api
  return contextHolder
}

export const showNotification = (type: "success" | "error" | "info" | "warning", message: string) => {
  notificationApi?.[type]({
    message,
    placement: "top",
  })
}