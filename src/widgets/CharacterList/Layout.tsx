import React from 'react'

import useAllCharacters from '@/queries/useAllCharacters'
import { useSearch } from '@/contexts/SearchContext'
import { useGender } from '@/contexts/GenderContext'

import CharacterList from './CharacterList'

export default function Layout() {
  const [page, setPage] = React.useState(1)

  const { characters, isLoading } = useAllCharacters({ page })

  const { setSearch } = useSearch()
  const { setGender } = useGender()

  return (
    <CharacterList 
      page={page}
      setPage={setPage}
      characters={characters}
      isLoading={isLoading}
      setSearch={setSearch}
      setGender={setGender}
    />
  )
}
