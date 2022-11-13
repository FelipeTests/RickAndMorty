import React from 'react'
import { useQuery } from '@tanstack/react-query'

import endpoints from './endpoints'
import keys from './keys'
import { Character, Episode } from './types'

interface Props {
  id?: number
}

export default function useCharacter(props: Props) {
  const { id } = props

  const { data: characterData, isLoading: isLoadingCharacter } = useQuery(keys.singleCharacter(id), () => (
    fetch(`${endpoints.characters}/${id}`)
      .then(response => response.json())
      .then(data => data)
  ), {
    enabled: Boolean(id)
  })

  const character: Character | undefined = characterData
  const episodeList = character?.episode.map(episode => episode.split('').splice(40, episode.length).join('')) || []

  const { data: episodesData, isLoading: isLoadingEpisodes } = useQuery(keys.episodes(episodeList), () => (
    fetch(`${endpoints.episodes}/${episodeList}`)
      .then(response => response.json())
      .then(data => data)
  ))

  const episodes: Episode[] = episodesData?.length ? episodesData : [episodesData]

  const randomIds = React.useMemo(() => id && [
    Math.floor(Math.random() * (100 - 1) + 1),
    Math.floor(Math.random() * (100 - 1) + 1)
  ], [id]) || []

  const { data: charactersData, isLoading: isLoadingCharacters } = useQuery(keys.interestingCharacters(randomIds), () => (
    fetch(`${endpoints.characters}/${randomIds}`)
      .then(response => response.json())
      .then(data => data)
  ))

  const interestingCharacters: Character[] = charactersData

  const isLoading = isLoadingCharacter || isLoadingEpisodes || isLoadingCharacters

  return { character, episodes, interestingCharacters, isLoading }
}
