import React from 'react'

import Header from '@/widgets/Header'
import Footer from '@/widgets/Footer'

import * as S from './styles'

interface Props {
  children: React.ReactNode
}

export default function Layout(props: Props) {
  const { children } = props

  return (
    <S.Container>
      <Header />
      {children}
      <Footer />
    </S.Container>
  )
}
