import React from 'react'
import type { AppProps } from 'next/app'

import { SearchContextProvider } from '@/contexts/SearchContext'
import { GendersContextProvider } from '@/contexts/GenderContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import 'styles/global.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchContextProvider>
        <GendersContextProvider>
          <Component {...pageProps} />
        </GendersContextProvider>
      </SearchContextProvider>
    </QueryClientProvider>
  )
}
