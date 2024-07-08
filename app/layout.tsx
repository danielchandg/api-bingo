import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@aws-amplify/ui-react/styles.css';
import AuthProvider from '@/components/auth/AuthProvider';
import NavBar from '@/components/NavBar';
import ConfigureAmplify from '@/components/ConfigureAmplify';
import Providers from './providers';

/**
 * @description Specify default font
 * @see https://nextjs.org/learn/dashboard-app/optimizing-fonts-images#adding-a-primary-font
 */
export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'API Bingo',
  description: 'Welcome to the API universe',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    // https://nextui.org/docs/frameworks/nextjs#add-provider-to-root
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          <ConfigureAmplify />
          <NavBar isSignedIn={false} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
