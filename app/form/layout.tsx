import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Let's Build Your Perfect Website | Emoviral",
  description:
    "Share your website goals with Emoviral and get a tailored digital solution for your business.",
  alternates: {
    canonical: "/form",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
