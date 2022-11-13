import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

export default function Dialog(props: Props) {
  const { children, isOpen, onClose } = props

  if (!isOpen) return null

  return (
    <S.Container onClick={onClose}>
      <S.DialogCard onClick={(event) => event.stopPropagation()}>
        <S.CloseButton onClick={onClose}><FontAwesomeIcon icon={faClose} /></S.CloseButton>
        {children}
      </S.DialogCard>
    </S.Container>
  )
}
