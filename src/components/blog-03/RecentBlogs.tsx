'use client';

import { IBlogPost } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';

interface RecentBlogsProps {
  blogs: IBlogPost[];
}

const RecentBlogs = ({ blogs }: RecentBlogsProps) => {
  return (
    <div>
      <h3 className="text-heading-5">Recent articles</h3>
      <div className="space-y-5 mt-6">
        {blogs.map((blog) => (
          <div key={blog.slug} className="flex items-center gap-4">
            <figure className="w-[102px]  h-[77px] overflow-hidden rounded-[5px] flex-shrink-0 ">
              <Image src={blog.thumbnail} alt={blog.title} className="size-full object-cover" width={102} height={77} />
            </figure>
            <div className="space-y-1 flex-1">
              <h4 className="text-tagline-1 line-clamp-2">
                <Link href={`/blog/${blog.slug}`} className="hover:text-primary-500 transition-colors duration-300">
                  {blog.title}
                </Link>
              </h4>
              <p className="text-tagline-3">{blog.publishDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
