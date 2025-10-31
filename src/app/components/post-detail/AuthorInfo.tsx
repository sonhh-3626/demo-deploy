import Image from 'next/image';
import {type Author } from "@/types/post";

interface AuthorInfoProps {
  author: Author;
}

export default function AuthorInfo({
  author
}: AuthorInfoProps) {
  return (
    <div className="flex items-center space-x-4">
      <Image
        src={author.avatar}
        alt={author.name}
        width={60}
        height={60}
        className="rounded-full"
      />
      <div>
        <p className="font-semibold text-gray-900 text-lg">
          {author.name}
        </p>
        <p className="text-gray-600">{author.role}</p>
      </div>
    </div>
  )
}
