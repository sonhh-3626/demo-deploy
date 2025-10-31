import { postsSeed } from '@/data/posts.seed';

export const getCategories = (): string[] => {
  const categories = postsSeed.map((post) => post.category);
  return [...new Set(categories)];
};
