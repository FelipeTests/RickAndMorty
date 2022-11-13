import React from 'react'

import SearchContext, { SearchContextValue } from './context'

export default function useSearch(): SearchContextValue {
  const context = React.useContext(SearchContext)

  if (!context) {
    throw new Error('useSearch must be used within SearchContextProvider.')
  }

  return context
}
