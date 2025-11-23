import ClientBlogPage from "@/components/blog-page/ClientBlogPage";

export default async function Page({ params }) {
  const { blogId } = await params;
  return <ClientBlogPage blogId={blogId} />;
}
