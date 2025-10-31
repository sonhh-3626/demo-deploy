import { Post } from '@/types/post';
import { NextResponse } from 'next/server';

const DB_API_URL = `${process.env.DB_API_URL}`;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ postId: string }> }
) {
  try {
    const { postId } = await params;

    const res = await fetch(DB_API_URL);
    if (!res.ok) throw new Error('Failed to fetch data from json-server');
    let posts: Post[] = await res.json();
    let post = posts.find((p) => p.postId === postId);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const relatedPosts = posts
      .filter((p) => p.category === post.category && p.postId !== post.postId)
      .slice(0, 3);

    return NextResponse.json({
      data: {
        post,
        relatedPosts,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
