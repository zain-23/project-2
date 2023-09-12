"use client";

import BlogDetail from "@/components/public-pages/blog/blog-detail/blogDetail";

const BlogPage = ({ params }) => {
  const id = params.blogid;
  return <BlogDetail id={id} />;
};

export default BlogPage;
