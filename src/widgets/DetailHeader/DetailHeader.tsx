import React from 'react'

import RoundedAvatar from '@/components/RoundedAvatar'
import StatusChip from '@/components/StatusChip'

import * as S from './styles'

interface Props {
  name: string
  status: string
  species: string
  image: string
}

export default function DetailHeader(props: Props) {
  const { name, status, species, image } = props

  const statusColor = status === 'Alive' ? 'green' : 'red'

  return (
    <S.Container>
      <S.Image />
      <S.InfoWrapper>
        <RoundedAvatar image={image} />
        <S.DetailsWrapper>
          <StatusChip color={statusColor} label={status} />
          <h3>{name}</h3>
          <p>{species}</p>
        </S.DetailsWrapper>
      </S.InfoWrapper>
    </S.Container>
  )
}
