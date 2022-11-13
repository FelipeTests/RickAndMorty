import React from 'react'

import Button from '@/ui/Button'

import * as S from './styles'

interface Props {
  onClear: () => void
}

export default function NotFound(props: Props) {
  const { onClear } = props

  return (
    <S.Container>
      <h2>Uh-oh!</h2>
      <p>Pareces perdido en tu viaje</p>
      <Button onClick={onClear}>Eliminar Filtros</Button>
    </S.Container>
  )
}
