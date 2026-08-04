'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import SearchBar from '@/components/SearchBar'
import AssetGrid from '@/components/AssetGrid'
import CategoryPills from '@/components/CategoryPills'
import { ChevronDown, Filter, X } from 'lucide-react'

interface Asset {
  id: string
  title: string
  slug: string
  description: string
  type: string
  author_id: string
  version: string
  tags: string[]
  thumbnail_url: string | null
  views_count: number
  downloads_count: number
  stars_count: number
  created_at: string
  published_at: string
  users: {
    username: string
    display_name: string
    avatar_url: string
  }
}

const ASSET_TYPES = [
  { id: 'Prompt', label: 'Prompts', icon: '💬' },
  { id: 'Skill', label: 'Skills', icon: '🛠️' },
  { id: 'Workflow', label: 'Workflows', icon: '⚙️' },
  { id: 'Agent', label: 'Agents', icon: '🤖' },
  { id: 'Plugin', label: 'Plugins', icon: '🔌' },
  { id: 'Template', label: 'Templates', icon: '📄' },
]

const INDUSTRIES = [
  'Healthcare',
  'Finance',
  'Technology',
  'Education',
  'Manufacturing',
  'Retail',
  'Government',
  'Utilities',
]

const SORT_OPTIONS = [
  { id: 'created', label: 'Newest' },
  { id: 'stars', label: 'Most Starred' },
  { id: 'downloads', label: 'Most Downloaded' },
  { id: 'updated', label: 'Recently Updated' },
]

export default function BrowsePage() {
  const searchParams = useSearchParams()
  const [assets, setAssets] = useState<Asset[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isEmpty, setIsEmpty] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Filter and search state
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || 'All')
  const [selectedIndustry, setSelectedIndustry] = useState(searchParams.get('industry') || '')
  const [selectedSort, setSelectedSort] = useState(searchParams.get('sort') || 'created')
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1'))
  const [totalPages, setTotalPages] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  // Fetch assets with filters
  useEffect(() => {
    const fetchAssets = async () => {
      try {
        setIsLoading(true)
        const queryParams = new URLSearchParams({
          page: currentPage.toString(),
          limit: '20',
          search: searchQuery,
          sort: selectedSort,
          ...(selectedType !== 'All' && { type: selectedType }),
        })

        const response = await fetch(`/api/assets?${queryParams}`)
        if (!response.ok) throw new Error('Failed to fetch assets')

        const data = await response.json()
        setAssets(data.data)
        setTotalPages(data.pagination.totalPages)
        setIsEmpty(data.data.length === 0)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setAssets([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchAssets()
  }, [searchQuery, selectedType, selectedSort, currentPage])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleTypeChange = (type: string) => {
    setSelectedType(type)
    setCurrentPage(1)
  }

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort)
    setCurrentPage(1)
  }

  const handleReset = () => {
    setSearchQuery('')
    setSelectedType('All')
    setSelectedIndustry('')
    setSelectedSort('created')
    setCurrentPage(1)
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Browse Assets</h1>
          <p className="text-slate-600">Discover 1000+ skills, prompts, and workflows</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            placeholder="Search prompts, skills, workflows..."
          />
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } lg:block w-full lg:w-64 flex-shrink-0`}
          >
            <div className="bg-white rounded-lg border border-slate-200 p-6 sticky top-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
                <button
                  onClick={handleReset}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Reset
                </button>
              </div>

              {/* Type Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-slate-900 mb-3">Asset Type</h3>
                <div className="space-y-2">
                  {['All', ...ASSET_TYPES.map((t) => t.id)].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={selectedType === type}
                        onChange={(e) => handleTypeChange(e.target.value)}
                        className="w-4 h-4 text-primary-600 rounded"
                      />
                      <span className="ml-3 text-sm text-slate-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-slate-900 mb-3">Sort By</h3>
                <div className="space-y-2">
                  {SORT_OPTIONS.map((option) => (
                    <label key={option.id} className="flex items-center">
                      <input
                        type="radio"
                        name="sort"
                        value={option.id}
                        checked={selectedSort === option.id}
                        onChange={(e) => handleSortChange(e.target.value)}
                        className="w-4 h-4 text-primary-600 rounded"
                      />
                      <span className="ml-3 text-sm text-slate-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Industry Filter */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Industries</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {INDUSTRIES.map((industry) => (
                    <label key={industry} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedIndustry === industry}
                        onChange={() =>
                          setSelectedIndustry(
                            selectedIndustry === industry ? '' : industry
                          )
                        }
                        className="w-4 h-4 text-primary-600 rounded"
                      />
                      <span className="ml-3 text-sm text-slate-700">{industry}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 w-full justify-center"
              >
                <Filter size={16} />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            {/* Results Info */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">
                  {isLoading ? 'Loading...' : `Showing ${assets.length} assets`}
                </p>
              </div>
            </div>

            {/* Asset Grid */}
            <AssetGrid
              assets={assets}
              isLoading={isLoading}
              isEmpty={isEmpty && !isLoading}
            />

            {/* Error State */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                {error}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-2 rounded text-sm font-medium ${
                        currentPage === i + 1
                          ? 'bg-primary-600 text-white'
                          : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
