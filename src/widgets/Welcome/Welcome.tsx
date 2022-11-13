import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Button from '@/ui/Button'

import * as S from './styles'

export default function Welcome() {
  return (
    <S.Container>
      <Image src="/images/logo-squad-makers.svg" alt="Squad makers logo" width={260} height={38} priority/>
      <Image src="/images/logo-rick-and-morty.svg" alt="Rick and Morty logo" width={450} height={270} priority/>
      <S.InfoWrapper>
        <S.Title>Bienvenido a Rick and Morty</S.Title>
        <S.Description>En esta prueba, evaluaremos su capacidad para construir la aplicación mediante el análisis de código 
  y la reproducción del siguiente diseño.</S.Description>
      </S.InfoWrapper>
      <Link href="/app">
        <Button>Continuar</Button>
      </Link>
    </S.Container>
  )
}
