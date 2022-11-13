import { fireEvent, render, screen } from '@testing-library/react'
import Search from './Search'

const propsMock = {
  value: '',
  setValue: jest.fn()
}

describe('components/Search', () => {
  it('Renders default state', () => {
    render(<Search {...propsMock} />)

    expect(screen.getByPlaceholderText('Buscar personaje...')).toBeDefined()
  })

  it('Calls setValue on change', () => {
    const valueMock = ''
    const setValueMock = jest.fn()

    render(<Search value={valueMock} setValue={setValueMock} />)

    const input = screen.getByPlaceholderText('Buscar personaje...')

    fireEvent.change(input, { target: { value: 'test search' }})

    expect(setValueMock).toHaveBeenLastCalledWith('test search')
  })
})