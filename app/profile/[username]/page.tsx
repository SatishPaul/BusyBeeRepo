'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Star, Download, Users, Bookmark, Mail, Github, Globe } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

interface UserProfile {
  id: string
  username: string
  display_name: string
  bio: string | null
  avatar_url: string | null
  website_url: string | null
  github_username: string | null
  email: string
  followers_count: number
  following_count: number
  created_at: string
}

interface UserStats {
  assets_published: number
  total_downloads: number
  total_stars: number
  collections_created: number
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  const { user: currentUser, signOut } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [stats, setStats] = useState<UserStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isFollowing, setIsFollowing] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/users/${params.username}`)
        if (!response.ok) {
          notFound()
        }
        const data = await response.json()
        setProfile(data)

        // Fetch user stats
        const statsResponse = await fetch(`/api/users/${params.username}/stats`)
        if (statsResponse.ok) {
          const statsData = await statsResponse.json()
          setStats(statsData)
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [params.username])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 animate-pulse">
          <div className="h-64 bg-slate-200 rounded mb-4"></div>
        </div>
      </main>
    )
  }

  if (!profile) {
    notFound()
  }

  const isOwnProfile = currentUser?.username === profile.username

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header with profile */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end">
            {/* Avatar */}
            {profile.avatar_url && (
              <img
                src={profile.avatar_url}
                alt={profile.display_name}
                className="w-24 h-24 rounded-full border-2 border-primary-200"
              />
            )}

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-900 mb-1">
                {profile.display_name}
              </h1>
              <p className="text-slate-600 mb-3">@{profile.username}</p>

              {profile.bio && (
                <p className="text-slate-700 mb-4">{profile.bio}</p>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-4 mb-4">
                {profile.website_url && (
                  <a
                    href={profile.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-primary-600"
                  >
                    <Globe size={16} />
                    Website
                  </a>
                )}
                {profile.github_username && (
                  <a
                    href={`https://github.com/${profile.github_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-primary-600"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {stats?.assets_published || 0}
                  </div>
                  <div className="text-sm text-slate-600">Assets</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {profile.followers_count}
                  </div>
                  <div className="text-sm text-slate-600">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {stats?.total_downloads || 0}
                  </div>
                  <div className="text-sm text-slate-600">Downloads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {stats?.total_stars || 0}
                  </div>
                  <div className="text-sm text-slate-600 flex items-center gap-1">
                    <Star size={14} />
                    Stars
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                {isOwnProfile ? (
                  <>
                    <Link
                      href="/profile/edit"
                      className="px-4 py-2 border border-slate-300 text-slate-900 rounded-lg font-medium hover:bg-slate-50"
                    >
                      Edit Profile
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="px-4 py-2 border border-slate-300 text-slate-900 rounded-lg font-medium hover:bg-slate-50"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setIsFollowing(!isFollowing)}
                      className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
                        isFollowing
                          ? 'border border-slate-300 text-slate-900 hover:bg-slate-50'
                          : 'bg-primary-600 text-white hover:bg-primary-700'
                      }`}
                    >
                      <Users size={16} />
                      {isFollowing ? 'Following' : 'Follow'}
                    </button>
                    <a
                      href={`mailto:${profile.email}`}
                      className="px-4 py-2 border border-slate-300 text-slate-900 rounded-lg font-medium hover:bg-slate-50 flex items-center gap-2"
                    >
                      <Mail size={16} />
                      Message
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Published Assets</h2>
            
            {stats && stats.assets_published > 0 ? (
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-slate-600">Loading assets...</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-slate-200 p-8 text-center">
                <p className="text-slate-600 mb-4">No assets published yet</p>
                {isOwnProfile && (
                  <Link
                    href="/submit"
                    className="inline-block px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700"
                  >
                    Publish Your First Asset
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-slate-200 p-6 sticky top-4">
              <h3 className="font-semibold text-slate-900 mb-4">Member Since</h3>
              <p className="text-slate-600">
                {new Date(profile.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Contributions</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Collections</span>
                    <span className="font-medium">{stats?.collections_created || 0}</span>
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
