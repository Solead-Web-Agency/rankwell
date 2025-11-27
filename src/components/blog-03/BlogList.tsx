'use client';

import { IBlogPost } from '@/interface';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCard from './BlogCard';
import Categories from './Categories';
import Heading from './Heading';
import PastRecords from './PastRecords';
import RecentBlogs from './RecentBlogs';
import SearchBar from './SearchBar';

interface BlogListProps {
  blogs: IBlogPost[];
}

const BlogList = ({ blogs: allBlogs }: BlogListProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State management - initialize from URL params
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');

  const [selectedMonth, setSelectedMonth] = useState(searchParams.get('month') || 'all');
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1'));

  const blogsPerPage = 6;

  // Update URL when filters change
  const updateURL = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === 'all' || value === '') {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    // Reset to page 1 when filters change
    if (
      updates.search !== undefined ||
      updates.category !== undefined ||
      updates.tag !== undefined ||
      updates.month !== undefined
    ) {
      params.delete('page');
    }

    const newURL = params.toString() ? `?${params.toString()}` : '';

    // Use window.history.replaceState for more reliable URL updates
    const fullURL = window.location.pathname + (newURL ? newURL : '');
    window.history.replaceState({}, '', fullURL);

    // Also update the router state
    router.replace(newURL, { scroll: false });
  };

  // Get unique categories, tags, and months from blogs
  const categories = useMemo(() => {
    const cats = [...new Set(allBlogs.map((blog) => blog.tag.toLocaleLowerCase()))];
    return cats.map((cat) => ({ name: cat, count: allBlogs.filter((blog) => blog.tag === cat).length }));
  }, [allBlogs]);

  const months = useMemo(() => {
    const monthMap = new Map();
    allBlogs.forEach((blog) => {
      const date = new Date(blog.publishDate);
      const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      monthMap.set(monthYear, (monthMap.get(monthYear) || 0) + 1);
    });
    return Array.from(monthMap.entries()).map(([month, count]) => ({ name: month, count }));
  }, [allBlogs]);

  // Filter blogs based on search and filters
  const filteredBlogs = useMemo(() => {
    return allBlogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tag.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || blog.tag === selectedCategory;
      const matchesMonth =
        selectedMonth === 'all' ||
        new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) === selectedMonth;

      return matchesSearch && matchesCategory && matchesMonth;
    });
  }, [allBlogs, searchQuery, selectedCategory, selectedMonth]);

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = filteredBlogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  // Get recent blogs for sidebar
  const recentBlogs = useMemo(() => {
    return allBlogs.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0, 3);
  }, [allBlogs]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedMonth]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateURL({ page: page.toString() });
    window.scrollTo({ top: 210, behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    updateURL({ search: query });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateURL({ category });
  };

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    updateURL({ month });
  };

  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container">
        <Heading />

        {/* Blog List */}
        <div className="grid grid-cols-12 max-md:gap-y-20 md:gap-5 lg:gap-16">
          {/* Main Blog Content */}
          <div className="max-md:col-span-full max-lg:col-span-7 lg:col-span-8 max-md:order-2 max-w-[793px] space-y-14 md:space-y-[70px]">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog, index) => (
                <RevealAnimation key={blog.slug} delay={0.1 + index * 0.1}>
                  <div>
                    <BlogCard blog={blog} />
                  </div>
                </RevealAnimation>
              ))
            ) : (
              <div className="text-center py-20">
                <h3 className="text-heading-4 mb-4">No blogs found</h3>
                <p className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>

          {/* Blog List Sidebar */}
          <div className="max-md:col-span-full max-lg:col-span-5 lg:col-span-4 max-md:order-1  bg-background-2 dark:bg-background-6 rounded-[20px] shadow-1 self-start space-y-[52px] max-w-full md:max-w-[410px] px-8 py-[44px]">
            <SearchBar onSearch={handleSearch} />

            <Categories
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />

            <RecentBlogs blogs={recentBlogs} />

            <PastRecords months={months} selectedMonth={selectedMonth} onMonthChange={handleMonthChange} />
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <RevealAnimation delay={0.2}>
            <ul className="flex items-center justify-center mt-14 gap-2">
              <li className="group">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex w-10 h-10 items-center justify-center border border-stroke-3 dark:border-stroke-7 rounded-full hover:bg-primary-500 duration-300 group disabled:opacity-50 disabled:cursor-not-allowed">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                      <path
                        d="M12.5 6H1.5M1.5 6L6 1.5M1.5 6L6 10.5"
                        className="stroke-secondary dark:stroke-accent group-hover:stroke-white duration-300"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li key={page} className="group">
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`flex w-10 h-10 items-center text-tagline-2 font-medium justify-center rounded-full dark:text-accent hover:bg-primary-500 duration-300 hover:text-accent ${
                      currentPage === page ? 'bg-primary-500 text-accent' : ''
                    }`}>
                    {page}
                  </button>
                </li>
              ))}

              <li className="group">
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex w-10 h-10 items-center justify-center border border-stroke-3 dark:border-stroke-7 rounded-full hover:bg-primary-500 duration-300 group disabled:opacity-50 disabled:cursor-not-allowed">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                      <path
                        d="M1.5 6H12.5M12.5 6L8 1.5M12.5 6L8 10.5"
                        className="stroke-secondary dark:stroke-accent group-hover:stroke-white duration-300"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
};

export default BlogList;
