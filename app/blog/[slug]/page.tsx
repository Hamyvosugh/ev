// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogContentWrapper from '@/components/blog/BlogContentWrapper';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { extractHeadings } from '@/lib/mdx';
import Script from 'next/script';
// Import our custom plugin
import { remarkUnwrapImages } from '@/lib/mdx-plugins/unwrap-images';



type PageProps = {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    // Await params before accessing slug
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    
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

export const revalidate = false; // We'll use on-demand revalidation instead

export default async function BlogPostPage({ params }: PageProps) {
  try {
    // Await params before accessing slug
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    const allPosts = await getAllPosts();
    
    // Related posts: same category, different post
    const relatedPosts = allPosts
      .filter(p => p.category === post.category && p.slug !== post.slug)
      .slice(0, 3);
      
    // Process MDX content with plugins
    const mdxSource = await serialize(post.content, {
      mdxOptions: {
        remarkPlugins: [
          // Add our custom plugin to unwrap images from paragraph tags
          remarkUnwrapImages
        ],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      },
    });
    
    // Extract headings for table of contents
    const headings = extractHeadings(post.content);
    
    return (
      <div className="container mx-auto px-4 py-2 ">
            <Script id="organization-ld-json" type="application/ld+json" strategy="afterInteractive">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Emoviral",
      "url": "https://emoviral.com",
      "logo": "https://emoviral.com/images/logo/logo-emoviral.png"
    }
    `}
    </Script>
        <article>
          <div className='pt-0'>
            <BlogHeader post={post} />
          </div>
          <BlogContentWrapper 
            content={mdxSource} 
            headings={headings}
            slug={post.slug}
            title={post.title}
            cta={post.cta} // Pass the CTA from the post frontmatter
          />
        </article>
        
        <hr className="my-16 border-gray-200 " />
        
        <RelatedPosts posts={relatedPosts} currentSlug={post.slug} />
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}