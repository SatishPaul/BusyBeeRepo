'use client';

import { useState, useCallback } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search assets...',
  onSearch,
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(value);
    }
  }, [value, onSearch]);

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div
        className={`relative flex items-center bg-white rounded-lg shadow-lg transition-all duration-200 ${
          isFocused ? 'ring-2 ring-primary-400' : ''
        }`}
      >
        <svg
          className="absolute left-4 w-5 h-5 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full px-4 pl-12 py-3 text-slate-900 placeholder-slate-500 bg-transparent focus:outline-none"
          aria-label="Search"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="mr-3 p-1 text-slate-400 hover:text-slate-600"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        <button
          type="submit"
          className="mr-2 px-4 py-2 text-primary-600 hover:text-primary-700 font-medium"
          aria-label="Search"
        >
          Search
        </button>
      </div>
    </form>
  );
}
