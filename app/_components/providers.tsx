'use client'
import { NextUIProvider } from '@nextui-org/react';
import { Authenticator } from '@aws-amplify/ui-react';

/** @see https://nextui.org/docs/frameworks/nextjs#setup-provider */
export default function Providers({children}: { children: React.ReactNode }) {
  return (
    <Authenticator.Provider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </Authenticator.Provider>
  )
}