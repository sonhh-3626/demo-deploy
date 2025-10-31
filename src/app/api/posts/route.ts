import { getServerSession } from 'next-auth';
import { authOptions } from '@/configs/auth';
import { Post } from '@/types/post';
import { NextResponse } from 'next/server';

const DB_API_URL = `${process.env.DB_API_URL}`;

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get('search') || '';
    const sortBy = searchParams.get('sort') || 'newest';
    const currentPage = Number(searchParams.get('page') || 1);
    const postsPerPage = Number(searchParams.get('limit') || 6);

    const res = await fetch(DB_API_URL);
    if (!res.ok) throw new Error('Failed to fetch data from json-server');
    let posts = await res.json();

    let filteredPosts = posts.filter((post: Post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === 'newest') {
      filteredPosts.sort(
        (a: Post, b: Post) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    } else if (sortBy === 'views') {
      filteredPosts.sort((a: Post, b: Post) => b.views - a.views);
    } else if (sortBy === 'likes') {
      filteredPosts.sort((a: Post, b: Post) => b.likes - a.likes);
    }

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

    return NextResponse.json({
      success: true,
      data: paginatedPosts,
      totalPages: totalPages,
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  try {
    const newPost = await request.json();

    if (!newPost.title || !newPost.content) {
      return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
    }

    const currentDate = new Date().toISOString();
    const postToAdd = {
      ...newPost,
      postId: crypto.randomUUID(),
      publishedAt: currentDate,
      updatedAt: currentDate,
    };

    const res = await fetch(DB_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postToAdd),
    });

    if (!res.ok) throw new Error('Failed to create post on json-server');
    const createdPost = await res.json();

    return NextResponse.json(
      {
        success: true,
        message: 'Post created successfully',
        data: createdPost,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
