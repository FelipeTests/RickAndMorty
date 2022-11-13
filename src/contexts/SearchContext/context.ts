import React from "react"

export interface SearchContextValue {
  search: string
  setSearch: (value: string) => void
}

const searchContext = React.createContext<SearchContextValue | undefined>(undefined)

export default searchContext
