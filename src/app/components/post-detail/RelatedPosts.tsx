import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@/types/post';

interface RelatedPostsProps {
  relatedPosts: Post[];
}

export default function RelatedPosts({
  relatedPosts
}: RelatedPostsProps) {
  const t = useTranslations('RelatedPosts');
  return (
    <>
      {relatedPosts.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-4">{t("title")}</h3>
          <div className="space-y-4">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.postId}
                href={`/posts/${relatedPost.postId}`}
                className="block group"
              >
                <div className="flex space-x-3">
                  <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-2 text-sm mb-1">
                      {relatedPost.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {relatedPost.readTime} {t("minutesRead")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
