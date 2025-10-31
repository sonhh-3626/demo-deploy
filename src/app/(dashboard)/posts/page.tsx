'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

import Filter from '@/app/components/filter/Filter';
import Heading1 from '@/app/components/heading/Heading1';
import Pagination from '@/app/components/Pagination';
import PostCard from '@/app/components/post-card/PostCard';
import { Post } from '@/types/post';
import { fetchPosts } from '@/lib/posts';

export default function PostsPage() {
  const t = useTranslations('PostsPage');
  const router = useRouter();
  const searchParams = useSearchParams();

  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const initialSearchQuery = searchParams.get('search') || '';
  const initialSortBy = searchParams.get('sort') || 'newest';
  const initialCurrentPage = Number(searchParams.get('page') || 1);
  const initialPostsPerPage = Number(searchParams.get('limit') || 6);

  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [postsPerPage, setPostsPerPage] = useState(initialPostsPerPage);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const { data, totalPages } = await fetchPosts({
          search: searchQuery,
          sort: sortBy,
          page: currentPage,
          limit: postsPerPage,
        });
        setPosts(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    loadPosts();
  }, [searchQuery, sortBy, currentPage, postsPerPage]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (sortBy !== 'newest') params.set('sort', sortBy);
    if (currentPage !== 1) params.set('page', currentPage.toString());
    if (postsPerPage !== 6) params.set('limit', postsPerPage.toString());

    router.replace(`/posts?${params.toString()}`);
  }, [searchQuery, sortBy, currentPage, postsPerPage, router]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mx-auto py-5">
      <Heading1 title={t('allPosts')} />

      <Filter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link key={post.postId} href={`/posts/${post.postId}`}>
              <PostCard post={post} />
            </Link>
          ))
        ) : (
          <div>{t('hasNoPost')}</div>
        )}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}
