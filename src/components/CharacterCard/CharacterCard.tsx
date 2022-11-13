import React from 'react'
import Image from 'next/image'

import DataDisplay from '@/ui/DataDisplay'
import StatusChip from '@/components/StatusChip'

import * as S from './styles'

interface Props {
  image: string
  status: string
  species: string
  name: string
  lastLocation: string
  firstSeen: string
  onClick: () => void
}

export default function CharacterCard(props: Props) {
  const { status, species, image, name, lastLocation, firstSeen, onClick } = props

  const statusColor = status === 'Alive' ? 'green' : 'red'

  return (
    <S.Container onClick={onClick}>
      <S.Image image={image} />
      <S.InfoWrapper>
        <DataDisplay label={<StatusChip color={statusColor} label={`${status} - ${species}`} />}>{name}</DataDisplay>
        <DataDisplay label="Last known location:">{lastLocation}</DataDisplay>
        <DataDisplay label="First seen in:">{firstSeen}</DataDisplay>
      </S.InfoWrapper>
    </S.Container>
  )
}
