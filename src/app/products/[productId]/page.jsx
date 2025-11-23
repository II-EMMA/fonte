import ProductPageClient from "@/components/products/ProductPageClient";

export default async function Page({ params }) {
  const { productId } = await params; // ✅ unwrap params promise
  return <ProductPageClient productId={productId} />;
}
