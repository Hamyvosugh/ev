import { getPostBySlug } from '@/lib/blog';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json(
      { error: 'Slug parameter is required' },
      { status: 400 }
    );
  }

  try {
    const post = await getPostBySlug(slug);
    
    return NextResponse.json({
      title: post.title,
    });
  } catch (error) {
    console.error('Error fetching blog post title:', error);
    return NextResponse.json(
      { error: 'Blog post not found' },
      { status: 404 }
    );
  }
}