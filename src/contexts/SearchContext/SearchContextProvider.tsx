import React from 'react'

import SearchContext from './context'

interface SearchContextProviderProps {
  children: React.ReactNode
}

export default function SearchContextProvider(props: SearchContextProviderProps) {
  const { children } = props

  const [search, setSearchBase] = React.useState('')

  React.useEffect(() => {
    const storedSearch = window.localStorage.getItem('search')
    if (storedSearch) {
      setSearchBase(storedSearch)
    }
  }, [])

  const setSearch = React.useCallback((newSearch: string) => {
    setSearchBase(newSearch)
    window.localStorage.setItem('search', newSearch)
  }, [])


  return (
    <SearchContext.Provider value={{
      search,
      setSearch
    }}>
      {children}
    </SearchContext.Provider>
  )
}
