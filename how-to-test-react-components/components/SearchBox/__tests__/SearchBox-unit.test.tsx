import { fireEvent, render, screen } from '@testing-library/react'

import SearchBox from '@/components/SearchBox';

describe('SearchBox', () => {
  const requestSearch = jest.fn();

  it('Should render the SearchBox', () => {
    const { getByTestId, queryByPlaceholderText } = render(<SearchBox requestSearch={requestSearch} />)

    expect(queryByPlaceholderText('Search')).toBeTruthy();
    expect(getByTestId('search-button')).toBeTruthy();
  })

  it('Should update the input value', () => {
    const { queryByPlaceholderText } = render(<SearchBox requestSearch={requestSearch} />)
    const searchInput = queryByPlaceholderText('Search');

    fireEvent.change(searchInput, { target: { value: "test" } })

    expect(searchInput.value).toBe("test")
  })

  it('Should update the input value', () => {
    const { queryByPlaceholderText } = render(<SearchBox requestSearch={requestSearch} />)
    const searchInput = queryByPlaceholderText('Search');

    fireEvent.change(searchInput, { target: { value: "test" } })

    expect(searchInput.value).toBe("test")
  })
})
