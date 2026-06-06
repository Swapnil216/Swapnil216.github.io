import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Swapnil Agarwal | Portfolio',
  description: 'Backend & Search Infrastructure Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}