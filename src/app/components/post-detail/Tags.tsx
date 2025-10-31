import { useTranslations } from 'next-intl';
import Link from "next/link";

interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  const t = useTranslations("Tags");
  return (
    <>
      {tags && tags.length > 0 && (
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("title")}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/posts?tag=${tag}`}
                className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm font-medium transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
