import React from 'react'

import * as S from './styles'

interface Props {
  children: React.ReactNode
}

export default function Main(props: Props) {
  const { children } = props

  return (
    <S.Container>
      {children}
    </S.Container>
  )
}
