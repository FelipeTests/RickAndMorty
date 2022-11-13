import React from 'react'

import Dialog from '@/ui/Dialog'
import DetailHeader from '@/widgets/DetailHeader'
import useCharacter from '@/queries/useCharacter'
import DetailInformation from '@/widgets/DetailInformation'
import Divider from '@/ui/Divider'
import DetailEpisodes from '@/widgets/DetailEpisodes'
import DetailCharacters from '@/widgets/DetailCharacters'
import Button from '@/ui/Button'

import * as S from './styles'

interface Props {
  isOpen: boolean
  onClose: () => void
  characterId?: number
  setSelectedCharacter: (id: number) => void
}

export default function DetailDialog(props: Props) {
  const { isOpen, onClose, characterId, setSelectedCharacter } = props

  const { character, interestingCharacters, episodes, isLoading } = useCharacter({ id: characterId })

  if (!characterId) return null

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      {isLoading || !character || !episodes ? <>Loading...</> : (
        <>
          <DetailHeader name={character.name} species={character.species} image={character.image} status={character.status} />
          <DetailInformation gender={character.gender} origin={character.origin.name} type={character.type || 'Unknown'} />
          <Divider />
          <DetailEpisodes episodes={episodes} />
          <Divider />
          <DetailCharacters characters={interestingCharacters} setSelectedCharacter={setSelectedCharacter} />
          <S.Footer>
            <Button>Compartir personaje</Button>
          </S.Footer>
        </>
      )}
    </Dialog>
  )
}
