'use client';

import { IBlogPost } from '@/interface';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import Pagination from '../shared/Pagination';
import { BlogCard } from './BlogCard';

interface paginationWrapperProps {
  blogs: IBlogPost[];
}

const PaginationWrapper = ({ blogs }: paginationWrapperProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  // Calculate pagination
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs?.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 1620, behavior: 'smooth' });
  };

  return (
    <>
      {/* Blog grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-[70px]">
        {currentBlogs?.map((blog, index) => (
          <RevealAnimation key={blog?.slug} delay={0.3 + index * 0.1}>
            <div>
              <BlogCard blog={blog} />
            </div>
          </RevealAnimation>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-14">
          <RevealAnimation delay={0.6}>
            <div>
              <Pagination
                totalItems={blogs.length}
                itemsPerPage={blogsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                className="mt-14"
              />
            </div>
          </RevealAnimation>
        </div>
      )}
    </>
  );
};

PaginationWrapper.displayName = 'PaginationWrapper';
export default PaginationWrapper;
