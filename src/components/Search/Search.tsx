import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

interface Props {
  value: string
  setValue: (value: string) => void
}

const Search = React.forwardRef(function Search(props: Props, ref: React.Ref<HTMLInputElement>) {
  const { value, setValue } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(value)
  }

  return (
    <S.Container>
      <S.Adornment>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </S.Adornment>
      <S.Input value={value} onChange={handleChange} placeholder="Buscar personaje..." />
    </S.Container>
  )
})

export default Search