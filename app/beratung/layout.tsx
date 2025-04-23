// app/beratung/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beratung | Automotive Services',
  description: 'Professionelle Beratung für Ihr Autohaus. Optimieren Sie Ihre digitale Präsenz, Fotografie und Geschäftsprozesse mit unserer Expertise.',
};

export default function BeratungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}