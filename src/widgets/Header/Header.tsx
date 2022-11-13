import React from 'react'
import Image from 'next/image'

import Search from '@/components/Search'
import { useSearch } from '@/contexts/SearchContext'
import Nav from '@/widgets/Nav'

import * as S from './styles'

export default function Header() {
  const { search, setSearch } = useSearch()
  
  return (
    <S.Container>
      <Image src="/images/logo-rick-and-morty.svg" alt="Rick and Morty logo" width={400} height={200} priority/>
      <Search value={search} setValue={setSearch} />
      <Nav />
    </S.Container>
  )
}
