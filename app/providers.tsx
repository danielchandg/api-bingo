'use client'
import {NextUIProvider} from '@nextui-org/react'

/** @see https://nextui.org/docs/frameworks/nextjs#setup-provider */
export default function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}