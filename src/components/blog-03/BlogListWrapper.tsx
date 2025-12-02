import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import { Suspense } from 'react';
import BlogList from './BlogList';

const BlogListWrapper = () => {
  // Fetch all blogs from markdown files (server-side)
  const allBlogs: IBlogPost[] = getMarkDownData('src/data/blogs');

  return (
    <Suspense fallback={<div className="min-h-[400px]" />}>
      <BlogList blogs={allBlogs} />
    </Suspense>
  );
};

export default BlogListWrapper;
