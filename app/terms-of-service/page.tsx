"use client"

import { Typography } from "antd"

const { Title, Paragraph } = Typography

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Title level={2}>Terms of Service</Title>
      <Paragraph>Last updated: [Current Date]</Paragraph>

      <Title level={4}>1. Acceptance of Terms</Title>
      <Paragraph>
        By accessing and using [Your E-commerce Store Name] ("we," "our," or "us"), you agree to comply with and be
        bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
      </Paragraph>

      <Title level={4}>2. Use of the Website</Title>
      <Paragraph>
        You agree to use our website for lawful purposes only and in a way that does not infringe upon the rights of
        others or restrict their use and enjoyment of the website.
      </Paragraph>

      <Title level={4}>3. Account Registration</Title>
      <Paragraph>
        To access certain features of our website, you may be required to create an account. You are responsible for
        maintaining the confidentiality of your account information and for all activities that occur under your
        account.
      </Paragraph>

      <Title level={4}>4. Product Information and Pricing</Title>
      <Paragraph>
        We strive to provide accurate product information and pricing. However, we reserve the right to correct any
        errors and to change or update information at any time without prior notice.
      </Paragraph>

      <Title level={4}>5. Orders and Payments</Title>
      <Paragraph>
        By placing an order, you are making an offer to purchase. We reserve the right to accept or decline your offer.
        Payment is due at the time of order placement.
      </Paragraph>

      <Title level={4}>6. Shipping and Delivery</Title>
      <Paragraph>
        Shipping times and costs may vary depending on the delivery location and method chosen. We are not responsible
        for delays caused by customs or other factors outside our control.
      </Paragraph>

      <Title level={4}>7. Returns and Refunds</Title>
      <Paragraph>
        Please refer to our Returns & Exchanges policy for information on returns, exchanges, and refunds.
      </Paragraph>

      <Title level={4}>8. Intellectual Property</Title>
      <Paragraph>
        All content on this website, including text, graphics, logos, and images, is the property of [Your E-commerce
        Store Name] and is protected by copyright laws. You may not use, reproduce, or distribute our content without
        our express written permission.
      </Paragraph>

      <Title level={4}>9. Limitation of Liability</Title>
      <Paragraph>
        We are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use
        of our website or services.
      </Paragraph>

      <Title level={4}>10. Governing Law</Title>
      <Paragraph>
        These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction],
        without regard to its conflict of law provisions.
      </Paragraph>

      <Title level={4}>11. Changes to Terms</Title>
      <Paragraph>
        We reserve the right to modify these Terms of Service at any time. We will notify users of any significant
        changes by posting a notice on our website.
      </Paragraph>

      <Title level={4}>12. Contact Us</Title>
      <Paragraph>
        If you have any questions about these Terms of Service, please contact us at [Your Contact Email].
      </Paragraph>
    </div>
  )
}

