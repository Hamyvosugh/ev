import type { NextConfig } from "next";

const securityHeaders = [
  // X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  // X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  // X-XSS-Protection
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  // Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  // Content-Security-Policy
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.vercel.app https://vitals.vercel-insights.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://vitals.vercel-insights.com;
      media-src 'self';
      frame-src 'self';
      form-action 'self';
      base-uri 'self';
      frame-ancestors 'self';
      object-src 'none';
      upgrade-insecure-requests;
    `.replace(/\s+/g, ' ').trim()
  },
  // Permissions-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
];

const nextConfig: NextConfig = {
  /* Your existing config options */
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://emoviral.com/:path*',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'www.emoviral.com',
          },
        ],
      },
    ];
  },
  // Add security headers
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: securityHeaders,
      },
      // Cache policy for static assets - fixed pattern
      {
        source: '/:path*.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year
          },
        ],
      },
      {
        source: '/:path*.css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year
          },
        ],
      },
      {
        source: '/:path*.(jpg|jpeg|png|gif|svg|ico|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year
          },
        ],
      },
      {
        source: '/:path*.(woff|woff2|ttf|otf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year
          },
        ],
      },
      // Specific cache policy for insights script
      {
        source: '/insights/script.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year
          },
        ],
      },
    ];
  },
  
  // Force HTTPS in production
  poweredByHeader: false, // Remove X-Powered-By header
  
  // Update images config to use remotePatterns instead of domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'emoviral.com',
      },
    ],
  },
  
  // Experimental features for CSS optimization
  experimental: {
    // Enable optimizeCss with critters
    optimizeCss: true,
    // Make sure Next.js scripts load efficiently
    nextScriptWorkers: true,
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Also ignore ESLint errors and warnings during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;