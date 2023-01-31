import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders the structure', () => {
    const { getByRole } = render(<Home />)

    const main = getByRole('main');

    expect(main).toBeInTheDocument()
  })

  it('Should render the main component inside the page', () => {
    const { getByRole } = render(<Home />)

    const component = getByRole('search-box');

    expect(component).toBeInTheDocument()
  })
})
