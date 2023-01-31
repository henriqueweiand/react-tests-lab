import { fireEvent, render, screen } from '@testing-library/react'

import Button from '@/components/Button';

describe('Button', () => {
  const onClick = jest.fn();

  it('Should render the Button', () => {
    const textValue = 'test'
    const { getByTestId } = render(<Button data-testid="button-test" onClick={onClick}>{textValue}</Button>)

    const component = getByTestId('button-test');
    const text = screen.getByText(new RegExp(textValue, 'i'))

    expect(component).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  it('Should have the attribute onClick', () => {
    const { getByTestId } = render(<Button role="button" data-testid="button-test" custom-prop="test" />)

    const component = getByTestId('button-test');
    const customAttribute = component.getAttribute("custom-prop");

    expect(customAttribute).toEqual("test")
  })
})
