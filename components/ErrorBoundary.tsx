import React, { type ErrorInfo, type ReactNode } from "react"
import { Button, Result } from "antd"

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="error"
          title="Something went wrong"
          subTitle="Sorry, an unexpected error has occurred."
          extra={[
            <Button type="primary" key="console" onClick={() => window.location.reload()}>
              Reload Page
            </Button>,
          ]}
        />
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

