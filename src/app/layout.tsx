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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Added FontAwesome so your icons load correctly */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}