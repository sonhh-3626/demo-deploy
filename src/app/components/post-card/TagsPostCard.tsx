interface TagsPostCardProps {
  tags: string[];
}

export default function TagsPostCard({
  tags = []
}: TagsPostCardProps) {
  if (!tags.length) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.slice(0, 3).map((tag) => (
        <span
          key={tag}
          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
