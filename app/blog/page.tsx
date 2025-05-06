// app/blog/page.tsx
import { Metadata } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Blog | Automotive Excellence',
  description: 'Entdecken Sie die neuesten Trends und Expertentipps rund um Fahrzeugfotografie und Fahrzeugpräsentation.',
};

// برای سیستن دیمناتد عوض شد
export const revalidate = false; // We'll use on-demand revalidation instead

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  // Await searchParams before accessing its properties
  const { category } = await searchParams || {};
  const selectedCategory = category || '';
  
  const allPosts = await getAllPosts();
  const allCategories = await getAllCategories();
  
  // Filter posts by category if one is selected
  const filteredPosts = selectedCategory
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts;

  return (
    <div className="container mx-auto px-4 py-14 ">
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
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Digitales Autohaus Magazin</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Aktuelle Trends, Insights und Strategien für die digitale Vermarktung von Fahrzeugen und Autohäusern.
        </p>
      </div>
      
      <div className="mb-10 flex flex-wrap justify-center gap-4">
        <Link 
          href="/blog"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            selectedCategory === '' 
              ? 'bg-blue-900 text-white' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Alle
        </Link>
        {allCategories.map((category) => (
          <Link
            key={category}
            href={`/blog?category=${encodeURIComponent(category)}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              selectedCategory === category
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Keine Artikel gefunden
          </h3>
          <p className="text-gray-600">
            Es wurden keine Artikel in dieser Kategorie gefunden. Bitte versuchen Sie eine andere Kategorie.
          </p>
        </div>
      )}
    </div>
  );
}