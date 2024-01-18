import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Programming Questions',
  description: 'Generated by create next app',
  icons: [
    {
      url: '/javascript.png',
      sizes: 'any',
      type: 'image/x-icon',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={`${inter.className} mx-auto  max-w-screen-md bg-slate-900 px-3  md:px-6`}
      >
        {children}
      </body>
    </html>
  );
}
