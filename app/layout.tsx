import Breadcrumb from '@/components/global/Breadcrumb';
import Footer from '@/components/global/footer';
import Header from '@/components/global/header';
import ScrollToTopButton from '@/components/global/scrollup';
import "@/styles/fonts.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";


export const metadata: Metadata = {
  title: "Digitale Lösungen für Autohäuser",
  description: "Webdesign, Online-Marketing, Fahrzeugfotografie, Content-Erstellung & intelligente Automatisierung für Autohäuser und Autohändler",
  metadataBase: new URL('https://emoviral.com'),
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
    shortcut: '/favicon_io/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="w-full font-poppins">
      <head>
  {/* Add this explicit favicon link for search engines */}
  <link rel="icon" type="image/png" href="/favicon_io/favicon-32x32.png" />
  
  {/* Your existing head content */}
  <style dangerouslySetInnerHTML={{ 
    __html: `
      /* Critical CSS for above-the-fold content */
      body { 
        margin: 0; 
        padding: 0; 
        width: 100%; 
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
        max-width: 100%;
      }
      header { 
        position: fixed; 
        width: 100%; 
        z-index: 50; 
        transition: all 0.3s;
      }
      .bg-white { background-color: #ffffff; }
      .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
      .font-bold { font-weight: 700; }
      .text-gray-900 { color: rgb(17, 24, 39); }
      .text-blue-900 { color: rgb(30, 58, 138); }
    ` 
  }} />

<Script id="organization-ld-json" type="application/ld+json" strategy="afterInteractive">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Emoviral",
  "url": "https://emoviral.com",
  "logo": "https://emoviral.com/images/logo/logo-emoviral.png",
  "image": "https://emoviral.com/images/emoviral-banner.jpg",
  "description": "Ihr zuverlässiger Partner für die Digitalisierung im Automobilhandel. Professionelle Fahrzeugfotografie, Webentwicklung und Social-Media-Management.",
  "email": "hi@emoviral.com",
  "telephone": "+49 6181 4347066", 
  "address": {
  "@type": "PostalAddress",
  "streetAddress": "Kurt-Blaum-Platz",
  "addressLocality": "Hanau",
  "postalCode": "63450",
  "addressCountry": "DE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49 6181 4347066",
    "contactType": "Customer Service",
    "areaServed": "DE",
    "availableLanguage": "German"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 50.1109,
      "longitude": 8.6821
    },
    "geoRadius": 50000
  },
  "potentialAction": {
    "@type": "ContactAction",
    "target": "https://emoviral.com/kontakt"
  }
}
`}
</Script>

<Script id="breadcrumb-ld-json" type="application/ld+json" strategy="afterInteractive">
{`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://emoviral.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://emoviral.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Fotografie",
      "item": "https://emoviral.com/foto"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Development",
      "item": "https://emoviral.com/web"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Social Media",
      "item": "https://emoviral.com/socialmedia"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Werbekampagnen",
      "item": "https://emoviral.com/kampagnen"
    }
  ]
}
`}
</Script>

<Script id="localbusiness-ld-json" type="application/ld+json" strategy="afterInteractive">
{`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Emoviral - Fahrzeugfotografie",
  "image": "https://emoviral.com/images/foto/automotive-professional-fotografie-hanau.jpg",
  "url": "https://emoviral.com",
  "description": "Gebrauchtwagenfotografie, Autoshooting, 360 Grad Autofotografie, hochwertige Autobilder & Dienstleistungen von einem professionellen Autofotograf für Autohändler in Frankfurt, Hanau, Main-Kinzig-Kreis & Umgebung."  "email": "hi@emoviral.com",
  "telephone": "+49 6181 4347066",
  "priceRange": "€€",
  "areaServed": {
    "@type": "Place",
    "name": "Frankfurt, Hanau und Umgebung"
  },
  "serviceArea": {
    "@type": "Place",
    "name": "Deutschland"
  },
  "location": {
    "@type": "Place",
    "name": "On-site Service Only"
  },
"address": {
  "@type": "PostalAddress",
  "streetAddress": "Kurt-Blaum-Platz",
  "addressLocality": "Hanau",
  "postalCode": "63450",
  "addressCountry": "DE"
}
}
`}
</Script>
<Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-CX2TJHGWT2`}
      />
      
      {/* اجرای تنظیمات Google Analytics پس از لود شدن gtag.js */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CX2TJHGWT2');
          `,
        }}
      />
<link rel="canonical" href="https://emoviral.com/" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
<meta name="robots" content="index, follow" />
</head>
      <body className="w-full min-w-full m-0 p-0">
        <div className="w-full min-w-full p-0 m-0">
          <Analytics/>
          <Header />
           <div className=" mt-20 z-10 pb-0">
           <Breadcrumb
           containerClasses="py-3 px-4 sm:px-6 lg:px-8 z-50   border-b border-gray-100"
           activeItemClasses="text-blue-900 font-medium"
           inactiveItemClasses="text-gray-600 hover:text-blue-900 transition-colors duration-200"
           />
          </div>
          <main className="w-full min-w-full p-0 m-0">
          {children}
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
        {/* Load non-critical scripts */}
        <Script id="partytown-config" strategy="worker">
          {`
            window.partytown = {
              forward: ['dataLayer.push', 'gtag']
            };
          `}
        </Script>
      </body>
    </html>
  );
}