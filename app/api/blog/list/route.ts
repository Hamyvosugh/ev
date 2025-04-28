// app/api/blog/list/route.ts
import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';

export async function GET() {
  try {
    const posts = await getAllPosts();
    
    // فقط اطلاعات مورد نیاز را ارسال می‌کنیم
    const simplifiedPosts = posts.map(post => ({
      slug: post.slug,
      title: post.title,
      date: post.date
    }));
    
    return NextResponse.json({ posts: simplifiedPosts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'خطا در بارگذاری پست‌های بلاگ' },
      { status: 500 }
    );
  }
}