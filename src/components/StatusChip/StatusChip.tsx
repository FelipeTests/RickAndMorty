import React from 'react'

import * as S from './styles'

export type Color = 'red' | 'green'

interface Props {
  color: Color
  label: string
}

export default function StatusChip(props: Props) {
  const { color, label } = props

  return (
    <S.Container>
      <S.Indicator color={color} />
      {label}
    </S.Container>
  )
}
