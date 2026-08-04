'use client';

interface AssetGridProps {
  assets?: any[];
  isLoading?: boolean;
  isEmpty?: boolean;
}

export function AssetGrid({
  assets = [],
  isLoading = false,
  isEmpty = false,
}: AssetGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-6 animate-pulse"
          >
            <div className="h-4 bg-slate-200 rounded mb-4 w-3/4" />
            <div className="h-3 bg-slate-200 rounded mb-3 w-full" />
            <div className="h-3 bg-slate-200 rounded w-5/6" />
          </div>
        ))}
      </div>
    );
  }

  if (isEmpty || assets.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12 text-center">
        <svg
          className="mx-auto h-12 w-12 text-slate-400 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <p className="text-slate-600 text-lg font-medium">No assets found</p>
        <p className="text-slate-500 mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assets.map((asset) => (
        <a
          key={asset.id}
          href={`/asset/${asset.id}`}
          className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          {asset.thumbnail && (
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-24 group-hover:from-primary-500 group-hover:to-primary-700 transition" />
          )}
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-slate-900 group-hover:text-primary-600 transition line-clamp-2">
                {asset.title}
              </h3>
              <span className="ml-2 px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                {asset.type}
              </span>
            </div>
            <p className="text-sm text-slate-600 line-clamp-2 mb-3">
              {asset.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-3">
              {asset.tags?.slice(0, 3).map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
              {asset.tags?.length > 3 && (
                <span className="text-xs text-slate-500">+{asset.tags.length - 3}</span>
              )}
            </div>
            <div className="flex justify-between items-center text-sm text-slate-500">
              <span>{asset.author}</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{asset.stars}</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
