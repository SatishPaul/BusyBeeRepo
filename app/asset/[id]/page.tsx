'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Star, Download, Share2, Bookmark, User, Calendar, Code } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

interface Asset {
  id: string
  title: string
  slug: string
  description: string
  content: string
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
    id: string
    username: string
    display_name: string
    avatar_url: string
  }
}

interface Rating {
  id: string
  user_id: string
  asset_id: string
  rating: number
  review: string
  created_at: string
  users: {
    display_name: string
    avatar_url: string
  }
}

export default function AssetDetailPage({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const [asset, setAsset] = useState<Asset | null>(null)
  const [ratings, setRatings] = useState<Rating[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaved, setIsSaved] = useState(false)
  const [userRating, setUserRating] = useState<number>(0)
  const [reviewText, setReviewText] = useState('')

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const response = await fetch(`/api/assets/${params.id}`)
        if (!response.ok) {
          notFound()
        }
        const data = await response.json()
        setAsset(data)

        // Fetch ratings
        const ratingsResponse = await fetch(`/api/assets/${params.id}/ratings`)
        if (ratingsResponse.ok) {
          const ratingsData = await ratingsResponse.json()
          setRatings(ratingsData)
        }
      } catch (error) {
        console.error('Failed to fetch asset:', error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }

    fetchAsset()
  }, [params.id])

  const handleSubmitReview = async () => {
    if (!user || !asset) return

    try {
      const response = await fetch(`/api/assets/${asset.id}/ratings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating: userRating,
          review: reviewText,
        }),
      })

      if (response.ok) {
        const newRating = await response.json()
        setRatings([newRating, ...ratings])
        setUserRating(0)
        setReviewText('')
      }
    } catch (error) {
      console.error('Failed to submit review:', error)
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 animate-pulse">
          <div className="h-12 bg-slate-200 rounded mb-4 w-3/4"></div>
          <div className="h-96 bg-slate-200 rounded"></div>
        </div>
      </main>
    )
  }

  if (!asset) {
    notFound()
  }

  const averageRating = ratings.length > 0
    ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
    : 0

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/browse" className="text-primary-600 hover:text-primary-700 text-sm mb-4 inline-block">
            ← Back to Browse
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {asset.type}
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">{asset.title}</h1>
              <p className="text-slate-600">{asset.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Metadata */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-slate-600 mb-1">Author</div>
                  <div className="flex items-center gap-2">
                    {asset.users.avatar_url && (
                      <img
                        src={asset.users.avatar_url}
                        alt={asset.users.display_name}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <Link
                      href={`/profile/${asset.users.username}`}
                      className="font-medium text-slate-900 hover:text-primary-600"
                    >
                      {asset.users.display_name}
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Version</div>
                  <div className="font-medium text-slate-900">{asset.version}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Published</div>
                  <div className="flex items-center gap-2 text-slate-900">
                    <Calendar size={16} />
                    {new Date(asset.published_at).toLocaleDateString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Rating</div>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{averageRating}</span>
                    <span className="text-sm text-slate-600">({ratings.length})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
                <div className="text-2xl font-bold text-slate-900">{asset.downloads_count}</div>
                <div className="text-sm text-slate-600 flex items-center justify-center gap-1">
                  <Download size={14} />
                  Downloads
                </div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
                <div className="text-2xl font-bold text-slate-900">{asset.views_count}</div>
                <div className="text-sm text-slate-600">Views</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
                <div className="text-2xl font-bold text-slate-900">{asset.stars_count}</div>
                <div className="text-sm text-slate-600 flex items-center justify-center gap-1">
                  <Star size={14} />
                  Stars
                </div>
              </div>
            </div>

            {/* Tags */}
            {asset.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-slate-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {asset.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full hover:bg-slate-200 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Content */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-4">Description</h3>
              <div className="prose prose-sm max-w-none text-slate-700">
                <p>{asset.content}</p>
              </div>
            </div>

            {/* Code Block */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Code size={18} />
                <h3 className="font-semibold text-slate-900">Content</h3>
              </div>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded text-sm overflow-x-auto">
                <code>{asset.content.substring(0, 300)}...</code>
              </pre>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-6">Reviews ({ratings.length})</h3>

              {user && (
                <div className="mb-8 pb-8 border-b border-slate-200">
                  <h4 className="font-medium text-slate-900 mb-4">Leave a Review</h4>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setUserRating(star)}
                          className="text-2xl transition-colors"
                        >
                          <Star
                            size={24}
                            className={
                              star <= userRating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-slate-300'
                            }
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Review (optional)
                    </label>
                    <textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Share your experience with this asset..."
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-600"
                      rows={3}
                    />
                  </div>
                  <button
                    onClick={handleSubmitReview}
                    disabled={userRating === 0}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Review
                  </button>
                </div>
              )}

              {/* Reviews List */}
              <div className="space-y-6">
                {ratings.map((rating) => (
                  <div key={rating.id} className="pb-6 border-b border-slate-200 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {rating.users.avatar_url && (
                          <img
                            src={rating.users.avatar_url}
                            alt={rating.users.display_name}
                            className="w-8 h-8 rounded-full"
                          />
                        )}
                        <div>
                          <div className="font-medium text-slate-900">
                            {rating.users.display_name}
                          </div>
                          <div className="text-xs text-slate-600">
                            {new Date(rating.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < rating.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-slate-300'
                            }
                          />
                        ))}
                      </div>
                    </div>
                    {rating.review && (
                      <p className="text-slate-700 text-sm">{rating.review}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-slate-200 p-6 sticky top-4">
              <button className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 mb-3">
                Open in Editor
              </button>
              <button
                onClick={() => setIsSaved(!isSaved)}
                className="w-full px-4 py-3 border border-slate-300 text-slate-900 rounded-lg font-medium hover:bg-slate-50 flex items-center justify-center gap-2 mb-3"
              >
                <Bookmark
                  size={18}
                  className={isSaved ? 'fill-primary-600 text-primary-600' : ''}
                />
                {isSaved ? 'Saved' : 'Save'}
              </button>
              <button className="w-full px-4 py-3 border border-slate-300 text-slate-900 rounded-lg font-medium hover:bg-slate-50 flex items-center justify-center gap-2">
                <Share2 size={18} />
                Share
              </button>

              {/* Asset Info */}
              <div className="mt-8 space-y-4 text-sm">
                <div>
                  <div className="text-slate-600 mb-1">File Type</div>
                  <div className="text-slate-900 font-medium">Text/YAML</div>
                </div>
                <div>
                  <div className="text-slate-600 mb-1">License</div>
                  <div className="text-slate-900 font-medium">MIT</div>
                </div>
                <div>
                  <div className="text-slate-600 mb-1">Last Updated</div>
                  <div className="text-slate-900 font-medium">
                    {new Date(asset.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
