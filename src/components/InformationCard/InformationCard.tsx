import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import DataDisplay from '@/ui/DataDisplay'

import * as S from './styles'

interface Props {
  label: string
  value: string
}

export default function InformationCard(props: Props) {
  const { label, value } = props

  return (
    <S.Container>
      <DataDisplay label={
        <S.LabelWrapper>
          <FontAwesomeIcon icon={faInfoCircle}/>
          {label}
        </S.LabelWrapper>
      }
      >
        {value}  
      </DataDisplay>
    </S.Container>
  )
}
