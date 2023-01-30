import { render, screen } from '@testing-library/react'

import SearchBox from '@/components/SearchBox';

describe('SearchBox', () => {
  it('Should render the SearchBox', () => {
    const requestSearch = jest.fn();

    const { getByTestId, queryByPlaceholderText } = render(<SearchBox requestSearch={requestSearch} />)

    expect(queryByPlaceholderText('Search')).toBeTruthy();
    expect(getByTestId('search-button')).toBeTruthy();
  })
})
