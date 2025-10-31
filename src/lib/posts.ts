import { notFound } from 'next/navigation';
import { Post } from '../types/post';

export async function fetchPostById(id: string): Promise<{ post: Post, relatedPosts: Post[] }> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/posts/${id}`, {});

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch post (status ${response.status})`);
  }

  const json = await response.json();
  return json.data;
}

interface FetchPostsParams {
  search?: string;
  sort?: string;
  page?: number;
  limit?: number;
}

interface FetchPostsResponse {
  data: Post[];
  totalPages: number;
}

export async function fetchPosts({
  search = '',
  sort = 'newest',
  page = 1,
  limit = 6,
}: FetchPostsParams): Promise<FetchPostsResponse> {
  const params = new URLSearchParams({
    search,
    sort,
    page: page.toString(),
    limit: limit.toString(),
  });

  const response = await fetch(`/api/posts?${params.toString()}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    if (response.status >= 500) {
      throw new Error(`Server error: Failed to fetch posts (${response.status})`);
    } else if (response.status >= 400) {
      throw new Error(`Client error: Failed to fetch posts (${response.status})`);
    } else {
      throw new Error(`Failed to fetch posts (${response.status})`);
    }
  }

  const json = await response.json();
  return {
    data: json.data,
    totalPages: json.meta?.totalPages ?? json.totalPages ?? 1,
  };
}
