'use client';

import { cn } from '@/utils/cn';
import { useMemo } from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange, className = '' }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate page numbers to display
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 7; // Show max 7 page numbers

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page, last page, and pages around current
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  }, [totalPages, currentPage]);

  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ul className={cn('flex items-center justify-center gap-2', className)}>
      {/* Previous button */}
      <li className="group">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="flex w-10 h-10 items-center justify-center border border-stroke-3 cursor-pointer dark:border-stroke-7 rounded-full hover:bg-primary-500 duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={12} viewBox="0 0 14 12" fill="none">
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

      {/* Page numbers */}
      {pageNumbers.map((page, index) => (
        <li key={index} className="group">
          {page === '...' ? (
            <span className="flex w-10 h-10 items-center justify-center text-tagline-2 font-medium text-secondary/60 dark:text-accent/60">
              ...
            </span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={`flex w-10 h-10 items-center text-tagline-2 font-medium justify-center rounded-full transition-all duration-300 ${
                currentPage === page
                  ? 'bg-primary-500 text-accent'
                  : 'text-tagline-2 dark:text-accent hover:bg-primary-500 hover:text-accent cursor-pointer'
              }`}>
              {page}
            </button>
          )}
        </li>
      ))}

      {/* Next button */}
      <li className="group">
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="flex w-10 h-10 items-center justify-center border border-stroke-3 cursor-pointer dark:border-stroke-7 rounded-full hover:bg-primary-500 duration-300  disabled:cursor-not-allowed disabled:hover:bg-transparent">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={12} viewBox="0 0 14 12" fill="none">
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
  );
};

Pagination.displayName = 'Pagination';
export default Pagination;
