import React from 'react'

import Button from '@/ui/Button'

import * as S from './styles'

interface Props {
  page: number
  onPrevious: () => void
  onNext: () => void
}

export default function PaginationControls(props: Props) {
  const { page = 1, onPrevious, onNext } = props

  const handlePrevious = () => {
    if (page !== 1) {
      onPrevious()
    }
  }

  return (
    <S.Container>
      <Button onClick={handlePrevious}>
        &lt;
      </Button>
      <h3>
        {page}
      </h3>
      <Button onClick={onNext}>
        &gt;
      </Button>
    </S.Container>
  )
}
