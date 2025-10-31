interface PostListSkeletonProps {
  numberCard: number;
}

export default function PostListSkeleton({
  numberCard
}: PostListSkeletonProps) {
  return (
    <div className="mx-auto py-10 animate-pulse">
      {/* Heading placeholder */}
      <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700 rounded mb-8"></div>

      {/* Filter placeholder */}
      <div className="flex flex-wrap gap-4 mb-10">
        <div className="h-10 w-60 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-10 w-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Grid posts skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: numberCard }).map((_, i) => (
          <div key={i} className="h-60 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        ))}
      </div>

      {/* Pagination placeholder */}
      <div className="flex justify-center mt-10">
        <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}
