import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react';
import Counter from '..';

describe('Counter', () => {
  it('increments the count', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    // const dispatch = jest.spyOn(React, 'useReducer').mockImplementationOnce((initialState, reducer) => [initialState, jest.fn()]);

    fireEvent.click(incrementButton);

    // expect(dispatch).toHaveBeenCalledWith({ type: 'increment' });
    expect(getByTestId('count')).toHaveTextContent('1');
  });

  it('decrements the count', () => {
    const { getByTestId } = render(<Counter />);
    const decrementButton = getByTestId('decrement');
    // const dispatch = jest.spyOn(React, 'useReducer').mockImplementationOnce((reducer, initialState) => [{ count: 0 }, jest.fn()]);

    fireEvent.click(decrementButton);

    // expect(dispatch).toHaveBeenCalledWith({ type: 'decrement' });
    expect(getByTestId('count')).toHaveTextContent('-1');
  });
});