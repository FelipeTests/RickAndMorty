import React from 'react'

import * as S from './styles'

interface Props {
  label: React.ReactNode | string
  children: React.ReactNode | string
}

export default function DataDisplay(props: Props) {
  const { label, children } = props

  return (
    <S.Container>
      <S.Label>
        {label}
      </S.Label>
      <S.Value>
        {children}
      </S.Value>
    </S.Container>
  )
}
