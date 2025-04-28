'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Using standard import
import { ChevronRight, Home } from 'lucide-react';

interface PathMap {
  [key: string]: {
    name: string;
    hide?: boolean;
  };
}

interface BreadcrumbConfig {
  pathMap: PathMap;
  hideOnPaths?: string[];
}

// Configuration for custom path names and hiding certain segments
const breadcrumbConfig: BreadcrumbConfig = {
  pathMap: {
    // Main navigation
    "blog": { name: "Magazin" },
    "foto": { name: "Fahrzeugfotografie" },
    "web": { name: "Webentwicklung" },
    "socialmedia": { name: "Social Media" },
    "kampagnen": { name: "Werbekampagnen" },
    "beratung": { name: "Beratung" },
    "about": { name: "Über uns" },
    "karriere": { name: "Karriere" },
    "kontakt": { name: "Kontakt" },
    
    // Legal pages
    "impressum": { name: "Impressum" },
    "datenschutz": { name: "Datenschutz" },
    "agb": { name: "AGB" },
  },
  // Paths where breadcrumb should be hidden
  hideOnPaths: ['/'],
};

interface BreadcrumbProps {
  config?: BreadcrumbConfig;
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeItemClasses?: string;
  inactiveItemClasses?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  config = breadcrumbConfig,
  homeElement = <Home className="w-4 h-4" />,
  separator = <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />,
  containerClasses = "py-3 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100 mt-20",
  listClasses = "flex flex-wrap items-center text-sm",
  activeItemClasses = "text-blue-900 font-medium truncate max-w-xs",
  inactiveItemClasses = "text-gray-600 hover:text-blue-900 transition-colors duration-200",
}) => {
  const pathname = usePathname();
  const [blogPostTitle, setBlogPostTitle] = useState<string | null>(null);
  const [shouldRender, setShouldRender] = useState(true);
  
  // Move the early return logic inside useEffect
  useEffect(() => {
    // Check if we should hide breadcrumb on this path
    if (config.hideOnPaths?.includes(pathname) || !pathname || pathname === '/') {
      setShouldRender(false);
    } else {
      setShouldRender(true);
    }
  }, [pathname, config.hideOnPaths]);
  
  // Split pathname into segments and filter out empty strings
  const segments = pathname ? pathname.split('/').filter(segment => segment) : [];
  
  // Check if we're on a blog post page
  const isBlogPost = segments[0] === 'blog' && segments.length > 1;

  // Fetch blog post title if we're on a blog post page
  useEffect(() => {
    const fetchBlogPostTitle = async () => {
      if (isBlogPost) {
        try {
          const response = await fetch(`/api/blog-post-title?slug=${segments[1]}`);
          if (response.ok) {
            const data = await response.json();
            setBlogPostTitle(data.title);
          }
        } catch (error) {
          console.error('Error fetching blog post title:', error);
        }
      }
    };

    fetchBlogPostTitle();
  }, [isBlogPost, segments]);

  // If we shouldn't render, return null but after all hooks
  if (!shouldRender) {
    return null;
  }

  // Create breadcrumb items from path segments
  const breadcrumbItems = segments.map((segment, index) => {
    // Build the URL for this breadcrumb
    const url = `/${segments.slice(0, index + 1).join('/')}`;
    
    // Check if this is the last item in the breadcrumb trail
    const isLastItem = index === segments.length - 1;
    
    // Get the display name from config or format the segment
    let displayName;
    
    if (segments[0] === 'blog' && index === 1) {
      // For blog posts, use the fetched title if available, otherwise "Artikel"
      displayName = blogPostTitle || "Artikel";
    } else {
      const segmentLower = segment.toLowerCase();
      displayName = config.pathMap[segmentLower]?.name || formatPathSegment(segment);
    }
    
    return {
      href: url,
      label: displayName,
      isCurrentPage: isLastItem,
      hide: config.pathMap[segment.toLowerCase()]?.hide
    };
  });

  // Filter out any segments that should be hidden
  const visibleBreadcrumbItems = breadcrumbItems.filter(item => !item.hide);
  
  return (
    <nav  aria-label="Breadcrumb" className={containerClasses}>
      <div className="  max-w-7xl mx-auto ">
        <ol className={listClasses}>
          <li>
            <Link 
              href="/" 
              className={inactiveItemClasses}
              aria-label="Home"
            >
              {homeElement}
            </Link>
          </li>
          
          {visibleBreadcrumbItems.map((item, index) => (
            <React.Fragment key={item.href}>
              <li className="flex items-center">
                {separator}
              </li>
              <li>
                {item.isCurrentPage ? (
                  <span 
                    className={activeItemClasses} 
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href} 
                    className={inactiveItemClasses}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </div>
    </nav>
  );
};

// Helper function to format path segments
function formatPathSegment(segment: string): string {
  // Convert kebab-case to Title Case (e.g., "my-page" becomes "My Page")
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default Breadcrumb;