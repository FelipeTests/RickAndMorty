import React from 'react'

import InformationCard from '@/components/InformationCard'

import * as S from './styles'

interface Props {
  gender: string
  origin: string
  type: string
}

export default function DetailInformation(props: Props) {
  const { gender, origin, type } = props

  return (
    <S.Container>
      <S.Title>Información</S.Title>
      <S.CardsContainer>
        <InformationCard label="Gender:" value={gender} />
        <InformationCard label="Origin:" value={origin} />
        <InformationCard label="Type:" value={type} />
      </S.CardsContainer>
    </S.Container>
  )
}
