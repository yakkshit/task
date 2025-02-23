import { List, Avatar, Typography, Empty } from "antd"
import { useGetCartQuery } from "../../lib/api"
import "./CartSummary.css"

const { Text } = Typography

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
  color: string
  size: string
}

function CartSummary() {
  const { data: cart, isLoading } = useGetCartQuery()

  const calculateTotal = (items: CartItem[] = []) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  if (!cart?.items?.length && !isLoading) {
    return <Empty description="Your cart is empty" className="empty-cart" />
  }

  return (
    <div className="cart-summary">
      <List
        loading={isLoading}
        itemLayout="horizontal"
        dataSource={cart?.items || []}
        renderItem={(item: CartItem) => (
          <List.Item className="cart-item">
            <List.Item.Meta
              avatar={<Avatar src={item.image} shape="square" size={64} />}
              title={<Text className="item-title">{item.title}</Text>}
              description={
                <div className="item-details">
                  <Text type="secondary" className="item-variant">
                    {item.color} • Size {item.size}
                  </Text>
                  <div className="item-price">
                    <Text strong>${item.price.toFixed(2)}</Text>
                    <Text type="secondary"> × {item.quantity}</Text>
                  </div>
                </div>
              }
            />
            <div className="item-total">
              <Text strong>${(item.price * item.quantity).toFixed(2)}</Text>
            </div>
          </List.Item>
        )}
        footer={
          <div className="cart-footer">
            <Text type="secondary">Total</Text>
            <Text strong className="cart-total">
              ${calculateTotal(cart?.items).toFixed(2)}
            </Text>
          </div>
        }
      />
    </div>
  )
}

export default CartSummary