import use from 'react' // import this line

import ProductPageContent from "@/components/ProductPageContent"

// Async/await solution
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <ProductPageContent id={id} />
}

// Alternatively, using the `use` hook (uncomment to use this approach)
// export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params)
//   return <ProductPageContent id={id} />
// }