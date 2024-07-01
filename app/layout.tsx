import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './app.css';
import '@aws-amplify/ui-react/styles.css';
import AuthProvider from '@/components/auth/AuthProvider';
import NavBar from '@/components/NavBar';
import outputs from '@/amplify_outputs.json';
import { Amplify } from 'aws-amplify';

Amplify.configure(outputs, {ssr: true});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'API Bingo',
  description: 'Welcome to the API universe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar isSignedIn={false} />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
