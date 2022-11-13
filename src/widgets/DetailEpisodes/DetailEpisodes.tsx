import React from 'react'

import InformationCard from '@/components/InformationCard'
import type { Episode } from '@/queries/types'
import EpisodeCard from '@/components/EpisodeCard'

import * as S from './styles'

interface Props {
  episodes?: Episode[]
}

export default function DetailInformation(props: Props) {
  const { episodes } = props

  return (
    <S.Container>
      <S.Title>Episodios</S.Title>
      <S.CardsContainer>
        {episodes?.map(episode => (
          <EpisodeCard key={episode.id} label={episode.name} value={episode.episode} footer={episode.air_date} />
        ))}
      </S.CardsContainer>
    </S.Container>
  )
}
