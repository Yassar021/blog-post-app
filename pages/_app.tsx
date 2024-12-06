import type { AppProps } from 'next/app'
import React from 'react'
import { TanstackProvider } from './api/tanstack-providers'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <TanstackProvider >
      <Component {...pageProps} />
    </TanstackProvider>
  )
}


