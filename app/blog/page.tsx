// app/[locale]/blog/page.tsx
import { Metadata } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Automotive Excellence',
  description: 'Entdecken Sie die neuesten Trends und Expertentipps rund um Fahrzeugfotografie und Fahrzeugpräsentation.',
};

// This enables static generation for better performance
export const revalidate = 3600; // Revalidate every hour

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const selectedCategory = searchParams?.category || '';
  const allPosts = getAllPosts();
  const allCategories = getAllCategories();
  
  // Filter posts by category if one is selected
  const filteredPosts = selectedCategory
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts;

  return (
    <div className="container mx-auto px-4 py-14 mt-10">
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
        {allCategories.map((category) => {
          // Ensure each category is a string and can be used as a key
          const categoryKey = typeof category === 'string' ? category : String(category);
          
          return (
            <Link
              key={categoryKey}
              href={`/blog?category=${encodeURIComponent(categoryKey)}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === categoryKey
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {categoryKey}
            </Link>
          );
        })}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => {
          // Ensure each post has a unique slug to use as a key
          const postKey = post.slug || `post-${Math.random().toString(36).substr(2, 9)}`;
          
          return <BlogCard key={postKey} post={post} />;
        })}
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