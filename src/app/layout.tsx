import './reset.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'], preload: true });

export const metadata: Metadata = {
  title: 'Designo',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
