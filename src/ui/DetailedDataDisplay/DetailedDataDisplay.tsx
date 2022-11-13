import React from 'react'

import * as S from './styles'

interface Props {
  label: React.ReactNode | string
  children: React.ReactNode | string
  footer: React.ReactNode | string
}

export default function DetailedDataDisplay(props: Props) {
  const { label, children, footer } = props

  return (
    <S.Container>
      <S.Label>
        {label}
      </S.Label>
      <S.Value>
        {children}
      </S.Value>
      <S.Footer>
        {footer}
      </S.Footer>
    </S.Container>
  )
}
