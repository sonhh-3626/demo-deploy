export default function PostCardSkeleton() {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Ảnh cover */}
      <div className="relative w-full h-56 bg-gray-300" />

      {/* Nội dung */}
      <div className="p-6 space-y-4">
        {/* Tiêu đề */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>

        {/* Đoạn mô tả */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-3">
          <div className="h-5 w-12 bg-gray-200 rounded-full"></div>
          <div className="h-5 w-16 bg-gray-200 rounded-full"></div>
          <div className="h-5 w-10 bg-gray-200 rounded-full"></div>
        </div>

        {/* Author avatar + name */}
        <div className="flex items-center gap-3 mt-4">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3 mt-1"></div>
          </div>
        </div>

        {/* Meta info */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
          <div className="h-3 w-16 bg-gray-200 rounded"></div>
          <div className="h-3 w-10 bg-gray-200 rounded"></div>
          <div className="h-3 w-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    </article>
  );
}
