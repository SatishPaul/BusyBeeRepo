'use client';

import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { AssetGrid } from '@/components/AssetGrid';
import { CategoryPills } from '@/components/CategoryPills';

const FEATURED_COLLECTIONS = [
  {
    id: '1',
    title: 'Top Healthcare Prompts',
    description: 'Best prompts for clinical AI and patient education',
    imageUrl: '/images/healthcare-prompts.jpg',
    assetCount: 24,
  },
  {
    id: '2',
    title: 'Engineering Automation Skills',
    description: 'Reusable skills to automate development workflows',
    imageUrl: '/images/engineering-skills.jpg',
    assetCount: 18,
  },
  {
    id: '3',
    title: 'Finance Agents',
    description: 'AI agents for financial analysis and reporting',
    imageUrl: '/images/finance-agents.jpg',
    assetCount: 12,
  },
];

const TRENDING_TAGS = [
  'AI', 'Python', 'TypeScript', 'React', 'Healthcare',
  'Finance', 'Automation', 'Machine Learning', 'GPT-4', 'Claude'
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Discover & Share AI Skills
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Browse 1000+ community-contributed prompts, skills, workflows, and agents.
              Build faster with proven solutions from expert developers.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search assets, skills, or authors..."
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold">1,000+</div>
              <p className="text-primary-200">Assets</p>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <p className="text-primary-200">Contributors</p>
            </div>
            <div>
              <div className="text-3xl font-bold">50k+</div>
              <p className="text-primary-200">Active Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Browse by Category</h2>
          <CategoryPills 
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_COLLECTIONS.map((collection) => (
              <a
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-32 group-hover:from-primary-500 group-hover:to-primary-700 transition" />
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">{collection.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">{collection.assetCount} assets</span>
                    <span className="text-primary-600 font-medium">Browse →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Tags */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Trending Topics</h2>
          <div className="flex flex-wrap gap-3">
            {TRENDING_TAGS.map((tag) => (
              <a
                key={tag}
                href={`/browse?tag=${encodeURIComponent(tag)}`}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-primary-600 hover:text-primary-600 transition text-sm font-medium"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Have a skill to share?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Join our community of 500+ contributors and help thousands of developers build better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/submit"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition"
            >
              Submit Your Asset
            </a>
            <a
              href="/guidelines"
              className="px-6 py-3 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 font-medium transition"
            >
              Contribution Guidelines
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
