import { render, screen, fireEvent } from '@testing-library/react'
import SearchForm from '../components/SearchForm/index'

describe('<SearchForm />', () => {
  test('it should handle user input and submit the form', () => {
    const handleSearchMock = jest.fn()
    render(<SearchForm loading={false} onSearch={handleSearchMock} />)

    // Simulate user typing an account name
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'wombatmaster' },
    })

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    // Assert that the mock was called with the correct value
    expect(handleSearchMock).toHaveBeenCalledWith('wombatmaster')
  })
})
