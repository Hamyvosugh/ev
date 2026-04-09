// This layout omits the global header and footer for the offerkashmar page only.
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export const dynamic = "force-dynamic";

export default function OfferkashmarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
