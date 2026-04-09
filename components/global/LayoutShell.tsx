"use client";

import Breadcrumb from "@/components/global/Breadcrumb";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import ScrollToTopButton from "@/components/global/scrollup";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type LayoutShellProps = {
  children: ReactNode;
};

const CHROMELESS_ROUTES = ["/offerkashmar"];

export default function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname();
  const isChromelessRoute = CHROMELESS_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (isChromelessRoute) {
    return (
      <>
        <main className="w-full min-w-full p-0 m-0">{children}</main>
        <ScrollToTopButton />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className=" mt-20 z-10 pb-0">
        <Breadcrumb
          containerClasses="py-3 px-4 sm:px-6 lg:px-8 z-50   border-b border-gray-100"
          activeItemClasses="text-blue-900 font-medium"
          inactiveItemClasses="text-gray-600 hover:text-blue-900 transition-colors duration-200"
        />
      </div>
      <main className="w-full min-w-full p-0 m-0">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
