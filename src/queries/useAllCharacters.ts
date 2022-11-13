import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'

import { Genders } from '@/enums'
import { useSearch } from '@/contexts/SearchContext'
import { useGender } from '@/contexts/GenderContext'

import endpoints from './endpoints'
import keys from './keys'
import { Character } from './types'

interface Props {
  page?: number
}

export default function useAllCharacters(props: Props = {}) {
  const { page = 0 } = props

  const { search } = useSearch()
  const { gender } = useGender()

  const { data, isLoading, error } = useQuery(keys.characters(search, gender, page), () => (
    fetch(`${endpoints.characters}/?page=${page}${search ? `&name=${search}` : ''}${gender !== Genders.All ? `&gender=${gender}` : ''}`)
      .then(response => response.json())
      .then(data => data)
  ))

  const characters: Character[] = data?.results

  return { characters, isLoading, error }
}
