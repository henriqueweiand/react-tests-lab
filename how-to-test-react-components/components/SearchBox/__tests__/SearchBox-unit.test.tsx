import { render, screen } from '@testing-library/react'

import SearchBox from '@/components/SearchBox';

describe('Home', () => {
  it('Should render the SearchBox', () => {
    const requestSearch = jest.fn();

    render(<SearchBox requestSearch={requestSearch} />)

    // expect(heading).toBeInTheDocument()
  })
})
