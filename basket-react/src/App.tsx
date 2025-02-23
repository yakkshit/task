import { Layout, Typography, Tabs } from "antd"
import OrderHistory from "./components/OrderHistory/OrderHistory"
import CartSummary from "./components/CartSummary/CartSummary"
import './App.css'

const { Content } = Layout
const { Title, Paragraph } = Typography

function App() {
  const items = [
    {
      key: "1",
      label: "Order History",
      children: <OrderHistory />,
    },
    {
      key: "2",
      label: "Cart",
      children: <CartSummary />,
    },
  ]


  return (
    <Layout className="app-layout">
      <Content className="app-content">
        <div className="dashboard-container">
          <Title level={2} className="dashboard-title">
            Order History
          </Title>
          <Paragraph className="dashboard-description">
            Keep tabs on the status of your latest orders, effortlessly handle returns, and easily download invoices
            with just a few clicks.
          </Paragraph>
          <Tabs defaultActiveKey="1" items={items} className="dashboard-tabs" />
        </div>
      </Content>
    </Layout>
  )
}

export default App
