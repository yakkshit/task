import { Result, Button } from "antd"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link href="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </div>
  )
}

