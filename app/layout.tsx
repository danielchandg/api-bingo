import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@aws-amplify/ui-react/styles.css';
import NavBar from '@/components/NavBar';
import ConfigureAmplify from './_components/ConfigureAmplify';
import Providers from './_components/providers';

/**
 * @description Specify default font
 * @see https://nextjs.org/learn/dashboard-app/optimizing-fonts-images#adding-a-primary-font
 */
export const inter = Inter({ subsets: ['latin'] });

/** @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#metadata */
export const metadata: Metadata = {
  title: 'API Bingo',
  description: 'Welcome to the API universe',
};

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
 */
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    // https://nextui.org/docs/frameworks/nextjs#add-provider-to-root
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          <ConfigureAmplify />
          {/* <NavBar isSignedIn={false} /> */}
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
