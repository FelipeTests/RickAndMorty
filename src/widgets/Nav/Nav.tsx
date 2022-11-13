import React from 'react'

import NavButton from '@/components/NavButton'
import { useGender } from '@/contexts/GenderContext'
import { Genders } from '@/enums'

import * as S from './styles'

export default function Nav() {
  const { gender, setGender } = useGender()

  const handleSwitchGender = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value as Genders

    setGender(value)
  }

  return (
    <S.Container>
      <NavButton onClick={handleSwitchGender} isActive={gender === Genders.All} value={Genders.All}>{Genders.All}</NavButton>
      <NavButton onClick={handleSwitchGender} isActive={gender === Genders.Unknown} value={Genders.Unknown}>{Genders.Unknown}</NavButton>
      <NavButton onClick={handleSwitchGender} isActive={gender === Genders.Female} value={Genders.Female}>{Genders.Female}</NavButton>
      <NavButton onClick={handleSwitchGender} isActive={gender === Genders.Male} value={Genders.Male}>{Genders.Male}</NavButton>
      <NavButton onClick={handleSwitchGender} isActive={gender === Genders.Genderless} value={Genders.Genderless}>{Genders.Genderless}</NavButton>
    </S.Container>
  )
}
