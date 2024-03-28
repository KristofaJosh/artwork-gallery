import './globals.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artwork App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'grid h-[100dvh] grid-rows-[auto_1fr_auto]'}>
        <Header />
        <main className={'overflow-auto'}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
