import React from 'react'

import { Genders } from '@/enums'
import CharacterCard from '@/components/CharacterCard'
import PaginationControls from '@/ui/PaginationControls'
import NotFound from '@/widgets/NotFound'
import DetailDialog from '@/widgets/DetailDialog'
import { Character } from '@/queries/types'

import * as S from './styles'

interface Props {
  page: number
  setPage: (number: number) => void
  characters?: Character[]
  isLoading: boolean
  setSearch: (search: string) => void
  setGender: (gender: Genders) => void
}

export default function CharacterList(props: Props) {
  const { page, setPage, characters, isLoading, setSearch, setGender } = props

  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const [selectedCharacterId, setSelectedCharacterId] = React.useState<number>()

  React.useEffect(() => {
    const storedPage = window.localStorage.getItem('page')
    if (storedPage && setPage) {
      setPage(parseInt(storedPage))
    }
  }, [setPage])

  const handleClearFilters = () => {
    setSearch('')
    setGender(Genders.All)
    setPage(1)
  }

  if (isLoading) return <>Loading...</>

  if (!characters) return <NotFound onClear={handleClearFilters} />

  const handleNextPage = () => {
    setPage(page + 1)
    window.localStorage.setItem('page', (page + 1).toString())
  }

  const handlePreviousPage = () => {
    setPage(page - 1)
    window.localStorage.setItem('page', (page - 1).toString())
  }

  const handleOpenDialog = (characterId: number) => {
    setIsDialogOpen(true)
    setSelectedCharacterId(characterId)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <S.Container>
      <S.List>
        {characters?.map(character => (
          <CharacterCard
            key={character.id}
            image={character.image}
            status={character.status}
            species={character.species}
            name={character.name}
            lastLocation={character.location.name}
            firstSeen={character.origin.name}
            onClick={() => handleOpenDialog(character.id)}
          />
        ))}
      </S.List>
      <S.PaginationWrapper>
        <PaginationControls onNext={handleNextPage} onPrevious={handlePreviousPage} page={page} />
      </S.PaginationWrapper>
      <DetailDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        characterId={selectedCharacterId}
        setSelectedCharacter={setSelectedCharacterId}
      />
    </S.Container>
  )
}
