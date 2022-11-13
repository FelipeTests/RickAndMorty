import React from 'react'

import * as S from './styles'

interface Props {
  image: string
}

export default function RoundedAvatar(props: Props) {
  const { image } = props

  return (
    <S.Image image={image} />
  )
}
