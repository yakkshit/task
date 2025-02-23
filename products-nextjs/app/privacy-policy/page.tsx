"use client"

import { Typography } from "antd"

const { Title, Paragraph } = Typography

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Title level={2}>Privacy Policy</Title>
      <Paragraph>Last updated: [Current Date]</Paragraph>

      <Title level={4}>1. Introduction</Title>
      <Paragraph>
        Welcome to [Your E-commerce Store Name] ("we," "our," or "us"). We are committed to protecting your personal
        information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you visit our website [Your Website URL] and use our services.
      </Paragraph>

      <Title level={4}>2. Information We Collect</Title>
      <Paragraph>
        We collect personal information that you provide to us, such as your name, email address, postal address, phone
        number, and payment information when you register for an account, place an order, or communicate with us.
      </Paragraph>

      <Title level={4}>3. How We Use Your Information</Title>
      <Paragraph>
        We use your information to provide and improve our services, process your orders, communicate with you, and
        comply with legal obligations. We may also use your information for marketing purposes, but you can opt out at
        any time.
      </Paragraph>

      <Title level={4}>4. How We Share Your Information</Title>
      <Paragraph>
        We may share your information with service providers, business partners, and affiliates to help us operate our
        business and provide our services. We may also share information to comply with legal obligations or protect our
        rights.
      </Paragraph>

      <Title level={4}>5. Your Rights</Title>
      <Paragraph>
        Depending on your location, you may have certain rights regarding your personal information, such as the right
        to access, correct, or delete your data. Please contact us to exercise these rights.
      </Paragraph>

      <Title level={4}>6. Security</Title>
      <Paragraph>
        We implement appropriate technical and organizational measures to protect your personal information. However, no
        method of transmission over the Internet or electronic storage is 100% secure.
      </Paragraph>

      <Title level={4}>7. Changes to This Privacy Policy</Title>
      <Paragraph>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy
        Policy on this page and updating the "Last updated" date.
      </Paragraph>

      <Title level={4}>8. Contact Us</Title>
      <Paragraph>
        If you have any questions about this Privacy Policy, please contact us at [Your Contact Email].
      </Paragraph>
    </div>
  )
}

