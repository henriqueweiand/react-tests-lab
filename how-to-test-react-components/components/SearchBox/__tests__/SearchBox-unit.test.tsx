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

  it('Shouldnt trigger the search', () => {
    const { getByTestId } = render(<SearchBox requestSearch={requestSearch} />)

    fireEvent.click(getByTestId('search-button'));
    expect(requestSearch).not.toHaveBeenCalled()
  })

  it('Should trigger the search', () => {
    const { getByTestId, queryByPlaceholderText } = render(<SearchBox requestSearch={requestSearch} />)
    const searchInput = queryByPlaceholderText('Search');

    fireEvent.change(searchInput, { target: { value: "test" } })
    fireEvent.click(getByTestId('search-button'));
    expect(requestSearch).toHaveBeenCalled()
  })
})
