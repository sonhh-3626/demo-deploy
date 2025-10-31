import Image from 'next/image';

import { Author } from "@/types/post";

interface AuthorAvatarProps {
  author: Author;
}

export default function AuthorAvatar({
  author
}: AuthorAvatarProps) {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <div className="flex items-center space-x-3">
        <Image
          src={author.avatar}
          alt={author.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {author.name}
          </p>
          <p className="text-xs text-gray-500">{author.role}</p>
        </div>
      </div>
    </div>
  )
}
