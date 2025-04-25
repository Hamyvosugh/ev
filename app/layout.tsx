import type { Metadata } from "next";
import "./globals.css";
import "@/styles/fonts.css";
import ScrollToTopButton from '@/components/global/scrollup';
import Header from '@/components/global/header';
import Footer from '@/components/global/footer';
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Auto Services",
  description: "Professionelle Dienstleistungen für Autohändler und Ausstellungen",
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
  

          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
</head>
      <body className="w-full min-w-full m-0 p-0">
        <div className="w-full min-w-full p-0 m-0">
          <Analytics/>
          <Header />
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