import { render, screen } from "@testing-library/react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

import CharacterList from "./CharacterList"

const queryClient = new QueryClient()

const characterListMock = [
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Alive',
    species: 'Human',
    name: 'Rick Sanchez',
    lastLocation: 'Test',
    firstSeen: 'Test',
    onClick: jest.fn(),
    id: 1,
    created: '',
    episode: [''],
    gender: '',
    location: {
      name: '',
      url: ''
    },
    origin: {
      name: '',
      url: ''
    },
    type: '',
    url: ''
  },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    status: 'Alive',
    species: 'Human',
    name: 'Morty Smith',
    lastLocation: 'Test',
    firstSeen: 'Test',
    onClick: jest.fn(),
    id: 2,
    created: '',
    episode: [''],
    gender: '',
    location: {
      name: '',
      url: ''
    },
    origin: {
      name: '',
      url: ''
    },
    type: '',
    url: ''
  }
]

const propsMock = {
  page: 1,
  setPage: jest.fn(),
  characters: characterListMock,
  isLoading: false,
  setSearch: jest.fn(),
  setGender: jest.fn()
}

describe('widgets/CharacterList', () => {
  it('Renders character list', () => {
    render(
    <QueryClientProvider client={queryClient}>
      <CharacterList
        {...propsMock}
      />
      </QueryClientProvider>
    )

    expect(screen.getByText('Rick Sanchez')).toBeDefined()
    expect(screen.getByText('Morty Smith')).toBeDefined()
  })
})