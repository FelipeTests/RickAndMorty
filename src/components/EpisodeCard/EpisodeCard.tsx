import React from 'react'

import DetailedDataDisplay from '@/ui/DetailedDataDisplay'

import * as S from './styles'

interface Props {
  label: string
  value: string
  footer: string
}

export default function InformationCard(props: Props) {
  const { label, value, footer } = props

  return (
    <S.Container>
      <DetailedDataDisplay label={label} footer={footer}>
        {value}  
      </DetailedDataDisplay>
    </S.Container>
  )
}
