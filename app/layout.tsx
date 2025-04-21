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