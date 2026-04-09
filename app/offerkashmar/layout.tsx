// This layout omits the global header and footer for the offerkashmar page only.
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Digitale Marketing-Dienstleistungen fuer die Marke Kashmar",
  description:
    "Digitale Marketing-Dienstleistungen fuer die Marke Kashmar: Strategie, Sichtbarkeit, Content und Performance fuer nachhaltiges Wachstum.",
  openGraph: {
    title: "Digitale Marketing-Dienstleistungen fuer die Marke Kashmar",
    description:
      "Digitale Marketing-Dienstleistungen fuer die Marke Kashmar: Strategie, Sichtbarkeit, Content und Performance fuer nachhaltiges Wachstum.",
    url: "/offerkashmar",
    siteName: "Emoviral",
    images: [
      {
        url: "/videos/keshmar.png",
        width: 1056,
        height: 1056,
        alt: "Kashmar Spirit of Persia",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitale Marketing-Dienstleistungen fuer die Marke Kashmar",
    description:
      "Digitale Marketing-Dienstleistungen fuer die Marke Kashmar: Strategie, Sichtbarkeit, Content und Performance fuer nachhaltiges Wachstum.",
    images: ["/videos/keshmar.png"],
  },
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
