// app/[locale]/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogContentWrapper from '@/components/blog/BlogContentWrapper';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { extractHeadings } from '@/lib/mdx';

type PageProps = {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug);
    
    return {
      title: `${post.title} | Automotive Excellence Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        images: [
          {
            url: post.coverImage,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [post.coverImage],
      },
    };
  } catch {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
}

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPostPage({ params }: PageProps) {
  try {
    const post = getPostBySlug(params.slug);
    const allPosts = getAllPosts();
    
    // Related posts: same category, different post
    const relatedPosts = allPosts
      .filter(p => p.category === post.category && p.slug !== post.slug)
      .slice(0, 3);
      
    // Process MDX content with enhanced plugins
    const mdxSource = await serialize(post.content, {
      mdxOptions: {
        remarkPlugins: [
          remarkGfm, // GitHub Flavored Markdown (tables, strikethrough, etc.)
        ],
        rehypePlugins: [
          rehypeSlug, // Add IDs to headings
          [rehypeAutolinkHeadings, { behavior: 'wrap' }], // Add links to headings
          rehypeHighlight, // Syntax highlighting for code blocks
        ],
        format: 'mdx',
      },
      parseFrontmatter: true,
    });
    
    // Extract headings for table of contents
    const headings = extractHeadings(post.content);
    
    return (
      <div className="container mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <BlogHeader post={post} />
          <div className="p-6 md:p-8">
            <BlogContentWrapper 
              content={mdxSource} 
              headings={headings}
              slug={post.slug}
              title={post.title}
            />
          </div>
        </article>
        
        <hr className="my-16 border-gray-200" />
        
        {relatedPosts.length > 0 && (
          <RelatedPosts posts={relatedPosts} currentSlug={post.slug} />
        )}
      </div>
    );
  } catch (error) {
    console.error("Error rendering blog post:", error);
    notFound();
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}