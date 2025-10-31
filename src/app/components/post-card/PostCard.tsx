import Image from 'next/image';

import { Post } from '@/types/post';
import TagsPostCard from './TagsPostCard';
import AuthorAvatar from './AuthorAvatar';
import MetaInfo from './MetaInfo';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-56">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <TagsPostCard tags={post.tags} />
        <AuthorAvatar author={post.author} />

        <MetaInfo
          publishedAt={post.publishedAt}
          readTime={post.readTime}
          views={post.views}
          likes={post.likes}
        />
      </div>
    </article>
  );
}
