'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    onSearch(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Search articles"
      className="flex items-center justify-start gap-3 relative">
      <input
        type="search"
        name="search"
        id="searchArticles"
        placeholder="Search articles"
        value={searchQuery}
        onChange={handleInputChange}
        aria-label="Search articles"
        className="px-[18px] h-11 py-3 placeholder:text-secondary/60 rounded-[360px] focus:outline-1 focus:outline-primary-500 font-normal border placeholder:font-normal border-stroke-3 dark:border-stroke-7 dark:placeholder:text-accent/60 bg-background-1 dark:bg-background-6 shadow-1 max-md:max-w-full w-full dark:text-accent"
      />
      <button
        type="submit"
        aria-label="Submit search"
        className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path
            d="M11.3404 18.6798C15.6446 18.6798 19.1339 15.1905 19.1339 10.8863C19.1339 6.58205 15.6446 3.09277 11.3404 3.09277C7.03615 3.09277 3.54688 6.58205 3.54688 10.8863C3.54688 15.1905 7.03615 18.6798 11.3404 18.6798Z"
            className="stroke-secondary dark:stroke-accent"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.8516 16.3975L21.3607 20.9066"
            className="stroke-secondary dark:stroke-accent"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
