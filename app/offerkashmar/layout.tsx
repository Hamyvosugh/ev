// This layout omits the global header and footer for the offerkashmar page only.
import React from "react";

export default function OfferkashmarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
