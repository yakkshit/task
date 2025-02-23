"use client"

import { Typography, Collapse } from "antd"

const { Title, Paragraph } = Typography
const { Panel } = Collapse

export default function FAQPage() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on your location and chosen shipping method. Standard shipping typically takes 3-5 business days, while express shipping takes 2-3 business days.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Please visit our Returns & Exchanges page for more detailed information.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to select countries internationally. Additional fees and longer shipping times may apply.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you will receive a shipping confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's website.",
    },
    {
      question: "Are my payment details secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect your payment information.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "You can change or cancel your order within 1 hour of placing it. After that, please contact our customer service team, and we'll do our best to accommodate your request.",
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, we offer gift wrapping for a small additional fee. You can select this option during checkout.",
    },
    {
      question: "What if my item arrives damaged?",
      answer:
        "If your item arrives damaged, please contact our customer service team immediately. We'll arrange for a replacement or refund.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Title level={2}>Frequently Asked Questions</Title>
      <Paragraph>
        Find answers to our most commonly asked questions below. If you can't find the answer you're looking for, please
        don't hesitate to contact us.
      </Paragraph>

      <Collapse className="mt-8">
        {faqs.map((faq, index) => (
          <Panel header={faq.question} key={index}>
            <Paragraph>{faq.answer}</Paragraph>
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}

