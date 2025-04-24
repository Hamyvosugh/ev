import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from '@/components/global/scrollup';
import Header from '@/components/global/header';
import Footer from '@/components/global/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Auto Services",
  description: "Professionelle Dienstleistungen für Autohändler und Ausstellungen",
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
    shortcut: '/favicon_io/favicon.ico',
  },
  manifest: '/favicon_io/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${poppins.className} w-full`}>
      <body className="w-full min-w-full m-0 p-0">
        <div className="w-full min-w-full p-0 m-0">
          <Header />
          <main className="w-full min-w-full p-0 m-0">
            {children}
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}