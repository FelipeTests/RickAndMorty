import React from 'react'
import Image from 'next/image'

import * as S from './styles'

export default function Footer() {
  return (
    <S.Container>
      <Image src="/images/logo-squad-makers.svg" width={260} height={39} alt="Squadmakers logo"/>
    </S.Container>
  )
}
