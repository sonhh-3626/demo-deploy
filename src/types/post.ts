export interface Author {
  name: string;
  avatar: string;
  role: string;
}

export interface Post {
  postId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  views: number;
  likes: number;
  status: 'draft' | 'published' | 'archived';
}
