import React from 'react'

import type { Character } from '@/queries/types'
import CharacterCard from '@/components/CharacterCard'

import * as S from './styles'

interface Props {
  characters: Character[]
  setSelectedCharacter: (id: number) => void
}

export default function DetailCharacters(props: Props) {
  const { characters, setSelectedCharacter } = props

  return (
    <S.Container>
      <S.Title>Personajes Interesantes</S.Title>
      <S.CardsContainer>
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            image={character.image}
            status={character.status}
            species={character.species}
            name={character.name}
            lastLocation={character.location.name}
            firstSeen={character.origin.name}
            onClick={() => setSelectedCharacter(character.id)}
          />
        ))}
      </S.CardsContainer>
    </S.Container>
  )
}
