import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import BlogList from './BlogList';

const BlogListWrapper = () => {
  // Fetch all blogs from markdown files (server-side)
  const allBlogs: IBlogPost[] = getMarkDownData('src/data/blogs');

  return <BlogList blogs={allBlogs} />;
};

export default BlogListWrapper;
