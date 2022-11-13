import { fireEvent, render, screen } from '@testing-library/react'
import CharacterCard from './CharacterCard'

const propsMock = {
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  status: 'Alive',
  species: 'Human',
  name: 'Rick Sanchez',
  lastLocation: 'Test',
  firstSeen: 'Test',
  onClick: jest.fn()
}

describe('components/CharacterCard', () => {
  it('Renders default state', () => {
    render(<CharacterCard {...propsMock} />)

    expect(screen.getByText('Alive - Human')).toBeDefined()
    expect(screen.getByText('Rick Sanchez')).toBeDefined()
  })

  it('Calls onClick', () => {
    const onClickMock = jest.fn()

    render(<CharacterCard {...propsMock} onClick={onClickMock} />)

    const speciesText = screen.getByText('Rick Sanchez')

    fireEvent.click(speciesText)

    expect(onClickMock).toBeCalled()
  })
})